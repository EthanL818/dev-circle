import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { tagList } from "../lib/tags";
import kebabCase from "lodash.kebabcase";

export default function PostContent({ post }) {
  const createdAt =
    typeof post?.createdAt === "number"
      ? new Date(post.createdAt)
      : post.createdAt.toDate();

  const updatedAt =
    typeof post?.updatedAt === "number"
      ? new Date(post.updatedAt)
      : post.updatedAt.toDate();

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
      <div className="post-content">
        <h1 style={{ marginTop: 0, marginBottom: "20px", fontSize: "45px" }}>
          {post?.title}
        </h1>

        {post.tags && post.tags.length > 0 && (
          <div style={{ marginBottom: "20px" }}>
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

        <div
          className="date-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span className="text-sm">
            Written by{" "}
            <Link href={`/${post.username}`} className="text-info">
              @{post.username}
            </Link>{" "}
            on {createdAt.toISOString()}
            {updatedAt != createdAt && (
              <span>, Last updated on {updatedAt.toISOString()} </span>
            )}
          </span>
        </div>
        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </div>
    </div>
  );
}
