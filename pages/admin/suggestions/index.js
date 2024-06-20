import React, { useState, useEffect } from "react";
import { firestore, auth } from "../../../lib/firebase";
import {
  collection,
  doc,
  query as firestoreQuery,
  orderBy,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Link from "next/link";
import toast from "react-hot-toast";

function TabContent({ suggestions, onUpdateStatus }) {
  if (suggestions.length === 0) {
    return (
      <p style={{ textAlign: "center" }}>
        No suggestions found. Share your posts with others to receive
        constructive feedback!
      </p>
    );
  }

  const uid = auth.currentUser.uid;
  const userSuggestionsRef = collection(firestore, "users", uid, "suggestions");

  const markAsImplemented = async (suggestion) => {
    let status = suggestion.status === "implemented" ? "" : "implemented";
    const suggestionRef = doc(userSuggestionsRef, suggestion.id);
    await updateDoc(suggestionRef, { status: status });
    onUpdateStatus(suggestion.id, status);
  };

  const markAsToDo = async (suggestion) => {
    let status = suggestion.status === "to-do" ? "" : "to-do";
    const suggestionRef = doc(userSuggestionsRef, suggestion.id);
    await updateDoc(suggestionRef, { status: status });
    onUpdateStatus(suggestion.id, status);
  };

  const dismiss = async (suggestion) => {
    let status = suggestion.status === "dismissed" ? "" : "dismissed";
    const suggestionRef = doc(userSuggestionsRef, suggestion.id);
    await updateDoc(suggestionRef, { status: status });
    onUpdateStatus(suggestion.id, status);
  };

  const deleteSuggestion = async (suggestion) => {
    const uid = auth.currentUser.uid;
    const batch = writeBatch(firestore);
    const suggestionRef = doc(
      firestore,
      `users/${uid}/suggestions/${suggestion.id}`
    );
    batch.delete(suggestionRef);
    try {
      await batch.commit();
      onUpdateStatus(suggestion.id, null, true);
      toast.success("Suggestion deleted successfully.");
    } catch (error) {
      console.error("Error deleting suggestion:", error);
    }
  };

  return (
    <div className="suggestions-container">
      {suggestions.map((suggestion, index) => (
        <div className="suggestion-card" key={index}>
          <span className="suggestion-date">
            Suggested by{" "}
            <Link href={`/${suggestion.username}`}>
              <i className="user-card-username" style={{ marginTop: "0rem" }}>
                @{suggestion.username}
              </i>{" "}
            </Link>
            for the project{" "}
            <Link href={`/${suggestion.username}/${suggestion.slug}`}>
              <b> {suggestion.slug}</b>
            </Link>
          </span>
          <p className="suggestion-text">{suggestion.content}</p>
          <span className="suggestion-date">
            Submitted on:{" "}
            {new Date(suggestion.createdAt.seconds * 1000).toLocaleDateString()}
          </span>
          <div className="suggestion-actions">
            {suggestion.status == "to-do" ? (
              <button onClick={() => markAsToDo(suggestion)}>
                Remove from To-Do
              </button>
            ) : (
              <button onClick={() => markAsToDo(suggestion)}>
                Mark as To-Do
              </button>
            )}

            {suggestion.status == "implemented" ? (
              <button onClick={() => markAsImplemented(suggestion)}>
                Remove from Implemented
              </button>
            ) : (
              <button onClick={() => markAsImplemented(suggestion)}>
                Mark as Implemented
              </button>
            )}

            {suggestion.status == "dismissed" ? (
              <>
                <button
                  style={{ backgroundColor: "#3bdf72" }}
                  onClick={() => dismiss(suggestion)}
                >
                  Recover
                </button>

                <button
                  style={{ backgroundColor: "#d3494e" }}
                  onClick={() => deleteSuggestion(suggestion)}
                >
                  Delete
                </button>
              </>
            ) : (
              <button
                style={{ backgroundColor: "#d3494e" }}
                onClick={() => dismiss(suggestion)}
              >
                Dismiss
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Suggestions() {
  const uid = auth.currentUser?.uid;

  if (!uid) {
    return <div>Please sign in to view suggestions.</div>;
  }

  const userSuggestionsRef = collection(firestore, "users", uid, "suggestions");
  const suggestionQuery = firestoreQuery(
    userSuggestionsRef,
    orderBy("createdAt")
  );

  const [suggestionSnapshot, loading, error] = useCollection(suggestionQuery);
  const [allSuggestions, setAllSuggestions] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [suggestionsLoading, setSuggestionsLoading] = useState(true);

  useEffect(() => {
    if (suggestionSnapshot) {
      const allSuggestions = suggestionSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllSuggestions(allSuggestions);
      setSuggestionsLoading(false);
    }
  }, [suggestionSnapshot]);

  if (loading || suggestionsLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error("Error loading suggestions:", error);
    return <div>Error loading suggestions.</div>;
  }

  const filterSuggestions = (tab) => {
    switch (tab) {
      case "Implemented":
        return allSuggestions.filter((s) => s.status === "implemented");
      case "To-Do":
        return allSuggestions.filter((s) => s.status === "to-do");
      case "Dismissed":
        return allSuggestions.filter((s) => s.status === "dismissed");
      case "All":
        return allSuggestions.filter(
          (suggestion) =>
            !["to-do", "implemented", "dismissed"].includes(suggestion.status)
        );
      default:
        return allSuggestions;
    }
  };

  const updateSuggestionStatus = (id, status, isDelete = false) => {
    setAllSuggestions((prevSuggestions) =>
      isDelete
        ? prevSuggestions.filter((suggestion) => suggestion.id !== id)
        : prevSuggestions.map((suggestion) =>
            suggestion.id === id ? { ...suggestion, status } : suggestion
          )
    );
  };

  return (
    <>
      <div className="box-center">
        <h1>Manage Suggestions</h1>
      </div>
      <main className="suggestions-page">
        <div className="tabs card">
          {["All", "Implemented", "To-Do", "Dismissed"].map((tab) => (
            <button
              key={tab}
              className={`tab-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <TabContent
          suggestions={filterSuggestions(activeTab)}
          onUpdateStatus={updateSuggestionStatus}
        />
      </main>
    </>
  );
}
