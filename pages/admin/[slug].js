import styles from "../../styles/Admin.module.css";
import AuthCheck from "../../components/AuthCheck";
import { firestore, auth, serverTimestamp } from "../../lib/firebase";
import ImageUploader from "../../components/ImageUploader";

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
  const { register, handleSubmit, reset, watch, formState } = useForm({
    defaultValues,
    mode: "onChange",
  }); // Anytime input values are changed, re-render and re-validate form

  // from the formState, we can pull the isValid and isDirty booleans.
  // isValid is true if the form doesn't have any errors, and isDirty is true when the user modifies the form
  const { isValid, isDirty, errors } = formState;

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

  // Only watch for content if the form is initialized
  const content = watch("content", defaultValues.content);

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
        <ImageUploader />

        <textarea
          {...register("content", {
            maxLength: { value: 20000, message: "content is too long" },
            minLength: { value: 10, message: "content is too short" },
            required: { value: true, message: "content is required" },
          })}
        ></textarea>

        {errors.content && (
          <p className="text-danger">{errors.content.message}</p>
        )}

        <fieldset>
          <input
            className={styles.checkbox}
            type="checkbox"
            {...register("published")}
          />
          <label>Published</label>
        </fieldset>

        <button
          type="submit"
          className="btn-green"
          disabled={!isDirty || !isValid}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
