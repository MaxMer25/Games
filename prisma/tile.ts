import prisma from "./prisma";

// READ
export const getGameState= async () => {
  const game = await prisma.ticTacToe.findMany({});
  return game;
};
