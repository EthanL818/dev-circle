import { useRouter } from "next/router";
import PostFeed from "../../components/PostFeed";
import SideCard from "../../components/SideCard";
import Loader from "../../components/Loader";
import PopularTagsCard from "../../components/PopularTagsCard";
import PopularTechCard from "../../components/PopularTechCard";
import { fetchPostsByTech, normalizeTechName } from "../../lib/firebase";
import { useState, useEffect } from "react";
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
import { firestore } from "../../lib/firebase";

const LIMIT = 10;

export default function TechPostsPage() {
  const router = useRouter();
  const { name } = router.query;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postsEnd, setPostsEnd] = useState(false);

  useEffect(() => {
    if (name) {
      fetchPostsByTech(name).then((fetchedPosts) => {
        setPosts(fetchedPosts);
        setLoading(false);
      });
    }
  }, [name]);

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
      where("tech", "array-contains", normalizeTechName(name)),
      orderBy("createdAt", "desc"),
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
        <h1>Posts about {normalizeTechName(name)}</h1>
        <PostFeed posts={posts} admin={false} filterBar={false} />
        {!loading && !postsEnd && (
          <button onClick={getMorePosts}>Load more</button>
        )}
        <Loader show={loading} />
        {postsEnd && "You have reached the end!"}
      </div>

      <div className="right-container">
        <PopularTagsCard />
        <PopularTechCard />
      </div>
    </main>
  );
}
