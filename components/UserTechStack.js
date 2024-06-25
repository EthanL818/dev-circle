import { useState, useEffect } from "react";
import { firestore, auth } from "../lib/firebase";
import { updateDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import { techLabelToKebabCase, techList } from "../lib/tech";
import Link from "next/link";
import TagDropdown from "./TagDropdown"; // Import TagDropdown

export default function UserTechStack({ user, setUser, admin }) {
  const [isEditing, setIsEditing] = useState(false);
  const [techStack, setTechStack] = useState(user?.techStack || []);
  const [selectedTech, setSelectedTech] = useState([]);
  const [tagsChanged, setTagsChanged] = useState(false);

  useEffect(() => {
    setTechStack(user?.techStack || []);
  }, [user]);

  useEffect(() => {
    if (user && user.techStack) {
      const techToUpdate = user.techStack.map((techValue) => {
        const techObj = techList.find((tech) => tech.name === techValue);
        return techObj
          ? {
              value: techObj.name,
              label: techObj.name,
              color: techObj.color,
              icon: techObj.icon,
            }
          : {
              value: techValue,
              label: techValue,
              color: "#333",
              icon: null,
            };
      });
      setSelectedTech(techToUpdate);
    }
  }, [user]);

  const editTechStack = async () => {
    const updatedTechStack = selectedTech.map((tech) => tech.value);

    const userRef = doc(firestore, "users", auth.currentUser.uid);
    if (admin) {
      const updates = { techStack: updatedTechStack };
      await updateDoc(userRef, updates);
      setTechStack(updatedTechStack); // Update local techStack state
      setIsEditing(false);
      setUser((prevUser) => ({
        ...prevUser,
        techStack: updatedTechStack,
      }));
      toast.success("Tech stack updated successfully!");
    }
  };

  const handleSelectedTagsChange = (updatedTags) => {
    setSelectedTech(updatedTags);
    setTagsChanged(true);
  };

  return (
    <div className="user-tech-card card">
      <div className="user-card-content">
        <h2>Tech Stack</h2>
        {isEditing ? (
          <div>
            {/* Use TagDropdown for selecting tech */}
            <TagDropdown
              selectedTags={selectedTech}
              setSelectedTags={handleSelectedTagsChange}
              setTagsChanged={setTagsChanged}
              tech={true}
              profile={true}
            />
            <div className="box-center">
              <button className="btn-green" onClick={editTechStack}>
                Save Changes
              </button>
              <button className="btn-red" onClick={() => setIsEditing(false)}>
                Cancel
              </button>{" "}
            </div>
          </div>
        ) : (
          <>
            <div style={{ marginTop: "10px" }}>
              {selectedTech.map((tech) => (
                <Link
                  href={`/tech?name=${techLabelToKebabCase(tech.label)}`}
                  key={tech.value}
                >
                  <span
                    key={tech.value}
                    className="icon-tag"
                    style={{
                      borderColor: tech.color,
                    }}
                  >
                    {tech.icon}
                  </span>
                </Link>
              ))}
            </div>
            {admin && (
              <button
                onClick={() => setIsEditing(!isEditing)}
                style={{ marginTop: "20px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "5px" }}
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
                Edit Tech Stack
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
