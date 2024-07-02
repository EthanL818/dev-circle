import AuthCheck from "../../components/AuthCheck";
import PostFeed from "../../components/PostFeed";
import { firestore, auth } from "../../lib/firebase";
import Link from "next/link";

import { useCollection } from "react-firebase-hooks/firestore";

import {
  collection,
  query as firestoreQuery,
  orderBy,
} from "firebase/firestore";

export default function AdminPostsPage(props) {
  return (
    <main>
      <AuthCheck>
        <div
          style={{
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div className="box-center">
            <h1>Manage Posts</h1>
            <p className="frequency">
              Edit, delete, or view your project suggestions
            </p>
          </div>

          <div className="card-container">
            <PostList />
          </div>
        </div>
      </AuthCheck>
    </main>
  );
}

// Displays all posts that a user has created
function PostList() {
  // Reference to the "posts" collection for the current user
  const ref = collection(firestore, "users", auth.currentUser.uid, "posts");

  // Create a query to order posts by date created
  const postsQuery = firestoreQuery(ref, orderBy("createdAt"));

  // Use the query with useCollection hook
  const [querySnapshot] = useCollection(postsQuery);

  // Map the querySnapshot to extract post data
  const posts = querySnapshot?.docs.map((doc) => doc.data());

  return (
    <>
      <div className="card-div">
        <PostFeed posts={posts} admin />
      </div>

      {posts?.length === 0 && (
        <div className="box-center card">
          <h3>No posts to display!</h3>
          <p className="frequency">
            Write a post and join the devCircle community today!
          </p>
          <Link href="/admin/create">
            <button className="btn-blue" style={{ marginLeft: "1rem" }}>
              {" "}
              Write Posts
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
