// components/PopularTechCard.js
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

export default function PopularTechCard() {
  const [popularTech, setPopularTech] = useState([]);
  // Get the date 30 days ago
  const date30DaysAgo = new Date();
  date30DaysAgo.setDate(date30DaysAgo.getDate() - 30);

  useEffect(() => {
    const fetchPopularTech = async () => {
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
      // Extract all tech from these posts

      const allTech = posts.flatMap((post) => post.tech || []);
      // Count the occurrences of each tech

      const techCounts = allTech.reduce((counts, tech) => {
        counts[tech] = (counts[tech] || 0) + 1;
        return counts;
      }, {});

      // Sort the tech by count and take the top 15
      const popularTech = Object.entries(techCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 15)
        .map(([tech, count]) => ({
          name: tech,
          link: `/tech/${encodeURI(kebabCase(tech))}`,
          count,
        }));
      setPopularTech(popularTech);
    };
    fetchPopularTech();
  }, []);

  return (
    <div className="card-tech">
      <h2>Top Tech</h2>
      <p style={{ marginBottom: "1rem" }}>What your peers are building with.</p>
      <ul>
        {popularTech.map((tech) => (
          <li key={tech.name}>
            <Link href={tech.link}>
              {tech.icon}
              <button className="tech-button">
                {tech.name}{" "}
                {tech.count == 1 ? (
                  <p className="frequency">{`${tech.count} project`}</p>
                ) : (
                  <p className="frequency">{`${tech.count} projects`}</p>
                )}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
