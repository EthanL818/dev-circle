import {
  getFirestore,
  collectionGroup,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  startAfter,
  Timestamp, // Correct import for Timestamp
} from "firebase/firestore";
import PostFeed from "../components/PostFeed";
import Loader from "../components/Loader";
import { postToJSON } from "../lib/firebase"; // Removed fromMillis import

import { useState } from "react";

// Initialize Firestore
const firestore = getFirestore();

// Max post to query per page
const LIMIT = 1;

export async function getServerSideProps(context) {
  // Query the first batch of posts
  const postsQuery = query(
    collectionGroup(firestore, "posts"),
    where("published", "==", true),
    orderBy("createdAt", "desc"),
    limit(LIMIT)
  );

  // Fetch data and map to JSON
  const postsSnapshot = await getDocs(postsQuery);
  const posts = postsSnapshot.docs.map(postToJSON);

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  // Initialize states, use prior rendered props on the server
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  // Function to retrieve more posts
  const getMorePosts = async () => {
    setLoading(true);

    // Check if there are any posts
    if (posts.length === 0) {
      setLoading(false);
      setPostsEnd(true);
      return;
    }

    // Store the last post
    const last = posts[posts.length - 1];

    // Check if last post has a createdAt property
    if (!last || !last.createdAt) {
      setLoading(false);
      setPostsEnd(true);
      return;
    }

    // If the createdAt timestamp is a number (because we converted it to JSON), then convert it back to a Firestore timestamp
    const cursor =
      typeof last.createdAt === "number"
        ? Timestamp.fromMillis(last.createdAt) // Corrected conversion
        : last.createdAt;

    // Query that searches for posts only AFTER the last post currently loaded
    const newQuery = query(
      collectionGroup(firestore, "posts"),
      where("published", "==", true),
      orderBy("createdAt", "desc"),
      startAfter(cursor),
      limit(LIMIT)
    );

    // Fetch new posts, map their data to the newPosts array
    const newPostsSnapshot = await getDocs(newQuery);
    const newPosts = newPostsSnapshot.docs.map((doc) => doc.data());

    // Concatenate the new posts to the end of the existing posts
    setPosts(posts.concat(newPosts));
    setLoading(false);

    // If the newPosts array length is less than the global limit, we have reached the end of the total posts
    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };

  return (
    <main>
      <PostFeed posts={posts} />

      {/* If not loading and not at the end of the posts, provide a button to load more posts */}
      {!loading && !postsEnd && (
        <button onClick={getMorePosts}>Load more</button>
      )}

      <Loader show={loading} />

      {postsEnd && "You have reached the end!"}
    </main>
  );
}
