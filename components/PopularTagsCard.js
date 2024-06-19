// components/PopularTagsCard.js
import Link from "next/link";
import { useEffect, useState } from "react";
import { firestore } from "../lib/firebase";
import kebabCase from "lodash.kebabcase";

import {
  getDocs,
  query,
  where,
  collectionGroup,
  orderBy,
  limit,
} from "firebase/firestore";

export default function PopularTagsCard() {
  const [popularTags, setPopularTags] = useState([]);

  // Get the date 30 days ago
  const date30DaysAgo = new Date();
  date30DaysAgo.setDate(date30DaysAgo.getDate() - 30);

  useEffect(() => {
    const fetchPopularTags = async () => {
      // Fetch the top 15 most liked posts
      const postsQuery = query(
        collectionGroup(firestore, "posts"),
        where("createdAt", ">=", date30DaysAgo),
        orderBy("likeCount", "desc"),
        limit(15)
      );

      // Get the all the post data and put them in an array called posts
      const postsSnapshot = await getDocs(postsQuery);
      const posts = postsSnapshot.docs.map((doc) => doc.data());

      // Extract all tags from these posts
      const allTags = posts.flatMap((post) => post.tags || []);

      // Count the occurrences of each tag
      const tagCounts = allTags.reduce((counts, tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
        return counts;
      }, {});

      // Sort the tags by count and take the top 5
      const popularTags = Object.entries(tagCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 5)
        .map(([tag, count]) => ({
          name: tag,
          link: `/tags/${encodeURI(kebabCase(tag))}`,
          count,
        }));

      setPopularTags(popularTags);
    };

    fetchPopularTags();
  }, []);

  return (
    <div className="card-tags">
      <h2>Trending Tags</h2>
      <p>Discover what your fellow students are writing about.</p>
      <ul>
        {popularTags.map((tag) => (
          <li key={tag.name}>
            <Link href={tag.link}>
              <button className="tag-button">{tag.name}</button>
            </Link>
            <p className="frequency">{`${tag.count} posts in the last 30 days`}</p>
          </li>
        ))}
      </ul>
      <Link href={"tags"}>
        <button className={"btn-blue"} style={{ marginTop: "2rem" }}>
          Show More
        </button>
      </Link>
    </div>
  );
}
