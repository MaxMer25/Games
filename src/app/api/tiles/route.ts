import { getAllTiles, getTiles } from "../../../../prisma/tile";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    // Get a single tile if id is provided is the query
    // api/tiles?id=1
    const tile = await getTiles(id);
    return NextResponse.json(tile);
  } else {
    // Otherwise, fetch all tiles
    const tiles = await getAllTiles();
    return NextResponse.json(tiles);
  }
}
