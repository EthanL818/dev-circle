import Link from "next/link";

export default function SuggestionFeed({ suggestions }) {
  return (
    <div>
      {suggestions
        ? suggestions.map((suggestion) => (
            <SuggestionItem suggestion={suggestion} />
          ))
        : null}
    </div>
  );
}

function SuggestionItem({ suggestion }) {
  const createdAt =
    typeof suggestion?.createdAt === "number"
      ? new Date(suggestion.createdAt)
      : suggestion.createdAt.toDate();

  return (
    <div className="card">
      <div className="card-content">
        <Link href={`/${suggestion.username}`}>
          <strong>Written by @{suggestion.username}</strong>
        </Link>

        <p>{suggestion.content}</p>

        <footer>
          <span>Created at {createdAt.toString()}</span>
        </footer>
      </div>
    </div>
  );
}
