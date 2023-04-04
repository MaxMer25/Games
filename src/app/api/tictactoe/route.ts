import { NextResponse } from "next/server";
import { createNewGame, deleteGameState, getGameState } from "../../../../prisma/gameState";

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
    const res = await request.json();
    console.log(JSON.stringify(res))

    return NextResponse.json(res);
}
