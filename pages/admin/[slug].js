import styles from "../../styles/Admin.module.css";
import AuthCheck from "../../components/AuthCheck";
import { firestore, auth, serverTimestamp } from "../../lib/firebase";

import { useState } from "react";
import { useRouter } from "next/router";

import { useDocumentData } from "react-firebase-hooks/firestore";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import toast from "react-hot-toast";

import { getFirestore, collection, doc, updateDoc } from "firebase/firestore";

export default function AdminPostEdit(props) {
  return (
    <AuthCheck>
      <PostManager />
    </AuthCheck>
  );
}

// Interface that allows users to either edit/preview their posts
function PostManager() {
  // State for toggling the post preview
  const [preview, setPreview] = useState(false);

  // Router to retrieve slug
  const router = useRouter();
  const { slug } = router.query;

  // Create a reference to the current post
  const postRef = doc(
    collection(firestore, "users", auth.currentUser.uid, "posts"),
    slug
  );

  // useDocumentData hook is used to listen to any changes to the document data in realtime
  const [post] = useDocumentData(postRef);

  return (
    <main className={styles.container}>
      {post && (
        <>
          <section>
            <h1>{post.title}</h1>
            <p>ID: {post.slug}</p>

            <PostForm
              postRef={postRef}
              defaultValues={post}
              preview={preview}
            />
          </section>

          <aside>
            <h3>Tools</h3>
            <button onClick={() => setPreview(!preview)}>
              {preview ? "Edit" : "Preview"}
            </button>
            <Link href={`/${post.username}/${post.slug}`}>
              <button className="btn-blue">Live view</button>
            </Link>
          </aside>
        </>
      )}
    </main>
  );
}

// Interface that the user can directly interact with to update their posts
function PostForm({ defaultValues, postRef, preview }) {
  // Populating React form with default values from Firestore
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues,
    mode: "onChange",
  }); // Anytime input values are changed, re-render and re-validate form

  // Callback function that handles updating the Firestore database once form is submitted
  const updatePost = async ({ content, published }) => {
    await updateDoc(postRef, {
      content,
      published,
      updatedAt: serverTimestamp(),
    });

    reset({ content, published });

    toast.success("Post updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
          <ReactMarkdown>{watch("content")}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
        <textarea name="content" {...register("content")}></textarea>

        <fieldset>
          <input
            className={styles.checkbox}
            name="published"
            type="checkbox"
            {...register("published")}
          />
          <label>Published</label>
        </fieldset>

        <button type="submit" className="btn-green">
          Save Changes
        </button>
      </div>
    </form>
  );
}
