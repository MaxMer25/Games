import { Tile } from "./tile";

export const getInitialGameState = (): GameState => ({
	tiles: [...Array(9)].map((_, index) => ({
		row: Math.trunc((index / 3) + 1),
		column: (index % 3) + 1
	}))
});

type GameState = {
	tiles: Tile[];
}






