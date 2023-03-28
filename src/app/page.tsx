import Link from "next/link";

function Page() {
  return (
    <main>
      <h1>Game Library</h1>
      <ul>
        <li>
          <Link href="/games/tiktaktoe">TikTakToe</Link>
        </li>
      </ul>
    </main>
  );
}

export default Page;
