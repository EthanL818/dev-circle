import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar() {
  // real time state, will update
  const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">TEMP</button>
          </Link>
        </li>

        {/* user is signed in and has a username */}
        {username && (
          <>
            <li className="push-left">
              <button>Sign Out</button>
            </li>

            <li>
              <Link className href="/admin">
                <button className="btn-blue"> Write Posts</button>
              </Link>
            </li>

            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || "avatar.jpg"} />
              </Link>
            </li>
          </>
        )}

        {/* user is signed in and has a username */}
        {!username && (
          <>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
