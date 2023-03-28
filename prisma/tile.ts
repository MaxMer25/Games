import prisma from "./prisma";

// READ
export const getAllTiles = async () => {
  const tiles = await prisma.tile.findMany({});
  return tiles;
};

export const getTiles = async (id: string) => {
  const tiles = await prisma.tile.findUnique({
    where: { id },
  });
  return tiles;
};

// CREATE
export const createTile = async (marked: boolean) => {
  const tile = await prisma.tile.create({
    data: {
      marked,
    },
  });
  return tile;
};
