import styles from "../../styles/Admin.module.css";
import AuthCheck from "../../components/AuthCheck";
import { firestore, auth, serverTimestamp } from "../../lib/firebase";
import ImageUploader from "../../components/ImageUploader";
import TagDropdown from "../../components/TagDropdown";
import { tagList } from "../../lib/tags";
import { techList } from "../../lib/tech";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import toast from "react-hot-toast";

import { collection, doc, updateDoc } from "firebase/firestore";

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

  // State for selected tags
  const [selectedTags, setSelectedTags] = useState([]);

  // State for selected tech
  const [selectedTech, setSelectedTech] = useState([]);

  // Router to retrieve slug
  const router = useRouter();
  const { slug } = router.query;

  // Create a reference to the current post
  const postRef = doc(
    collection(firestore, "users", auth.currentUser.uid, "posts"),
    slug
  );

  const updateCoverImage = async (url) => {
    await updateDoc(postRef, {
      coverImage: url,
      updatedAt: serverTimestamp(),
    });
    console.log("Cover image updated successfully!");
  };

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
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
            />
          </section>

          <aside className="card">
            <div className="card-content card-center">
              <h3>Tools</h3>
              <ImageUploader onUpload={updateCoverImage} type="cover" />
              <button
                style={{ marginTop: "2rem" }}
                className="btn-full-width"
                onClick={() => setPreview(!preview)}
              >
                {preview ? "Edit" : "Preview"}
              </button>
              <Link
                style={{ width: "100%" }}
                href={`/${post.username}/${post.slug}`}
              >
                <button className="btn-blue btn-full-width">Live view</button>
              </Link>
            </div>
          </aside>
        </>
      )}
    </main>
  );
}

// Interface that the user can directly interact with to update their posts
function PostForm({
  defaultValues,
  postRef,
  preview,
  selectedTags,
  setSelectedTags,
  selectedTech,
  setSelectedTech,
}) {
  // Populating React form with default values from Firestore
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    mode: "onChange",
  }); // Anytime input values are changed, re-render and re-validate form

  // Add a new state for tracking tag changes
  const [tagsChanged, setTagsChanged] = useState(false);

  // from the formState, we can pull the isValid and isDirty booleans.
  // isValid is true if the form doesn't have any errors, and isDirty is true when the user modifies the form
  const { isValid, isDirty, errors } = formState;

  const validateGithubUrl = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?(www\\.)?github\\.com\\/[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\/[-a-zA-Z0-9@:%._\\+~#=]{1,256}$",
      "i"
    );
    return !!pattern.test(url);
  };

  useEffect(() => {
    const githubRepoUrl = watch("githubRepo");

    if (githubRepoUrl && !validateGithubUrl(githubRepoUrl)) {
      setError("githubRepo", {
        type: "manual",
        message: "Please enter a valid GitHub repository URL.",
      });
    } else {
      clearErrors("githubRepo");
    }
  }, [watch, setError, clearErrors]);

  // Assuming useDocumentData is already being used to fetch post data
  const [post] = useDocumentData(postRef);

  // Effect hook to update tags when post data changes
  useEffect(() => {
    if (post && post.tags) {
      // Assuming post.tags is an array of tag values
      const tagsToUpdate = post.tags.map((tagValue) => {
        // Find the tag object in tagList by value
        const tagObj = tagList.find((tag) => tag.name === tagValue);
        return { value: tagObj.name, label: tagObj.name, color: tagObj.color };
      });
      setSelectedTags(tagsToUpdate);
    }

    if (post && post.tech) {
      // Assuming post.tags is an array of tag values
      const techToUpdate = post.tech.map((techValue) => {
        // Find the tag object in tagList by value
        const techObj = techList.find((tag) => tag.name === techValue);
        return {
          value: techObj.name,
          label: techObj.name,
          color: techObj.color,
        };
      });
      setSelectedTech(techToUpdate);
    }
  }, [post, setSelectedTags, setSelectedTech]);

  // Callback function that handles updating the Firestore database once form is submitted
  const updatePost = async ({ content, published, githubRepo }) => {
    await updateDoc(postRef, {
      content,
      published,
      githubRepo,
      tags: selectedTags.map((tag) => tag.value),
      tech: selectedTech.map((tag) => tag.value),
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
          <div className="post-content">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
        <ImageUploader />
        <textarea
          {...register("content", {
            maxLength: { value: 20000, message: "content is too long" },
            minLength: { value: 200, message: "content is too short" },
            required: { value: true, message: "content is required" },
          })}
        ></textarea>

        <TagDropdown
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          setTagsChanged={setTagsChanged}
        />

        <TagDropdown
          selectedTags={selectedTech}
          setSelectedTags={setSelectedTech}
          setTagsChanged={setTagsChanged}
          tech={true}
        />

        {errors.content && (
          <p className="text-danger">{errors.content.message}</p>
        )}

        <fieldset>
          <h1>GitHub Repository URL</h1>
          <input
            className="messageBox"
            placeholder="Valid GitHub repository URL..."
            {...register("githubRepo")}
          />
          {errors.githubRepo && (
            <p className="text-danger">{errors.githubRepo.message}</p>
          )}
        </fieldset>

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
          disabled={(!isDirty && !tagsChanged) || !isValid}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
