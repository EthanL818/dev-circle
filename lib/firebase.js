// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCppgCR948WXkFF9mMTlyNJf2u1niAa1Pg",
  authDomain: "dev-circle-1b2a0.firebaseapp.com",
  projectId: "dev-circle-1b2a0",
  storageBucket: "dev-circle-1b2a0.appspot.com",
  messagingSenderId: "147806722079",
  appId: "1:147806722079:web:6218067643169a67a09d2a",
  measurementId: "G-845JDMS4TV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const firestore = getFirestore(app);
const storage = getStorage(app);

// Export the services for use in other parts of your app
export { auth, googleAuthProvider, firestore, storage };
