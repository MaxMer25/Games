"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const CreateNewGameButton = () => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const handleClick = async () => {
		await fetch('/api/tictactoe', {
			method: 'POST'
		})

		startTransition(() => {
			router.refresh();
		  })
	}

	return (
		<button disabled={isPending} onClick={handleClick}>create new game</button>
	)
}