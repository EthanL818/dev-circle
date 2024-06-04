import styles from "../../styles/Post.module.css";
import PostContent from "../../components/PostContent";
import LikeButton from "../../components/LikeButton";
import SuggestionBar from "../../components/SuggestionBar";
import AuthCheck from "../../components/AuthCheck";
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

      <aside className="card">
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
    </main>
  );
}
