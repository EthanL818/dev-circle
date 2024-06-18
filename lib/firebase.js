// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // Import initializeApp from Firebase
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import authentication functions from Firebase
import {
  getFirestore,
  collection,
  query,
  where,
  limit,
  getDocs,
  serverTimestamp,
  FieldValue,
} from "firebase/firestore"; // Import Firestore functions
import { getStorage } from "firebase/storage"; // Import storage functions from Firebase

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "dev-circle-1b2a0.firebaseapp.com",
  projectId: "dev-circle-1b2a0",
  storageBucket: "dev-circle-1b2a0.appspot.com",
  messagingSenderId: "147806722079",
  appId: "1:147806722079:web:6218067643169a67a09d2a",
  measurementId: "G-845JDMS4TV",
};

// Initialize Firebase with the configuration
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Initialize Firebase Authentication
const googleAuthProvider = new GoogleAuthProvider(); // Initialize Google Auth Provider
const firestore = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Firebase Storage
const STATE_CHANGED = "state_changed";
const increment = FieldValue.increment;

// Export the services for use in other parts of your app
export {
  auth,
  googleAuthProvider,
  firestore,
  storage,
  serverTimestamp,
  STATE_CHANGED,
  increment,
};

// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = collection(firestore, "users"); // Reference to the "users" collection
  const q = query(usersRef, where("username", "==", username), limit(1)); // Create a query to find the user with the specified username
  const querySnapshot = await getDocs(q); // Execute the query
  const userDoc = querySnapshot.docs[0]; // Get the first document from the query result
  return userDoc; // Return the user document
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data(); // Get the data from the document
  return {
    ...data, // Spread the data
    // Gotcha! Firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(), // Convert createdAt timestamp to milliseconds
    updatedAt: data.updatedAt.toMillis(), // Convert updatedAt timestamp to milliseconds
  };
}
