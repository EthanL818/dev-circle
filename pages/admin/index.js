import styles from "../../styles/Admin.module.css";
import AuthCheck from "../../components/AuthCheck";
import PostFeed from "../../components/PostFeed";
import { UserContext } from "../../lib/context";
import { firestore, auth, serverTimestamp } from "../../lib/firebase"; // Import services from Firebase

import { useContext, useState } from "react";
import { useRouter } from "next/router";

import { useCollection } from "react-firebase-hooks/firestore";
import kebabCase from "lodash.kebabcase";
import toast from "react-hot-toast";

import {
  getFirestore,
  collection,
  doc,
  query as firestoreQuery,
  orderBy,
  setDoc,
  Timestamp,
} from "firebase/firestore";

export default function AdminPostsPage(props) {
  return (
    <main>
      <AuthCheck>
        <PostList />
        <CreateNewPost />
      </AuthCheck>
    </main>
  );
}

// Displays all posts that a user has created
function PostList() {
  // Reference to the "posts" collection for the current user
  const ref = collection(firestore, "users", auth.currentUser.uid, "posts");

  // Create a query to order posts by date created
  const postsQuery = firestoreQuery(ref, orderBy("createdAt"));

  // Use the query with useCollection hook
  const [querySnapshot] = useCollection(postsQuery);

  // Map the querySnapshot to extract post data
  const posts = querySnapshot?.docs.map((doc) => doc.data());

  return (
    <>
      <h1>Manage your Posts</h1>
      <PostFeed posts={posts} admin />
    </>
  );
}

// Contains the form to create a new post
function CreateNewPost() {
  // Create a router to push user to post edit page once post is created
  const router = useRouter();

  // Grab user's username from global context
  const { username } = useContext(UserContext);

  // State for title of post
  const [title, setTitle] = useState("");

  // Ensure slug is URL safe
  const slug = encodeURI(kebabCase(title));

  // Validate length
  const isValid = title.length > 3 && title.length < 100;

  // Create a new post in Firestore
  const createPost = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;

    // Reference to the new post document
    const ref = doc(collection(firestore, "users", uid, "posts"), slug);

    // Data to be set in the new post
    const data = {
      title,
      slug,
      uid,
      username,
      published: false,
      content: "# hello world!",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      heartCount: 0,
    };

    // Set the document with the data
    await setDoc(ref, data);

    toast.success("Post created!");

    // Imperative navigation after doc is set
    router.push(`/admin/${slug}`);
  };

  return (
    <form onSubmit={createPost}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Article title..."
        className={styles.input}
      />
      <p>
        <strong>Slug:</strong> {slug}
      </p>
      <button type="submit" disabled={!isValid} className="btn-green">
        Create New Post
      </button>
    </form>
  );
}
