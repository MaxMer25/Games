"use client";

import styles from "./styles.module.css";
import { useState } from "react";

export default function Tile() {
  const [marked, setMarked] = useState(false);

  function handleClick() {
    setMarked(!marked);
  }
  return (
    <>
      <div onClick={handleClick} className={styles.tile}>
        <span>{marked ? "X" : ""}</span>
      </div>
    </>
  );
}
