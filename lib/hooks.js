import { auth, firestore } from "../lib/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot } from "firebase/firestore";

// Custom hook to read auth record and user profile doc
export function useUserData() {
  // populated with current user object from Firebase when signed in, null otherwise
  const [user] = useAuthState(auth);

  // set initial state of username to null
  const [username, setUsername] = useState(null);

  // useEffect hook to listen for any changes to the user object
  useEffect(() => {
    // initialize variable to turn off realtime subscription
    let unsubscribe;

    if (user) {
      // pulls user reference data from Firebase database
      const userDocRef = doc(firestore, "users", user.uid);

      // set up a real-time listener
      unsubscribe = onSnapshot(userDocRef, (doc) => {
        // sets the username based on the information from database
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }

    // The onSnapshot method returns a function (the unsubscribe function) that can be called to remove the real-time listener.
    // The useEffect hook can return a cleanup function, which React calls when the component unmounts or before running the effect again if dependencies change.
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  return { user, username };
}
