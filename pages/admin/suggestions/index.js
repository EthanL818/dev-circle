import React, { useState, useEffect } from "react";
import { firestore, auth } from "../../../lib/firebase";
import {
  collection,
  doc,
  query as firestoreQuery,
  orderBy,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Link from "next/link";

function TabContent({ suggestions }) {
  if (suggestions.length === 0) {
    return (
      <p>
        No suggestions found. Share your posts with others to receive
        constructive feedback!
      </p>
    );
  }

  const uid = auth.currentUser.uid;

  const markAsToDo = async (suggestion) => {
    let status = suggestion.status === "to-do" ? "" : "to-do";
    const suggestionRef = doc(
      collection(
        firestore,
        "users",
        uid,
        "posts",
        suggestion.slug,
        "suggestions"
      ),
      suggestion.id
    );
    await updateDoc(suggestionRef, { status: status });
  };

  const markAsImplemented = async (suggestion) => {
    let status = suggestion.status === "implemented" ? "" : "implemented";
    const suggestionRef = doc(
      collection(
        firestore,
        "users",
        uid,
        "posts",
        suggestion.slug,
        "suggestions"
      ),
      suggestion.id
    );
    await updateDoc(suggestionRef, { status: status });
  };

  const dismiss = async (suggestion) => {
    let status = suggestion.status === "dismissed" ? "" : "dismissed";
    const suggestionRef = doc(
      collection(
        firestore,
        "users",
        uid,
        "posts",
        suggestion.slug,
        "suggestions"
      ),
      suggestion.id
    );
    await updateDoc(suggestionRef, { status: status });
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
              <button
                style={{ backgroundColor: "#d3494e" }}
                onClick={() => dismiss(suggestion)}
              >
                Remove from Dismissed
              </button>
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

  // Create a reference to the user's posts collection
  const userPostsRef = collection(firestore, "users", uid, "posts");

  // Create a query to order posts by date created
  const postQuery = firestoreQuery(userPostsRef, orderBy("createdAt"));

  // Use the query with useCollection hook
  const [postSnapshot, loading, error] = useCollection(postQuery);

  // State to store all suggestions
  const [allSuggestions, setAllSuggestions] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [suggestionsLoading, setSuggestionsLoading] = useState(true);

  // Fetch suggestions whenever postSnapshot changes
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (postSnapshot && !postSnapshot.empty) {
        let suggestions = [];
        for (const postDoc of postSnapshot.docs) {
          const postRef = doc(userPostsRef, postDoc.id);
          const suggestionsCollectionRef = collection(postRef, "suggestions");
          const suggestionQuery = firestoreQuery(
            suggestionsCollectionRef,
            orderBy("createdAt")
          );
          const suggestionSnapshot = await getDocs(suggestionQuery);
          const postSuggestions = suggestionSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          suggestions = [...suggestions, ...postSuggestions];
        }
        setAllSuggestions(suggestions);
        setSuggestionsLoading(false);
      } else {
        setSuggestionsLoading(false);
      }
    };
    fetchSuggestions();
  }, [postSnapshot, userPostsRef]);

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
        <TabContent suggestions={filterSuggestions(activeTab)} />
      </main>
    </>
  );
}
