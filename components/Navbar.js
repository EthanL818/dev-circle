import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";

export default function Navbar() {
  // real time state, will update
  const { user, username } = useContext(UserContext);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.reload();
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">devCircle</button>
          </Link>
        </li>

        {/* user is signed in and has a username */}
        {username && (
          <>
            <li className="push-left">
              <button onClick={signOut}>Sign Out</button>
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
