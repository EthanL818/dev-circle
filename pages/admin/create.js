import kebabCase from "lodash.kebabcase";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { serverTimestamp, auth, firestore } from "../../lib/firebase";
import { UserContext } from "../../lib/context";
import styles from "../../styles/Admin.module.css";

import { collection, doc, setDoc } from "firebase/firestore";

export default function NewPostPage({}) {
  return (
    <div className="new-post-container">
      <div className="card-content card">
        <h1>Create a New Post</h1>
        <p className="frequency" style={{ marginBottom: "2rem" }}>
          {" "}
          <i>
            Tip: Keep your article title concise and to the point to attract as
            much viewership as possible to your project! Please ensure that your
            title adheres to the community guidelines.
          </i>
        </p>
        <CreateNewPost />
      </div>
    </div>
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
      likeCount: 0,
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
      <div className="box-center" style={{ padding: "0.5rem" }}>
        <button type="submit" disabled={!isValid} className="btn-green">
          Create New Post
        </button>
      </div>
    </form>
  );
}
