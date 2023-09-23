'use client';

interface MineGameProps {

}

export default async function MineGame({ }: MineGameProps) {
	const data = await fetch("http")
	// console.log("Env.local variable: ", process.env.)

	return (
		<div>
			Feliz
		</div>
	);
}