import Link from "next/link";
import FilterBar from "../components/FilterBar";
import { tagList } from "../lib/tags";
import { techList, techLabelToKebabCase } from "../lib/tech";
import React, { useState } from "react";
import { firestore, auth } from "../lib/firebase";
import { collection, getDocs, doc, writeBatch } from "firebase/firestore";
import toast from "react-hot-toast";
import kebabCase from "lodash.kebabcase";

export default function PostFeed({ posts, admin, filterBar = true }) {
  const [activePosts, setActivePosts] = useState(posts);

  async function deletePost(postToDelete) {
    const postRef = doc(
      firestore,
      "users",
      auth.currentUser.uid,
      "posts",
      postToDelete.slug
    );

    const batch = writeBatch(firestore);

    // Delete likes
    const likesCollectionRef = collection(postRef, "likes");
    const likesSnapshot = await getDocs(likesCollectionRef);
    likesSnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    // Delete suggestions
    const suggestionsCollectionRef = collection(postRef, "suggestions");
    const suggestionsSnapshot = await getDocs(suggestionsCollectionRef);
    suggestionsSnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    // Delete the post
    batch.delete(postRef);

    await batch.commit();
    toast.success(
      "Post and its associated data have been successfully deleted!"
    );

    // Remove the deleted post from the state variable
    const newPosts = posts.filter((post) => post.slug !== postToDelete.slug);
    setActivePosts(newPosts);
  }

  return (
    <div>
      {!admin && filterBar && <FilterBar />}
      {posts
        ? posts.map((post) => (
            <PostItem
              post={post}
              key={post.slug}
              admin={admin}
              deletePost={deletePost}
            />
          ))
        : null}
    </div>
  );
}

function PostItem({ post, admin = false, deletePost }) {
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  // Check if post.tags is defined and is an array before mapping
  const tagsToUpdate = Array.isArray(post.tags)
    ? post.tags.map((tagValue) => {
        // Find the tag object in tagList by value
        const tagObj = tagList.find((tag) => tag.name === tagValue);
        // Ensure tagObj is not undefined before accessing its properties
        if (tagObj) {
          return {
            value: tagObj.name,
            label: tagObj.name,
            color: tagObj.color,
          };
        } else {
          // Return a default or placeholder object if tagObj is undefined
          return { value: tagValue, label: tagValue, color: "#333" }; // Example placeholder
        }
      })
    : []; // If post.tags is not an array, default to an empty array

  // Check if post.tech is defined and is an array before mapping
  const techToUpdate = Array.isArray(post.tech)
    ? post.tech.map((techValue) => {
        // Find the tech object in tagList by value
        const techObj = techList.find((tech) => tech.name === techValue);
        // Ensure techObj is not undefined before accessing its properties
        if (techObj) {
          return {
            value: techObj.name,
            label: techObj.name,
            color: techObj.color,
            icon: techObj.icon,
          };
        } else {
          // Return a default or placeholder object if techObj is undefined
          return {
            value: tagValue,
            label: tagValue,
            color: "#333",
            icon: null,
          }; // Example placeholder
        }
      })
    : []; // If post.tech is not an array, default to an empty array

  return (
    <div className="card">
      {post.coverImage && (
        <Link href={`/${post.username}/${post.slug}`}>
          <img src={post.coverImage} className="card-img-top" />
        </Link>
      )}

      <div className="card-content">
        <Link href={`/${post.username}`}>
          <strong>By @{post.username}</strong>
        </Link>

        <Link href={`/${post.username}/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>

        {post.tags && post.tags.length > 0 && (
          <div style={{ marginTop: "15px", marginBottom: "20px" }}>
            {tagsToUpdate.map((tag) => (
              <Link href={`/tags/${kebabCase(tag.label)}`}>
                <span
                  key={tag.value}
                  className="tag"
                  style={{
                    borderColor: tag.color,
                  }}
                >
                  {tag.label}
                </span>
              </Link>
            ))}
          </div>
        )}

        {post.tech && post.tech.length > 0 && (
          <div style={{ marginTop: "15px", marginBottom: "20px" }}>
            {techToUpdate.map((tech) => (
              <Link
                href={`/tech?name=${techLabelToKebabCase(tech.label)}`}
                key={tech.value}
              >
                <span
                  key={tech.value}
                  className="icon-tag"
                  style={{
                    borderColor: tech.color,
                  }}
                >
                  {tech.icon}
                </span>
              </Link>
            ))}
          </div>
        )}

        <footer>
          <span>
            {`${wordCount} ${
              wordCount === 1 ? "word" : "words"
            }, about ${minutesToRead} ${
              minutesToRead === 1 ? "minute" : "minutes"
            } to read`}
          </span>
          <span className="push-left">
            👍 {post.likeCount || 0} {post.likeCount === 1 ? "Like" : "Likes"}
          </span>
        </footer>

        {/* If admin view, show extra controls for user */}
        {admin && (
          <>
            <div style={{ display: "flex", marginTop: "15px" }}>
              <Link href={`/admin/${post.slug}`}>
                <button className="btn-blue">Edit</button>
              </Link>

              <Link href={`/admin/suggestions/${post.slug}`}>
                <button className="btn-green">View Suggestions</button>
              </Link>

              <button
                className="btn-red"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you wish to delete this post? This action cannot be undone."
                    )
                  )
                    deletePost(post);
                }}
              >
                Delete
              </button>
            </div>

            {post.published ? (
              <p className="text-success">• Live</p>
            ) : (
              <p className="text-danger">• Unpublished</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
