import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";
import { getUserWithUsername, postToJSON } from "../../lib/firebase";
import {
  collection,
  where,
  orderBy,
  limit,
  getDocs,
  query,
} from "firebase/firestore";

// Server-side rendering function to fetch data based on the username query
export async function getServerSideProps({ query: contextQuery }) {
  const { username } = contextQuery; // Extract the username from the query parameters
  const userDoc = await getUserWithUsername(username); // Get the user document with the specified username

  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  // Initialize user to null and posts to an empty array
  let user = null;
  let posts = [];

  // If the user's document exists,
  if (userDoc) {
    user = userDoc.data(); // Get the user's data
    const postsRef = collection(userDoc.ref.firestore, "posts"); // Reference the "posts" collection of the user

    // Query for users' published posts ordeered by creation date in descending order, with a limit of 5 posts
    const postsQuery = query(
      postsRef,
      where("published", "==", true),
      orderBy("createdAt", "desc"),
      limit(5)
    );

    // Execute the query and map the posts to JSON format
    const postsSnapshot = await getDocs(postsQuery);
    posts = postsSnapshot.docs.map(postToJSON);
  }

  return {
    props: { user, posts }, // Pass the user and posts as props to the page component
  };
}

export default function UserProfilePage({ user, posts }) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  );
}
