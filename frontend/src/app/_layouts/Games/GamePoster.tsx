'use client';

import { Game } from "./type";

interface GamePosterProps
  extends Game { }

export default function GamePoster({ imageUrl, name, multiplier }: GamePosterProps) {
  return (
    <article className="aspect-square grid grid-rows-[auto_1fr_auto] rounded-lg over">
      <h5 className="text-white py-2 z-10 bg-gray-300 px-2 rounded-t-lg text-center shadow-lg text-base font-medium">{name}</h5>
      <img className="cover w-full h-full" src={imageUrl} alt="Game poster" />
      <p className="text-white text-center z-10 bg-@primary px-4 rounded-b-lg py-2 shadow-lg text-base font-normal">x{multiplier}</p>
    </article>
  )
}