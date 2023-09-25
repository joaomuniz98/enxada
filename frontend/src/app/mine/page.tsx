'use client';

import Mine from "./_components/Mine";
import CustomInput from "@/components/CustomInput";
import {  AiFillDollarCircle } from 'react-icons/ai'
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

	<div className="h-full w-full flex items-center justify-center">
		<div className="flex row-auto w-8/12 h-5/6 justify-center ">

			<div  className="h-full w-2/4 border border-solid border-red-500 flex  flex-col items-center justify-center	">
						<CustomInput/>
			</div>

			<div className="w-full h-full border border-solid border-red-500 flex items-center justify-center " >
						
				<div className="grid aspect-square h-[30vw] 	" >
					<div 
					className="w-full grid " 
					style={{gridTemplateColumns: `repeat(${lenght}, 1fr)`, gridTemplateRows: `repeat(${lenght}, 1fr)`,margin: "0", padding: "0"}}
					>
						{matriz.map((row, rowVal) => row.map((_, colVal) => <Mine col={colVal} row={rowVal} /> ))}
					</div>
					</div>
			</div>
		</div>
		</div>
	);
}





	   

