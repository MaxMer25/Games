"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const DeleteGameState = () => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const handleClick = async () => {
		await fetch('/api/tictactoe', {
			method: 'DELETE'
		})

		startTransition(() => {
			router.refresh();
		  })
	}

	return (
		<button disabled={isPending} onClick={handleClick}>Delete game</button>
	)
}