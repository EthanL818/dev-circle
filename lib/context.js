// context/PopularTagsProvider.js
import { createContext, useState, useContext, useEffect } from "react";
import { firestore } from "./firebase";
import kebabCase from "lodash.kebabcase";
import { postToJSON } from "./firebase";
import {
  collectionGroup,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";

const PopularTagsContext = createContext();
const CACHE_KEY = "popularTagsCache";
const CACHE_EXPIRATION_MS = 6 * 60 * 60 * 1000; // refreshes every 6 hours

export const PopularTagsProvider = ({ children }) => {
  const [popularTags, setPopularTags] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchPopularTags = async () => {
      const date30DaysAgo = new Date();
      date30DaysAgo.setDate(date30DaysAgo.getDate() - 30);

      const popularPostsQuery = query(
        collectionGroup(firestore, "posts"),
        where("createdAt", ">=", date30DaysAgo),
        orderBy("likeCount", "desc"),
        limit(15)
      );

      const popularPostsSnapshot = await getDocs(popularPostsQuery);
      const popularPosts = popularPostsSnapshot.docs.map(postToJSON);

      const allTags = popularPosts.flatMap((post) => post.tags || []);

      const tagCounts = allTags.reduce((counts, tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
        return counts;
      }, {});

      const popularTags = Object.entries(tagCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 5)
        .map(([tag, count]) => ({
          name: tag,
          link: `/tags/${encodeURI(kebabCase(tag))}`,
          count,
        }));

      setPopularTags(popularTags);
      setLoaded(true);

      // Cache the popular tags with a timestamp
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ popularTags, timestamp: Date.now() })
      );
    };

    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { popularTags, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRATION_MS) {
        setPopularTags(popularTags);
        setLoaded(true);
        return;
      }
    }

    if (!loaded) {
      fetchPopularTags();
    }
  }, [loaded]);

  return (
    <PopularTagsContext.Provider value={{ popularTags }}>
      {children}
    </PopularTagsContext.Provider>
  );
};

export const usePopularTags = () => useContext(PopularTagsContext);

// context/PopularTechProvider.js
const PopularTechContext = createContext();
const TECH_CACHE_KEY = "popularTechCache";

export const PopularTechProvider = ({ children }) => {
  const [popularTech, setPopularTech] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchPopularTech = async () => {
      const date30DaysAgo = new Date();
      date30DaysAgo.setDate(date30DaysAgo.getDate() - 30);

      const postsQuery = query(
        collectionGroup(firestore, "posts"),
        where("createdAt", ">=", date30DaysAgo),
        orderBy("likeCount", "desc"),
        limit(15)
      );

      const postsSnapshot = await getDocs(postsQuery);
      const posts = postsSnapshot.docs.map(postToJSON);

      const allTech = posts.flatMap((post) => post.tech || []);

      const techCounts = allTech.reduce((counts, tech) => {
        counts[tech] = (counts[tech] || 0) + 1;
        return counts;
      }, {});

      const popularTech = Object.entries(techCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 15)
        .map(([tech, count]) => ({
          name: tech,
          link: `/tech/${encodeURI(kebabCase(tech))}`,
          count,
        }));

      setPopularTech(popularTech);
      setLoaded(true);

      // Cache the popular tech with a timestamp
      localStorage.setItem(
        TECH_CACHE_KEY,
        JSON.stringify({ popularTech, timestamp: Date.now() })
      );
    };

    const cachedData = localStorage.getItem(TECH_CACHE_KEY);
    if (cachedData) {
      const { popularTech, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRATION_MS) {
        setPopularTech(popularTech);
        setLoaded(true);
        return;
      }
    }

    if (!loaded) {
      fetchPopularTech();
    }
  }, [loaded]);

  return (
    <PopularTechContext.Provider value={{ popularTech }}>
      {children}
    </PopularTechContext.Provider>
  );
};

export const usePopularTech = () => useContext(PopularTechContext);

// class is used to initialize context with default values
export const UserContext = createContext({ user: null, username: null });
