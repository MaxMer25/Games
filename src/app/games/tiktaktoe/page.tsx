import styles from "./styles.module.css";

export default function Tiktaktoe() {
  return (
    <>
      <h1 className={styles.headline}>TikTakToe!</h1>

      <div className={styles.board}>
        <div className={styles.tiles}></div>
        <div className={styles.tiles}></div>
        <div className={styles.tiles}></div>
        <div className={styles.tiles}></div>
        <div className={styles.tiles}></div>
        <div className={styles.tiles}></div>
        <div className={styles.tiles}></div>
        <div className={styles.tiles}></div>
        <div className={styles.tiles}></div>
      </div>
    </>
  );
}
