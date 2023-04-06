import { getGameState } from "../../../../prisma/gameState";
import styles from "./styles.module.css";
import Tile from "./tile";
import { CreateNewGameButton } from "./CreateNewGameButton";
import { DeleteGameState } from "./DeleteGameState";
import PageNavbar from "@games/components/navbar";

export default async function Tiktaktoe() {
  const game = await getGameState();

  return (
    <>
      {/* <PageNavbar /> */}
      <main className={styles.main}>
        <h1 className={styles.headline}>TikTakToe!</h1>

        {!game?.tiles ? <CreateNewGameButton /> : null }
        {game?.tiles ? <DeleteGameState /> : null}
        {game ? (
          <div className={styles.board}>
            {game.tiles.map((tile) => <Tile tile={tile} key={tile.id}/>)}
          </div>) : null}

        <div style={{color: 'white'}}>DB GAME STATE: {JSON.stringify(game)}</div>
      </main>
    </>
  );
}
