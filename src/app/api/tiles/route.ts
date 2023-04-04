import { getGameState } from "../../../../prisma/tile";
import { NextResponse } from "next/server";

export async function GET() {
    const gameState = await getGameState();
    return NextResponse.json(gameState);
}
