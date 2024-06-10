import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";
import { getUserWithUsername, postToJSON } from "../../lib/firebase";
import { collection, where, orderBy, getDocs, query } from "firebase/firestore";
import { UserContext } from "../../lib/context";
import { useContext, useState, useEffect } from "react";

// Server-side rendering function to fetch data based on the username query
export async function getServerSideProps({ query: contextQuery }) {
  // Initialize user to null and posts to an empty array
  let initialUser = null;
  let posts = [];
  const { username } = contextQuery; // Extract the username from the query parameters

  try {
    const userDoc = await getUserWithUsername(username); // Get the user document with the specified username

    // If the user's document exists,
    if (userDoc) {
      initialUser = userDoc.data(); // Get the user's data
      const postsRef = collection(userDoc.ref, "posts"); // Reference the "posts" collection of the user

      // Query for users' published posts ordeered by creation date in descending order, with a limit of 5 posts
      const postsQuery = query(
        postsRef,
        where("published", "==", true),
        orderBy("createdAt", "desc")
      );

      // Execute the query and map the posts to JSON format
      const postsSnapshot = await getDocs(postsQuery);
      posts = postsSnapshot.docs.map(postToJSON);
    }
  } catch (error) {
    console.error("Error fetching user or posts:", error);
  }

  return {
    props: { initialUser, posts }, // Pass the user and posts as props to the page component
  };
}

export default function UserProfilePage({ initialUser, posts }) {
  const { username } = useContext(UserContext);
  const [user, setUser] = useState(initialUser);
  const [admin, setAdmin] = useState(false);

  // Check if the current user is the same as the user being viewed
  useEffect(() => {
    setUser(initialUser);
    setAdmin(initialUser?.username === username);
  }, [initialUser, username]);

  return (
    <div
      style={{
        flexDirection: "column",
        width: "100%",
      }}
    >
      {" "}
      <UserProfile user={user} admin={admin} setUser={setUser} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <PostFeed posts={posts} filterBar={false} />
      </div>
    </div>
  );
}
