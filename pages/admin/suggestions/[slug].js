import { firestore, auth } from "../../../lib/firebase";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  query as firestoreQuery,
  orderBy,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import toast from "react-hot-toast";

import AuthCheck from "../../../components/AuthCheck";
import SuggestionFeed from "../../../components/SuggestionFeed";

// need the post reference to pull the suggestions
// need to pull all suggestions and display them on this page
// need to be able to approve or reject suggestions

function SuggestionsList() {
  // utilize the useRouter hook to retrieve the slug directly from the url
  const router = useRouter();
  const { slug } = router.query;
  const uid = auth.currentUser.uid;

  // Create a reference to the current post
  const postRef = doc(collection(firestore, "users", uid, "posts"), slug);

  // Create a reference to the suggestions collection of the current post
  const suggestionsCollectionRef = collection(postRef, "suggestions");

  // Create a query to order posts by date created
  const suggestionQuery = firestoreQuery(
    suggestionsCollectionRef,
    orderBy("createdAt")
  );

  // Use the query with useCollection hook
  const [suggestionSnapshot] = useCollection(suggestionQuery);

  // Map the suggestionSnapshot to extract post data
  const suggestions = suggestionSnapshot?.docs.map((doc) => doc.data());

  return suggestions?.length > 0 ? (
    <div>
      <h1>Manage Suggestions</h1>
      <SuggestionFeed suggestions={suggestions}></SuggestionFeed>
    </div>
  ) : (
    <div>
      <h1>No suggestions on this post yet!</h1>
    </div>
  );
}

export default function AdminSuggestionsPage({}) {
  return (
    <div className="list-content">
      <AuthCheck>
        <SuggestionsList />
      </AuthCheck>
    </div>
  );
}
