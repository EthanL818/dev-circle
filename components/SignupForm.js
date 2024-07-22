import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../lib/firebase";
import styles from "../styles/EnterPage.module.css";

export default function SignupForm({ onVerificationSent, setSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [verificationSent, setVerificationSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error state

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Send verification email
      await sendEmailVerification(userCredential.user);
      setVerificationSent(true);

      // Notify parent component
      onVerificationSent();

      // Listen for changes in the user's authentication state
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          // Reload the user's profile to ensure the latest state is fetched
          await user.reload();
        }
      });
    } catch (error) {
      setError(error.message); // Display error message to the user
    }
  };

  return (
    <div className={styles.formContent}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          className={styles.input}
          style={{ marginBottom: "0.7rem" }}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          className={styles.input}
          style={{ marginBottom: "1rem" }}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <div className={styles.buttonContainer}>
          <button className={styles.btnSignup} type="submit">
            Sign Up
          </button>
          <SignInButton />
          <p style={{ color: "gray" }}>
            Already on devCircle?{" "}
            <a
              style={{
                fontWeight: "bold",
                color: "#6495ED",
                cursor: "pointer",
              }}
              onClick={() => setSignUp(false)}
            >
              Log In
            </a>
          </p>
        </div>

        {error && <p>{error}</p>}
        {verificationSent && !error && (
          <>
            <h3 style={{ fontWeight: "bold", color: "whitesmoke" }}>
              Verification email sent. Please check your inbox and spam folders.
            </h3>
            <button
              onClick={resendVerificationEmail}
              style={{ marginTop: "1rem" }}
            >
              Resend Email
            </button>
          </>
        )}
      </form>
    </div>
  );
}

// Sign in with Google button component
function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <button className={styles.btnGoogle} onClick={signInWithGoogle}>
      <img src={"/google.png"} alt="Google Sign-In" /> Sign in with Google
    </button>
  );
}
