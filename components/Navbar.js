import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";

export default function Navbar() {
  // real time state, will update
  const { user, username } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">
              <span className="curly-braces">devCircle</span>
            </button>
          </Link>
        </li>

        {/* Hamburger icon */}
        <li className="hamburger" onClick={toggleMenu}>
          ☰
        </li>

        {/* user is signed in and has a username */}
        {username && (
          <>
            <li className="push-left desktop-only">
              <button onClick={signOut}>Sign Out</button>
            </li>

            <li className="desktop-only">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>

            <li className="desktop-only">
              <Link href={`/${username}`}>
                <img src={user?.photoURL || "avatar.jpg"} />
              </Link>
            </li>
          </>
        )}

        {/* user is signed in and has a username */}
        {!username && (
          <li className="desktop-only">
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>

      {/* Collapsible menu */}
      {menuOpen && (
        <div className="dropdown-menu">
          {username ? (
            <>
              <button onClick={signOut}>Sign Out</button>
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || "avatar.jpg"} />
              </Link>
            </>
          ) : (
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
