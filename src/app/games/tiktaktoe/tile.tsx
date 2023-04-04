"use client";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { useState, useTransition } from "react";

export default function Tile() {
  const [marked, setMarked] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();


  async function handleClick() {
    setMarked(!marked);

    // TODO: send the needed db mutation here.
    await fetch('/api/tictactoe', {
      method: 'PUT',
      body: JSON.stringify({
        test: '123'
      })
    })

    startTransition(() => {
      router.refresh();
    })
  }

  return (
    <>
      <button disabled={isPending} onClick={handleClick} className={styles.tile}>
        <span>{marked ? "X" : ""}</span>
      </button>
    </>
  );
}
