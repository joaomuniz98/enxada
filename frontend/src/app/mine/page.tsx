'use client';

import Mine from "./_components/Mine";

interface MineGameProps {

}


function getEntityMatrice(length: number) {
	const matriz = Array.from({length}, (_) => Array.from({length}, (_) => 0))
	console.log("Matriz val: ", matriz)

	return matriz
}

export default async function MinePage({ }: MineGameProps) {
	const lenght = 5
	const matriz = getEntityMatrice(lenght)
	
	return (
		<div className="w-full h-full  " style={{ gridTemplateColumns: "20% 80%" }}>
	      <div className="">

				</div>
				<div className="">
		<div 
		className="w-full grid" 
		style={{gridTemplateColumns: `repeat(${lenght}, 1fr)`, gridTemplateRows: `repeat(${lenght}, 1fr)`}}
		>
			{matriz.map((row, rowVal) => row.map((_, colVal) => <Mine col={colVal} row={rowVal} /> ))}
		</div>
		</div>
		</div>
	);
}





	   

