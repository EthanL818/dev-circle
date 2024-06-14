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

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  RedditIcon,
  FacebookIcon,
  XIcon,
  LinkedinIcon,
} from "react-share";

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

        {(user?.school ||
          user?.location ||
          user?.workingOn ||
          user?.learning ||
          user?.work) && (
          <div className="user-card-details">
            {user?.school && (
              <div className="user-card-detail">
                <h3>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-backpack"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "5px" }}
                  >
                    <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                    <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5" />
                  </svg>
                  School
                </h3>
                <p>{user?.school}</p>
              </div>
            )}

            {user?.work && (
              <div className="user-card-detail">
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-briefcase"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "5px" }}
                  >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  Work
                </h3>
                <p>{user?.work}</p>
              </div>
            )}

            {user?.location && (
              <div className="user-card-detail">
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "5px" }}
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  Location
                </h3>
                <p>{user?.location}</p>
              </div>
            )}

            {user?.interests && (
              <div className="user-card-detail">
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "5px" }}
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  Interests
                </h3>
                <p>{user?.interests}</p>
              </div>
            )}
          </div>
        )}
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
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

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
          <div className="user-card-content">
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

            <div className="share-component">
              <h3>Share</h3>
              <div className="share-buttons">
                <FacebookShareButton url={shareUrl} quote={post.title}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={post.title}>
                  <XIcon size={32} round />
                </TwitterShareButton>
                <RedditShareButton url={shareUrl} title={post.title}>
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <LinkedinShareButton
                  url={shareUrl}
                  title={post.title}
                  source="devCircle"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
