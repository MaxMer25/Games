import { NextResponse } from "next/server";
import { createNewGame, deleteGameState, getGameState, updateTile } from "../../../../prisma/gameState";
import { Tile } from "@prisma/client";

export async function GET() {
    const gameState = await getGameState();
    return NextResponse.json(gameState);
}

export async function DELETE() {
    const deletedGameState = await deleteGameState();
    return NextResponse.json(deletedGameState);
}

export async function POST() {
    const newGameState = await createNewGame();

    return NextResponse.json(newGameState);
}

export async function PUT(request: Request) {
    const updatedTile = await request.json() as Tile;
    const savedGameState = await updateTile(updatedTile)
    console.log(JSON.stringify(savedGameState))

    return NextResponse.json(savedGameState);
}
