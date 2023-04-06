import { getInitialGameState } from "@games/app/games/tiktaktoe/entities/game";
import prisma from "./prisma";
import { Tile } from "@prisma/client";

// READ
export const getGameState = async () => {
  const game = await prisma.ticTacToe.findMany({
    select: {
      tiles: true
    }
  });
  
  if (game.length) {
    return game[0];
  }

  return null;
};

export const createNewGame = async () => {
  const newGame = await prisma.ticTacToe.create({
    include: {
      tiles: true
    }, 
    data: {
      tiles: {
        create: getInitialGameState().tiles
      }
    }
  });

  return newGame;
}

export const deleteGameState = async () => {
  return await prisma.ticTacToe.deleteMany();
}

export const updateTile = async (tile: Tile) => {
  const newTile = {...tile} as any;
  delete newTile.id;

  return await prisma.tile.update({
    where: {
      id: tile.id
    },
    data: newTile
  });
}
