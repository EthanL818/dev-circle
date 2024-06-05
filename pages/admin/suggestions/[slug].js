import { firestore, auth } from "../../../lib/firebase";
import { useState } from "react";
import { useRouter } from "next/router";

import { useDocumentData } from "react-firebase-hooks/firestore";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import toast from "react-hot-toast";

// need the post reference to pull the suggestions
// need to pull all suggestions and display them on this page
// need to be able to approve or reject suggestions

function SuggestionsList() {
  // Create a reference to the current post
  const postRef = doc(
    collection(firestore, "users", auth.currentUser.uid, "posts"),
    slug
  );
}

export default function AdminSuggestionsPage({}) {
  return <main></main>;
}
