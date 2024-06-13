import { useState, useEffect } from "react";
import { firestore, auth } from "../lib/firebase";
import { updateDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

// UI component for user profile
export default function UserProfile({ user, setUser, admin }) {
  // Initialize new states to handle editing user fields
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(user?.description);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(user?.email);
  const [github, setGithub] = useState(user?.github);
  const [linkedin, setLinkedin] = useState(user?.linkedin);
  const [website, setWebsite] = useState(user?.website);

  useEffect(() => {
    // Update states when user prop changes
    setDescription(user?.description);
    setEmail(user?.email);
    setGithub(user?.github);
    setLinkedin(user?.linkedin);
    setWebsite(user?.website);
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
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email) && email !== "" && email !== undefined) {
        toast.error("Invalid email address.");
        return;
      }

      // Validate GitHub link
      const githubRegex =
        /^https:\/\/github\.com\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;
      if (!githubRegex.test(github) && github !== "" && github !== undefined) {
        toast.error("Invalid GitHub link.");
        return;
      }

      // Validate LinkedIn link
      const linkedinRegex =
        /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]{1,100}\/?$/;
      if (
        !linkedinRegex.test(linkedin) &&
        linkedin !== "" &&
        linkedin !== undefined
      ) {
        toast.error("Invalid LinkedIn link.");
        return;
      }

      // Validate website link
      const websiteRegex =
        /^https?:\/\/(www\.)?[a-zA-Z0-9-]{1,100}\.[a-z]{2,4}\/?$/;
      if (
        !websiteRegex.test(website) &&
        website !== "" &&
        website !== undefined
      ) {
        toast.error("Invalid website link.");
        return;
      }

      const updates = {
        description: description,
        displayName: `${firstName} ${lastName}`,
      };

      // Only update fields if they are not undefined
      if (email !== undefined) updates.email = email;
      if (github !== undefined) updates.github = github;
      if (linkedin !== undefined) updates.linkedin = linkedin;
      if (website !== undefined) updates.website = website;

      await updateDoc(userRef, updates);
      setIsEditing(false);

      // Update local state
      setUser((prevUser) => ({
        ...prevUser,
        ...updates,
      }));
      toast.success("User information updated successfully!");
    }
  };

  return (
    <div className="box-center" style={{ marginTop: "20px" }}>
      <div className="card-content profile-card">
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

              <h2>Edit Email</h2>
              <input
                className="messageBox description-input"
                type="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <h2>Edit Github</h2>
              <input
                className="messageBox description-input"
                type="text"
                value={github || ""}
                onChange={(e) => setGithub(e.target.value)}
              ></input>

              <h2>Edit LinkedIn</h2>
              <input
                className="messageBox description-input"
                type="text"
                value={linkedin || ""}
                onChange={(e) => setLinkedin(e.target.value)}
              ></input>

              <h2>Edit Personal Website</h2>
              <input
                className="messageBox description-input"
                type="text"
                value={website || ""}
                onChange={(e) => setWebsite(e.target.value)}
              ></input>

              <div className="box-center">
                <button className="btn-green" onClick={editInfo}>
                  Save Changes
                </button>
                <button className="btn-red" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="profile-header">
                {user?.displayName || "Anonymous User"}
              </h1>
              <p className="profile-username">
                <i>@{user?.username}</i>
              </p>
              <p className="profile-description">{user?.description}</p>
              <ContactInfo user={user} />

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
            {user?.description && (
              <p className="profile-description">{user?.description}</p>
            )}
            <ContactInfo user={user} />
          </>
        )}
      </div>
    </div>
  );
}

export function ContactInfo({ user }) {
  return (
    <div className="contact-info">
      {user?.email && (
        <a href={`mailto: ${user.email}`} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
        </a>
      )}

      {user?.github && (
        <a href={user.github} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </a>
      )}

      {user?.linkedin && (
        <a href={user.linkedin} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
      )}

      {user?.website && (
        <a href={user.website} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-globe"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
          </svg>
        </a>
      )}
    </div>
  );
}
