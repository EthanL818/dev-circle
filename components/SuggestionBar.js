import { doc, writeBatch, serverTimestamp } from "firebase/firestore";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { firestore, auth } from "../lib/firebase";
import { UserContext } from "../lib/context";

export default function SuggestionBar({ postRef }) {
  // Grab user's username from global context
  const { username } = useContext(UserContext);
  const router = useRouter();
  const { slug } = router.query;

  const addSuggestion = async (content) => {
    const uid = auth.currentUser.uid;
    const batch = writeBatch(firestore);

    // Add the suggestion to the post
    const suggestionRef = doc(firestore, `${postRef.path}/suggestions/${uid}`);
    batch.set(suggestionRef, {
      slug,
      uid,
      content,
      username,
      createdAt: serverTimestamp(),
    });

    // Add the suggestion to a new collection under the user
    const userSuggestionRef = doc(
      firestore,
      `users/${uid}/suggestions/${postRef.id}`
    );

    batch.set(userSuggestionRef, {
      postRef,
      content,
      username,
      createdAt: serverTimestamp(),
    });

    // Commit the batch
    await batch.commit();
  };

  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the suggestion is roughly a sentence long (at least 5 words)
    if (suggestion.split(" ").length < 5) {
      toast.error("Suggestion is too short. Please write at least 5 words.");
      return;
    }

    // Check if the suggestion is shorter than an essay (less than 500 words)
    if (suggestion.split(" ").length > 500) {
      toast.error(
        "Suggestion is too long. Please keep it shorter than 500 words."
      );
      return;
    }

    await addSuggestion(suggestion);
    setSuggestion("");
    toast.success("Suggestion has been sent!");
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
            class="icon"
          >
            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
          </svg>
          Suggestion Box
        </h2>

        <p
          style={{
            color: "#B3B3B3",
            fontSize: "16px",
            lineHeight: "1.5",
            margin: "10px 0 20px",
          }}
        >
          Share your thoughts and ideas here, and the author will carefully
          consider your feedback to{" "}
          <span style={{ fontWeight: "bold" }}>help improve the project</span>.
          <br />
          Suggestions will be sent directly to the author of the post, so don't
          be shy!
        </p>

        <form onSubmit={handleSubmit} autocomplete="off">
          <div className="messageBox suggestion">
            <textarea
              required=""
              placeholder="Send a suggestion..."
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              type="text"
              id="messageInput"
            />
            <button type="submit" id="sendButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 664 663"
              >
                <path
                  fill="none"
                  d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="33.67"
                  stroke="#6c6c6c"
                  d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
