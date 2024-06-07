import Link from "next/link";
import FilterBar from "../components/FilterBar";
import { tagList } from "../lib/tags";

export default function PostFeed({ posts, admin }) {
  return (
    <div>
      {!admin && <FilterBar />}
      {posts
        ? posts.map((post) => (
            <PostItem post={post} key={post.slug} admin={admin} />
          ))
        : null}
    </div>
  );
}

function PostItem({ post, admin = false }) {
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

        <footer>
          <span>
            {wordCount} words. {minutesToRead} min read
          </span>
          <span className="push-left">👍 {post.likeCount || 0} Likes</span>
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
            </div>

            {post.published ? (
              <p className="text-success">Live</p>
            ) : (
              <p className="text-danger">Unpublished</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
