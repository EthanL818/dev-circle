import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import Link from "next/link";
import { techList } from "../lib/tech";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
} from "react-instantsearch-dom";
import { FaSearch } from "react-icons/fa";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY
);

function Hit({ hit }) {
  // Check if post.tech is defined and is an array before mapping
  const techToUpdate = Array.isArray(hit.tech)
    ? hit.tech.map((techValue) => {
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
    <div className="hit">
      <Link href={`${hit.username}/${hit.slug}`}>
        <p>Posted {new Date(hit.createdAt).toLocaleDateString("en-US")}</p>

        <h3>{hit.title}</h3>
        <p className="user-menu-username">
          <i>Dev: @{hit.username}</i>
        </p>

        {hit.tech && hit.tech.length > 0 && (
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            {techToUpdate.map((tech) => (
              <span
                key={tech.value}
                className="icon-tag"
                style={{
                  borderColor: tech.color,
                }}
              >
                {tech.icon}
              </span>
            ))}
          </div>
        )}
      </Link>
    </div>
  );
}

export default function SearchComponent() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className={`search-component ${isSearchActive ? "active" : ""}`}>
      <InstantSearch searchClient={searchClient} indexName="posts">
        <Configure hitsPerPage={5} filters="published=1" />
        <div className="search-box-container">
          <SearchBox
            className="search-box"
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setTimeout(() => setIsSearchActive(false), 200)}
            onChange={(e) => setQuery(e.target.value)}
            translations={{
              placeholder: "Search posts...",
            }}
          >
            {" "}
          </SearchBox>
          <FaSearch className="search-icon" />{" "}
        </div>
        {isSearchActive && query && (
          <div className="suggestions">
            <Hits hitComponent={Hit} />
          </div>
        )}
      </InstantSearch>
    </div>
  );
}
