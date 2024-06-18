import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";

export default function Navbar() {
  const { user, username } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAvatarMenu = () => {
    setAvatarMenuOpen(!avatarMenuOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">devCircle</button>
          </Link>
        </li>

        <li className="hamburger" onClick={toggleMenu}>
          ☰
        </li>

        {/* If user is signed in */}
        {username && (
          <>
            <li className=" push-left desktop-only">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>

            <li className="desktop-only">
              <img
                src={user?.photoURL || "avatar.jpg"}
                onClick={toggleAvatarMenu}
                className="avatar"
                alt="User Avatar"
              />
              <div
                className={`avatar-dropdown ${avatarMenuOpen ? "show" : ""}`}
              >
                <div style={{ width: "100%" }}>
                  <Link href={`/${username}`}>
                    <button
                      className="avatar-menu-btn"
                      onClick={toggleAvatarMenu}
                    >
                      {" "}
                      <img
                        src={user?.photoURL || "avatar.jpg"}
                        onClick={toggleAvatarMenu}
                        className="dropdown-avatar"
                        alt="User Avatar"
                      />
                      <div className="user-info">
                        <p className="display-name">
                          {user?.displayName || "User"}
                        </p>
                        <p className="avatar-menu-username">
                          <i>@{username}</i>
                        </p>
                      </div>
                    </button>
                  </Link>
                  <Link href={`/admin`}>
                    <button onClick={toggleAvatarMenu}>My Posts</button>
                  </Link>
                  <Link href={`/admin/suggestions`}>
                    <button onClick={toggleAvatarMenu}>My Suggestions</button>
                  </Link>
                  <button onClick={signOut}>Sign Out</button>
                </div>
              </div>
            </li>
          </>
        )}

        {/* If user is not signed in */}
        {!username && (
          <li className="desktop-only">
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>

      {/* Mobile Collapsible menu */}
      <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
        {username ? (
          <div className="dropdown-content">
            <div className="card">
              <div className="user-card-content">
                <Link href={`/${username}`}>
                  <img
                    onClick={toggleMenu}
                    src={user?.photoURL || "avatar.jpg"}
                    className="card-img-center"
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
