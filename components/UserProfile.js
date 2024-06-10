import React, { useState, useEffect } from "react";
import { firestore, auth } from "../lib/firebase";
import { updateDoc, doc } from "firebase/firestore";

// UI component for user profile
export default function UserProfile({ user, setUser, admin }) {
  // Initialize new states to handle editing user fields
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(user?.description);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    // Update states when user prop changes
    setDescription(user?.description);
    const displayName = user?.displayName.split(" ");

    if (!displayName) return;
    setFirstName(displayName[0]);
    setLastName(displayName[1]);
  }, [user]);

  // async function to edit user information
  const editInfo = async () => {
    // create a reference to the user document
    const userRef = doc(firestore, "users", auth.currentUser.uid);
    if (admin) {
      await updateDoc(userRef, {
        description: description,
        displayName: `${firstName} ${lastName}`,
      });
      setIsEditing(false);
      setUser({
        ...user,
        description: description,
        displayName: `${firstName} ${lastName}`,
      });
    }
  };

  return (
    <div className="box-center" style={{ marginTop: "20px" }}>
      <div className="card-content card">
        <img
          src={user?.photoURL || "/avatar.jpg"}
          className="card-img-center"
        />

        {admin ? (
          isEditing ? (
            <>
              <h2>Edit Display Name</h2>
              <div className="name-inputs">
                <input
                  className="messageBox name-input"
                  type="text"
                  maxlength="10"
                  value={firstName || ""}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>

                <input
                  className="messageBox name-input"
                  type="text"
                  maxlength="10"
                  value={lastName || ""}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>

              <h2>Edit User Description</h2>
              <textarea
                className="messageBox description description-input"
                type="text"
                maxlength="250"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className="btn-green" onClick={editInfo}>
                Save Changes
              </button>
              <button className="btn-red" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <h1 className="profile-header">
                {user?.displayName || "Anonymous User"}
              </h1>
              <p className="profile-username">
                <i>@{user?.username}</i>
              </p>
              <p>{user?.description}</p>
              <div className="box-center">
                <button className="btn-edit" onClick={() => setIsEditing(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "5px" }}
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>{" "}
                  Edit Info
                </button>
              </div>
            </>
          )
        ) : (
          <>
            <h1 className="profile-header">
              {user?.displayName || "Anonymous User"}
            </h1>
            <p className="profile-username">
              <i>@{user?.username}</i>
            </p>
            {user?.description && <p>{user?.description}</p>}
          </>
        )}
      </div>
    </div>
  );
}
