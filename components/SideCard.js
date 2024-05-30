// components/SideCard.js
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function SideCard() {
  const { user, username } = useContext(UserContext);

  return (
    <div className="card-side">
      {!username ? (
        <>
          <h2>For students, by students.</h2>
          <p className="card-text">
            Welcome to <span style={{ fontWeight: "bold" }}>devCircle</span>, a
            platform where likeminded students can share what they've been
            working on, find inspiration, and collectively advance their
            careers.
            <br />
            <br />
            Join our community and grow with us today!
          </p>
          <Link href="/enter">
            <button className="btn-blue">Log in</button>
          </Link>
        </>
      ) : (
        <>
          <h2>For students, by students.</h2>
          <p className="card-text">
            Welcome back to{" "}
            <span style={{ fontWeight: "bold" }}>devCircle</span>!
            <br />
            <br />
            We're excited to have you back. Dive into the latest discussions,
            share your insights, and see what your peers have been up to.
            <br />
            <br />
            Ready to contribute? Start by writing a post.
          </p>
          <Link href="/admin">
            <button className="btn-blue">Write Posts</button>
          </Link>
        </>
      )}
    </div>
  );
}
