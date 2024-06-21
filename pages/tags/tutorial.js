import { useState } from "react";
import {
  collectionGroup,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  startAfter,
  Timestamp,
} from "firebase/firestore";
import { postToJSON, firestore } from "../../lib/firebase";
import PostFeed from "../../components/PostFeed";
import Loader from "../../components/Loader";
import SideCard from "../../components/SideCard";
import PopularTagsCard from "../../components/PopularTagsCard";
import PopularTechCard from "../../components/PopularTechCard";
import SearchBar from "../../components/SearchBar";

const LIMIT = 50;

export async function getServerSideProps(context) {
  const postsQuery = query(
    collectionGroup(firestore, "posts"),
    where("published", "==", true),
    where("tags", "array-contains", "Tutorial"),
    limit(LIMIT)
  );

  const postsSnapshot = await getDocs(postsQuery);
  const posts = postsSnapshot.docs.map(postToJSON);

  return {
    props: { posts },
  };
}

export default function AdvancedPage(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  console.log("Initial posts:", posts); // Debugging

  const getMorePosts = async () => {
    setLoading(true);

    if (posts.length === 0) {
      setLoading(false);
      setPostsEnd(true);
      return;
    }

    const last = posts[posts.length - 1];

    if (!last || !last.createdAt) {
      setLoading(false);
      setPostsEnd(true);
      return;
    }

    const cursor =
      typeof last.createdAt === "number"
        ? Timestamp.fromMillis(last.createdAt)
        : last.createdAt;

    const newQuery = query(
      collectionGroup(firestore, "posts"),
      where("published", "==", true),
      where("tags", "array-contains", "Tutorial"),
      orderBy("likes", "desc"),
      startAfter(cursor),
      limit(LIMIT)
    );

    const newPostsSnapshot = await getDocs(newQuery);
    const newPosts = newPostsSnapshot.docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };

  return (
    <main>
      <SideCard />

      <div className="card-div">
        <div
          className="card"
          style={{
            borderColor: `#ADFF2F`,
          }}
        >
          <div className="card-content">
            <h1
              style={{
                textDecoration: "underline",
                textDecorationColor: "#ADFF2F",
              }}
            >
              Tutorials
            </h1>
            <p className="card-text">
              Detailed step-by-step guides designed to teach specific skills or
              technologies. Ideal for learners looking to acquire new knowledge
              in a structured manner.
            </p>
          </div>
        </div>
        <PostFeed posts={posts} filterBar={false} />
        {!loading && !postsEnd && (
          <button onClick={getMorePosts}>Load more</button>
        )}
        <Loader show={loading} />
        {postsEnd && "You have reached the end!"}
      </div>

      <div className="right-container">
        <div className="desktop-search">
          <SearchBar />
        </div>
        <PopularTagsCard />
        <PopularTechCard />
      </div>
    </main>
  );
}
