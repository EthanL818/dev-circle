// components/PopularTagsCard.js
import Link from "next/link";
import { usePopularTags } from "../lib/context";

export default function PopularTagsCard() {
  const { popularTags } = usePopularTags();

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
            {tag.count == 1 ? (
              <p className="frequency">{`${tag.count} project in the last 30 days`}</p>
            ) : (
              <p className="frequency">{`${tag.count} projects in the last 30 days`}</p>
            )}{" "}
          </li>
        ))}
      </ul>
      <Link href={"/tags"}>
        <button className={"btn-blue"} style={{ marginTop: "2rem" }}>
          Show More
        </button>
      </Link>
    </div>
  );
}
