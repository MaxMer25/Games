"use client";

import styles from "./styles.module.css";
import Tile from "./tile";
import PageNavbar from "@games/components/navbar";

export default function Tiktaktoe() {
  return (
    <>
      <PageNavbar />
      <main className={styles.main}>
        <h1 className={styles.headline}>TikTakToe!</h1>

        <div className={styles.board}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </main>
    </>
  );
}
