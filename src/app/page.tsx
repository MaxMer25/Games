import Link from "next/link";

function Page() {
  return (
    <>
      <h1>Game Library</h1>
      <ul>
        <li>
          <Link href="/games/tiktaktoe">TikTakToe</Link>
        </li>
      </ul>
    </>
  );
}

export default Page;
