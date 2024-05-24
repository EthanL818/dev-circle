import Link from "next/link";

export default function Navbar() {
  // real time state, will update
  const user = false;
  const username = false;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">devCIRCLE</button>
          </Link>
        </li>

        {/* user is signed in and has a username */}
        {username && (
          <>
            <li className="push-left">
              <Link className href="/admin">
                <button className="btn-blue"> Write Posts</button>
              </Link>
            </li>

            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
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
