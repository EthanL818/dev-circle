import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { tagList } from "../lib/tags";

export default function PostContent({ post }) {
  const createdAt =
    typeof post?.createdAt === "number"
      ? new Date(post.createdAt)
      : post.createdAt.toDate();

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

  return (
    <div className="card">
      {post.coverImage && (
        <img src={post.coverImage} className="card-img-top" />
      )}
      <div className="card-content">
        <h1 style={{ marginTop: 0, marginBottom: "20px" }}>{post?.title}</h1>

        {post.tags && post.tags.length > 0 && (
          <div style={{ marginBottom: "20px" }}>
            {tagsToUpdate.map((tag) => (
              <span
                key={tag.value}
                className="tag"
                style={{
                  borderColor: tag.color,
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}

        <span className="text-sm">
          Written by{" "}
          <Link href={`/${post.username}`} className="text-info">
            @{post.username}
          </Link>{" "}
          on {createdAt.toString()}
        </span>

        <ReactMarkdown className="post-content">{post?.content}</ReactMarkdown>
      </div>
    </div>
  );
}
