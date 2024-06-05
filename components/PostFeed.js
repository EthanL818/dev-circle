import Link from "next/link";
import FilterBar from "../components/FilterBar";

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

  return (
    <div className="card">
      {post.coverImage && (
        <img src={post.coverImage} className="card-img-top" />
      )}

      <div className="card-content">
        <Link href={`/${post.username}`}>
          <strong>By @{post.username}</strong>
        </Link>

        <Link href={`/${post.username}/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>

        <footer>
          <span>
            {wordCount} words. {minutesToRead} min read
          </span>
          <span className="push-left">👍 {post.likeCount || 0} Likes</span>
        </footer>

        {/* If admin view, show extra controls for user */}
        {admin && (
          <>
            <div style={{ display: "flex" }}>
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
