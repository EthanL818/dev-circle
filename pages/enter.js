import { useEffect, useState, useContext, useCallback } from "react";
import { UserContext } from "../lib/context";
import { doc, writeBatch, getDoc } from "firebase/firestore";
import { TypeAnimation } from "react-type-animation";
import { auth, firestore } from "../lib/firebase";
import SignupForm from "../components/SignupForm";
import { sendEmailVerification } from "firebase/auth";
import debounce from "lodash.debounce";
import styles from "../styles/EnterPage.module.css";
import LoginForm from "../components/LoginForm";

export default function EnterPage(props) {
  const { user, username } = useContext(UserContext);
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [SignUp, setSignUp] = useState(false);
  const [isCooldownActive, setIsCooldownActive] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (user) {
      user.reload().then(() => {
        setEmailVerified(user.emailVerified);
      });
    }
  }, [user]);

  useEffect(() => {
    let interval = null;
    if (cooldown > 0) {
      interval = setInterval(() => {
        setCooldown((cooldown) => cooldown - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [cooldown]);

  const handleVerificationSent = () => {
    setVerificationSent(true);
  };

  // Function to resend verification email
  const resendVerificationEmail = async () => {
    if (!isCooldownActive && cooldown === 0) {
      setIsCooldownActive(true);
      setCooldown(60); // Start cooldown for 60 seconds
      try {
        sendEmailVerification(auth.currentUser);
      } catch (error) {
        console.error("Error resending verification email: ", error);
        // Check if the error is due to too many requests
        if (error.code === "auth/too-many-requests") {
          alert(
            "You have reached the limit for sending verification emails. Please wait a while before trying again."
          );
          // Extend the cooldown period or handle as needed
        } else {
          // Handle other errors
          alert(
            "An error occurred while trying to resend the verification email. Please try again later."
          );
        }
      }
      setTimeout(() => {
        setIsCooldownActive(false);
      }, 60000); // Consider adjusting this based on Firebase's feedback or error messages
    }
  };

  return (
    <main className={styles.container}>
      {user ? (
        emailVerified ? (
          !username ? (
            <UsernameForm />
          ) : (
            <SignOutButton />
          )
        ) : (
          <div className="card">
            <div className="card-content">
              <h3 style={{ fontWeight: "bold", color: "whitesmoke" }}>
                Verification email sent. Please check your inbox and spam <br />
                folders, and reload once verification is completed.
              </h3>
              <button
                onClick={resendVerificationEmail}
                disabled={cooldown > 0}
                style={{ marginTop: "1rem" }}
              >
                Resend Email
              </button>
              {cooldown > 0 && (
                <p>Please wait {cooldown} seconds before resending.</p>
              )}
            </div>
          </div>
        )
      ) : (
        <div className={styles.flexContainer}>
          <div className={styles.graphic}>
            <div className={styles.graphicContent}>
              <TypeAnimation
                sequence={[
                  "Showcase your innovative projects to a global audience.",
                  2500, // Waits 2.5s
                  "Receive detailed and valuable feedback from peers.",
                  2500, // Waits 2.5s
                  "Inspire your peers with your unique ideas and creativity.",
                  2500, // Waits 2.5s
                  "Easily share and showcase your projects with the world.",
                  2500, // Waits 2.5s
                  "Grow your userbase and connect with like-minded individuals.",
                  2500, // Waits 2.5s
                  "Gain global exposure and recognition for your projects.",
                  2500, // Waits 2.5s
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "3em",
                  display: "inline-block",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              />
            </div>
          </div>
          <div className={styles.formContainer}>
            {SignUp ? (
              <SignupForm
                onVerificationSent={handleVerificationSent}
                setSignUp={setSignUp}
              />
            ) : (
              <>
                <LoginForm setSignUp={setSignUp} />
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username } = useContext(UserContext);

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const userDoc = doc(firestore, `users/${user.uid}`);
    const usernameDoc = doc(firestore, `usernames/${formValue}`);

    const batch = writeBatch(firestore);
    batch.set(userDoc, {
      username: formValue,
      photoURL: user.photoURL,
      displayName: user.displayName,
    });
    batch.set(usernameDoc, { uid: user.uid });

    await batch.commit();
  };

  const onChange = (e) => {
    const val = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  };

  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const ref = doc(firestore, `usernames/${username}`);
        const docSnapshot = await getDoc(ref);
        setIsValid(!docSnapshot.exists());
        setLoading(false);
      }
    }, 500),
    []
  );

  function UsernameMessage({ username, isValid, loading }) {
    if (loading) {
      return <p>Checking...</p>;
    } else if (isValid) {
      return <p className="text-success">{username} is available!</p>;
    } else if (username && !isValid) {
      return <p className="text-danger">That username is taken!</p>;
    } else {
      return <p></p>;
    }
  }

  return (
    !username && (
      <section>
        <h3>Choose Username</h3>
        <form onSubmit={onSubmit}>
          <input
            name="username"
            placeholder="myname"
            value={formValue}
            onChange={onChange}
          />
          <UsernameMessage
            username={formValue}
            isValid={isValid}
            loading={loading}
          />
          <button type="submit" className="btn-green" disabled={!isValid}>
            Choose
          </button>
        </form>
      </section>
    )
  );
}
