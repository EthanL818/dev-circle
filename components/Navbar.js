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
            <button className="btn-logo">devCircle</button>
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
      <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
        {username ? (
          <div className="dropdown-content">
            <div className="card">
              <div className="user-card-content">
                <Link href={`/${username}`}>
                  <img
                    onClick={toggleMenu}
                    src={user?.photoURL || "avatar.jpg"}
                  />
                </Link>
                <h3>{user?.displayName}</h3>
                <Link href={`/${username}`}>
                  <p onClick={toggleMenu} className="user-card-username">
                    <i>@{username}</i>
                  </p>
                </Link>
              </div>
            </div>

            <div style={{ width: "100%" }}>
              <Link href="/admin" style={{ width: "100%" }}>
                <button
                  onClick={toggleMenu}
                  className="btn-blue"
                  style={{ width: "100%" }}
                >
                  Write Posts
                </button>
              </Link>
              <button onClick={signOut} style={{ width: "100%" }}>
                Sign Out
              </button>
            </div>

            <div className="dropdown-comment">
              <p>
                devCircle is an inclusive community of developers from all
                around the world.
              </p>
              <p>
                Please be respectful and professional when interacting with
                others. For more information, please check our{" "}
                <a style={{ color: "blue" }} href="/guidelines">
                  community guidelines
                </a>
                .
              </p>{" "}
            </div>
          </div>
        ) : (
          <Link href="/enter">
            <button className="btn-blue">Log in</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
