import { firestore, auth } from "../../../lib/firebase";
import { useRouter } from "next/router";
import {
  collection,
  where,
  query as firestoreQuery,
  orderBy,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";

import AuthCheck from "../../../components/AuthCheck";
import SuggestionFeed from "../../../components/SuggestionFeed";

function SuggestionsList() {
  const router = useRouter();
  const { slug } = router.query;
  const [uid, setUid] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      setUid(auth.currentUser.uid);
    }
  }, [auth.currentUser]);

  useEffect(() => {
    console.log("Current slug:", slug); // Debug log for slug
  }, [slug]);

  const userSuggestionsRef = uid
    ? collection(firestore, "users", uid, "suggestions")
    : null;
  const suggestionQuery =
    slug && userSuggestionsRef
      ? firestoreQuery(
          userSuggestionsRef,
          where("slug", "==", slug),
          orderBy("createdAt")
        )
      : null;

  const [suggestionSnapshot, loading, error] = useCollection(suggestionQuery);

  useEffect(() => {
    if (suggestionSnapshot) {
      console.log(
        "Suggestions fetched:",
        suggestionSnapshot.docs.map((doc) => doc.data())
      ); // Debug log for fetched suggestions
    }
  }, [suggestionSnapshot]);

  if (!slug || !uid || loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching suggestions:", error); // Debug log for errors
    return <div>Error fetching suggestions.</div>;
  }

  const suggestions = suggestionSnapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return suggestions?.length > 0 ? (
    <div>
      <h1>Manage Suggestions</h1>
      <SuggestionFeed suggestions={suggestions} />
    </div>
  ) : (
    <div>
      <h1>No suggestions on this post yet!</h1>
    </div>
  );
}

export default function AdminSuggestionsPage() {
  return (
    <div className="list-content">
      <AuthCheck>
        <SuggestionsList />
      </AuthCheck>
    </div>
  );
}
