import Link from "next/link";
import { doc, writeBatch } from "firebase/firestore";
import { firestore, auth } from "../lib/firebase";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

export default function SuggestionFeed({ suggestions: initialSuggestions }) {
  const [suggestions, setSuggestions] = useState(initialSuggestions);

  useEffect(() => {
    setSuggestions(initialSuggestions);
  }, [initialSuggestions]);

  const removeSuggestion = (suggestionToRemove) => {
    setSuggestions(
      suggestions.filter((suggestion) => suggestion !== suggestionToRemove)
    );
  };

  return (
    <div>
      {suggestions
        ? suggestions.map((suggestion) => (
            <SuggestionItem
              suggestion={suggestion}
              removeSuggestion={removeSuggestion}
            />
          ))
        : null}
    </div>
  );
}

function SuggestionItem({ suggestion, removeSuggestion }) {
  const createdAt =
    typeof suggestion?.createdAt === "number"
      ? new Date(suggestion.createdAt)
      : suggestion.createdAt.toDate();

  const deleteSuggestion = async () => {
    const uid = auth.currentUser.uid;
    const batch = writeBatch(firestore);

    // Delete the suggestion from the root-level 'suggestions' collection
    const rootSuggestionRef = doc(firestore, `suggestions/${suggestion.id}`);
    batch.delete(rootSuggestionRef);

    // Delete the suggestion from the user's collection
    const userSuggestionRef = doc(
      firestore,
      `users/${uid}/suggestions/${suggestion.id}`
    );
    batch.delete(userSuggestionRef);

    try {
      await batch.commit();
    } catch (error) {
      console.error("Error deleting suggestion:", error);
    }

    // Remove the suggestion from the state
    removeSuggestion(suggestion);

    // Display confirmation message
    toast.success("Suggestion deleted successfully.");
  };

  return (
    <div className="card">
      <div className="card-content">
        <Link href={`/${suggestion.username}`}>
          <strong>Written by @{suggestion.username}</strong>
        </Link>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>{suggestion.content}</p>
          <button
            className="btn-red"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you wish to delete this suggestion? This action cannot be undone."
                )
              )
                deleteSuggestion(suggestion);
            }}
          >
            Delete
          </button>
        </div>

        <footer style={{ marginTop: "1rem" }}>
          <span>Created at {createdAt.toString()}</span>
        </footer>
      </div>
    </div>
  );
}
