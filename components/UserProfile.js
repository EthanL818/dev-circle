import React, { useState } from "react";
import { firestore, auth } from "../lib/firebase";
import { updateDoc, doc } from "firebase/firestore";

// UI component for user profile
export default function UserProfile({ user, setUser, admin = true }) {
  // Initialize two new states to handle editing user description
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState("");

  const editDescription = async () => {
    // create a referemce to the user document
    const userRef = doc(firestore, "users", auth.currentUser.uid);
    if (admin) {
      await updateDoc(userRef, {
        description: newDescription,
      });
      setIsEditing(false);
      setUser({ ...user, description: newDescription });
    }
  };

  return (
    <div className="box-center card" style={{ marginTop: "20px" }}>
      <img src={user.photoURL || "/avatar.jpg"} className="card-img-center" />
      <h1>{user.displayName || "Anonymous User"}</h1>
      <p>
        <i>@{user.username}</i>
      </p>
      {admin ? (
        isEditing ? (
          <>
            <input
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button onClick={editDescription}>Submit</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <p>{user.description}</p>
            <button onClick={() => setIsEditing(true)}>Edit Description</button>
          </>
        )
      ) : (
        user.description && <p>{user.description}</p>
      )}
    </div>
  );
}
