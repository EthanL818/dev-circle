// components/SideCard.js
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function SideCard() {
  const { user, username } = useContext(UserContext);

  return (
    <div className="card-container left-side">
      <div className="card-side">
        {!username ? (
          <>
            <h2>For students, by students.</h2>
            <p className="card-text">
              Welcome to <span style={{ fontWeight: "bold" }}>devCircle</span>,
              a platform where likeminded students can share what they've been
              working on, find inspiration, and collectively improve themselves.
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
              We're excited to have you back. Dive into the latest projects,
              share your insights, and see what your peers have been up to.
              <br />
              <br />
              Ready to contribute? Start by writing a post.
            </p>
            <Link href="/admin/create">
              <button className="btn-blue">Write Posts</button>
            </Link>
          </>
        )}
      </div>
      <CommunityMessage />
    </div>
  );
}

export function CommunityMessage() {
  return (
    <div>
      <p className="comment">
        devCircle is an inclusive community of developers from all around the
        world.
      </p>

      <p className="comment">
        Please be respectful and professional when interacting with others. For
        more information, please check our{" "}
        <a style={{ color: "blue" }} href="/guidelines">
          community guidelines
        </a>
        .
      </p>
    </div>
  );
}
