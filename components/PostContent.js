import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function PostContent({ post }) {
  const createdAt =
    typeof post?.createdAt === "number"
      ? new Date(post.createdAt)
      : post.createdAt.toDate();

  return (
    <div className="card">
      {post.coverImage && (
        <img src={post.coverImage} className="card-img-top" />
      )}
      <div className="card-content">
        <h1 style={{ marginTop: 0 }}>{post?.title}</h1>
        <span className="text-sm">
          Written by{" "}
          <Link href={`/${post.username}`} className="text-info">
            @{post.username}
          </Link>{" "}
          on {createdAt.toISOString()}
        </span>

        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </div>
    </div>
  );
}
