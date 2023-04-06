"use client";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { useState, useTransition } from "react";
import { Tile as TileType } from "@prisma/client";

export default function Tile({tile}: {tile: TileType}) {
  const [marked, setMarked] = useState(tile.marker.length ? true : false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();


  async function handleClick() {
    const newMarkerState = !marked ? "X" : "";
    const newTile: TileType = {...tile, marker: newMarkerState};

    await fetch('/api/tictactoe', {
      method: 'PUT',
      body: JSON.stringify(newTile)
    });

    setMarked(!marked);

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
