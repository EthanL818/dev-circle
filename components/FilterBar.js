import Link from "next/link";
import { useRouter } from "next/router";

export default function FilterBar() {
  const router = useRouter();
  const { pathname } = router;

  const isActive = (filter) => {
    if (filter === "latest" && pathname === "/") return true;
    return pathname.includes(filter);
  };

  return (
    <>
      <nav className="filter-bar">
        <ul>
          <li>
            <Link href="/">
              <button
                className={`filter-btn ${isActive("latest") ? "active" : ""}`}
              >
                Latest
              </button>
            </Link>
          </li>
          <li>
            <Link href="/popular">
              <button
                className={`filter-btn ${isActive("popular") ? "active" : ""}`}
              >
                Popular
              </button>
            </Link>
          </li>
          <li>
            <Link href="/oldest">
              <button
                className={`filter-btn ${isActive("oldest") ? "active" : ""}`}
              >
                Oldest
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
