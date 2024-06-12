import styles from "../../styles/Post.module.css";
import PostContent from "../../components/PostContent";
import LikeButton from "../../components/LikeButton";
import SuggestionBar from "../../components/SuggestionBar";
import AuthCheck from "../../components/AuthCheck";
import { techList } from "../../lib/tech";
import { ContactInfo } from "../../components/UserProfile";

import Link from "next/link";
import {
  doc,
  getDoc,
  collection,
  collectionGroup,
  getDocs,
} from "firebase/firestore";
import { getUserWithUsername, postToJSON, firestore } from "../../lib/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";

export async function getStaticProps({ params }) {
  // Grab the username and slug from the URL parameters
  const { username, slug } = params;

  // Retrieve the user from the username
  const userDoc = await getUserWithUsername(username);

  let post;
  let path;

  // If the user exists
  if (userDoc) {
    // Create a reference to the post using the slug as its ID
    const postRef = doc(collection(userDoc.ref, "posts"), slug);

    // Get the post from the reference and convert the post to JSON format
    post = postToJSON(await getDoc(postRef));

    // Save the path
    path = postRef.path;
  }

  return {
    props: { post, path },
    revalidate: 5000, // Regenerates this page on the server every 5000ms
  };
}

export async function getStaticPaths() {
  // Query to retrieve all posts from the database
  const snapshot = await getDocs(collectionGroup(firestore, "posts"));

  /* Takes all posts from Firestore snapshot and extracts the slug and username from each post, then formats 
     them into the required structure for Next.js to generate static paths */
  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data();
    return {
      params: { username, slug },
    };
  });

  return {
    paths,

    /* When a user navigates to a page that has not been rendered yet, adding a fallback value of blocking 
       tells Next to fallback to regular server side rendering. Once rendered, it can be cached to the CDN */
    fallback: "blocking",
  };
}

function UserCard({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userDoc = await getUserWithUsername(username);
      setUser(userDoc?.data());
    };

    fetchUser();
  }, [username]);

  return (
    <div className="user-card">
      <div className="user-card-content">
        <img className="user-card-img-center" src={user?.photoURL} />
        <h1>{user?.displayName}</h1>
        <p className="user-card-username">
          <i>
            <a href={`/${user?.username}`}>@{user?.username}</a>
          </i>
        </p>
        <ContactInfo user={user} />
        <p className="user-card-description">{user?.description}</p>
      </div>
    </div>
  );
}

function TechStack({ post }) {
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
    <div className="user-card">
      <div className="user-card-content">
        <h1>Tech Stack</h1>
        <div
          className="tag-container"
          style={{ marginTop: "15px", marginBottom: "20px" }}
        >
          {techToUpdate.map((tech) => (
            <span
              key={tech.value}
              className="full-tag"
              style={{
                borderColor: tech.color,
              }}
            >
              <span
                className="icon-tag"
                style={{ marginRight: "5px", border: "none" }}
              >
                {" "}
                {tech.icon}
              </span>
              {tech.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Post(props) {
  const postRef = doc(firestore, props.path);
  const [realtimePost] = useDocumentData(postRef);

  const post = realtimePost || props.post;

  return (
    <main className={styles.container}>
      <section>
        <PostContent post={post} />
        <AuthCheck
          fallback={
            <p
              style={{
                color: "#B3B3B3",
                fontSize: "16px",
                lineHeight: "1.5",
                margin: "10px 0 20px",
              }}
            >
              Sign in to leave a suggestion for the author.{" "}
              <Link href="/enter">
                <button className="btn-blue">Log in</button>
              </Link>
            </p>
          }
        >
          <SuggestionBar postRef={postRef} />
        </AuthCheck>
      </section>

      <div className="card-container">
        <UserCard username={post.username} />
        {post.tech && post.tech.length > 0 && <TechStack post={post} />}
        <aside className="user-card" style={{ width: "100%" }}>
          <div className="card-content">
            <p>
              <strong>{post.likeCount || 0} 👍</strong>
            </p>
            <AuthCheck
              fallback={
                <Link href="/enter">
                  <button>👍 Sign Up</button>
                </Link>
              }
            >
              <LikeButton postRef={postRef} />
            </AuthCheck>
          </div>
        </aside>
      </div>
    </main>
  );
}
