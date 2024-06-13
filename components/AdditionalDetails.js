import { useState, useEffect } from "react";
import { firestore, auth } from "../lib/firebase";
import { updateDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

// UI component to display additional user details
export default function AdditionalUserDetails({ user, setUser, admin }) {
  // State to determine if user is editing details
  const [isEditing, setIsEditing] = useState(false);

  // State variables to store the user's additional details
  const [school, setSchool] = useState(user?.school);
  const [location, setLocation] = useState(user?.location);
  const [work, setWork] = useState(user?.work);
  const [workingOn, setWorkingOn] = useState(user?.workingOn);
  const [learning, setLearning] = useState(user?.learning);
  const [interests, setInterests] = useState(user?.interests);

  useEffect(() => {
    // Update states when user prop changes
    setSchool(user?.school);
    setLocation(user?.location);
    setWork(user?.work);
    setWorkingOn(user?.workingOn);
    setLearning(user?.learning);
    setInterests(user?.interests);
  }, [user]);

  // async function to edit user information
  const editInfo = async () => {
    const userRef = doc(firestore, "users", auth.currentUser.uid);
    if (admin) {
      const updates = {};

      // Only update fields if they are not undefined
      if (school !== undefined) updates.school = school;
      if (location !== undefined) updates.location = location;
      if (work !== undefined) updates.work = work;
      if (workingOn !== undefined) updates.workingOn = workingOn;
      if (learning !== undefined) updates.learning = learning;
      if (interests !== undefined) updates.interests = interests;

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
    <div>
      {admin ? (
        isEditing ? (
          <div className="card additional-details" style={{ padding: "2rem" }}>
            {school ? <h2>Edit School</h2> : <h2>Add School</h2>}
            <input
              className="messageBox description-input"
              type="text"
              value={school || ""}
              onChange={(e) => setSchool(e.target.value)}
            ></input>
            {work ? <h2>Edit Work</h2> : <h2>Add Work</h2>}
            <input
              className="messageBox description-input"
              type="text"
              value={work || ""}
              onChange={(e) => setWork(e.target.value)}
            ></input>
            {location ? <h2>Edit Location</h2> : <h2>Add location</h2>}
            <input
              className="messageBox description-input"
              type="email"
              value={location || ""}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
            {interests ? <h2>Edit Interests</h2> : <h2>Add Interests</h2>}
            <input
              className="messageBox description-input"
              type="text"
              value={interests || ""}
              onChange={(e) => setInterests(e.target.value)}
            ></input>
            {workingOn ? (
              <h2>Edit Current Project</h2>
            ) : (
              <h2>Add Current Project</h2>
            )}
            <input
              className="messageBox description-input"
              type="text"
              value={workingOn || ""}
              onChange={(e) => setWorkingOn(e.target.value)}
            ></input>
            {learning ? (
              <h2>Edit Currently Learning</h2>
            ) : (
              <h2>Add Currently Learning</h2>
            )}{" "}
            <input
              className="messageBox description-input"
              type="text"
              value={learning || ""}
              onChange={(e) => setLearning(e.target.value)}
            ></input>
            <div className="box-center">
              <button className="btn-green" onClick={editInfo}>
                Save Changes
              </button>
              <button className="btn-red" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="additional-details">
            {!school && !location && !workingOn && !learning && !work ? (
              <>
                <h2>Add Additional Details</h2>
                <p className="comment">
                  Where your additional details go. Completely optional.
                </p>

                <div className="box-center">
                  <button
                    className="btn-edit"
                    onClick={() => setIsEditing(true)}
                  >
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
                    Add Additional Info
                  </button>
                </div>
              </>
            ) : (
              <div>
                {user.school && (
                  <div className="additional-detail card">
                    <h3>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-backpack"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "5px" }}
                      >
                        <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                        <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5" />
                      </svg>
                      Education
                    </h3>
                    <p>{user.school}</p>
                  </div>
                )}

                {user.location && (
                  <div className="additional-detail card">
                    <h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "5px" }}
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      Location
                    </h3>

                    <p>{user.location}</p>
                  </div>
                )}

                {user.work && (
                  <div className="additional-detail card">
                    <h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-briefcase"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "5px" }}
                      >
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                      </svg>
                      Work
                    </h3>

                    <p>{user.work}</p>
                  </div>
                )}

                {user.interests && (
                  <div className="additional-detail card">
                    <h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "5px" }}
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                      </svg>
                      Interests
                    </h3>

                    <p>{user.interests}</p>
                  </div>
                )}
                {user.workingOn && (
                  <div className="additional-detail card">
                    <h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-hammer"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "5px" }}
                      >
                        <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                      </svg>
                      Current Project
                    </h3>

                    <p> {user.workingOn}</p>
                  </div>
                )}
                {user.learning && (
                  <div className="additional-detail card">
                    <h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-book"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "5px" }}
                      >
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                      </svg>
                      Currently Learning
                    </h3>
                    <p>{user.learning}</p>
                  </div>
                )}
                <div className="box-center">
                  <button
                    className="btn-edit"
                    onClick={() => setIsEditing(true)}
                  >
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
                    Edit Additional Info
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      ) : (
        <div>
          {(school ||
            location ||
            workingOn ||
            learning ||
            work ||
            interests) && (
            <div className="additional-details">
              {user.school && (
                <div className="additional-detail card">
                  <h3>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-backpack"
                      viewBox="0 0 16 16"
                      style={{ marginRight: "5px" }}
                    >
                      <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                      <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5" />
                    </svg>
                    Education
                  </h3>
                  <p>{user.school}</p>
                </div>
              )}
              {user.location && (
                <div className="additional-detail card">
                  <h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                      style={{ marginRight: "5px" }}
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    Location
                  </h3>

                  <p>{user.location}</p>
                </div>
              )}
              {user.work && (
                <div className="additional-detail card">
                  <h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-briefcase"
                      viewBox="0 0 16 16"
                      style={{ marginRight: "5px" }}
                    >
                      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                    </svg>
                    Work
                  </h3>

                  <p>{user.work}</p>
                </div>
              )}
              {user.interests && (
                <div className="additional-detail card">
                  <h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person"
                      viewBox="0 0 16 16"
                      style={{ marginRight: "5px" }}
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                    Interests
                  </h3>

                  <p>{user.interests}</p>
                </div>
              )}
              {user.workingOn && (
                <div className="additional-detail card">
                  <h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-hammer"
                      viewBox="0 0 16 16"
                      style={{ marginRight: "5px" }}
                    >
                      <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                    </svg>
                    Current Project
                  </h3>

                  <p> {user.workingOn}</p>
                </div>
              )}
              {user.learning && (
                <div className="additional-detail card">
                  <h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-book"
                      viewBox="0 0 16 16"
                      style={{ marginRight: "5px" }}
                    >
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    Currently Learning
                  </h3>
                  <p>{user.learning}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
