import Link from "next/link";
import kebabCase from "lodash.kebabcase";

export default function TagCard({ tag }) {
  return (
    <div
      className="tag-card"
      style={{
        background: `linear-gradient(to bottom, #282828 56%, ${tag.color} 100%)`,
      }}
    >
      <div className="tag-card-content">
        <h2>{tag.name}</h2>
        <p className="card-text">{tag.description}</p>

        <Link href={`/tags/${encodeURI(kebabCase(tag.name))}`}>
          <button
            className="tag-card-button"
            style={{ backgroundColor: `${tag.color}` }}
          >
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
