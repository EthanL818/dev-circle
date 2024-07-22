// Import necessary hooks and Firebase auth functions
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import styles from "../styles/EnterPage.module.css";

export default function LoginForm({ setSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error state
    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully.");
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError(error.message); // Display error message to the user
    }
  };

  return (
    <div className={styles.formContent}>
      <h1>Log In</h1>
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
            Log In
          </button>
          <SignInButton />
          <p style={{ color: "gray" }}>
            Don't have an account?{" "}
            <a
              style={{
                fontWeight: "bold",
                color: "#6495ED",
                cursor: "pointer",
              }}
              onClick={() => setSignUp(true)}
            >
              Sign Up
            </a>
          </p>
        </div>
        {error && <p>{error}</p>}
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
