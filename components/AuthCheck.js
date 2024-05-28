import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

// This component's children will only appear to logged-in users
export default function AuthCheck(props) {
  // Get the user's username via the global context
  const { username } = useContext(UserContext);

  // If a username is found, render children
  return username
    ? props.children
    : // else, render fallback component or sign in page.
      props.fallback || <Link href="/enter">You must be signed in</Link>;
}
