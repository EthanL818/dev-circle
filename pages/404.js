import Link from "next/link";

export default function Custom404() {
  return (
    <main>
      <h1>404 - Page does not exist</h1>
      <iframe
        src="https://giphy.com/embed/amE3iwyu3IxTeqzwm7"
        width="480"
        height="270"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <Link href="/">
        <button className="btn-blue">Go home</button>
      </Link>
    </main>
  );
}
