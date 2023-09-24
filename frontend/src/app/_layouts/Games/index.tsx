'use client';

import GamePoster from "./GamePoster";

import games from "./games";

interface GamesProps { }


export default function Games({ }: GamesProps) {
  const gamesLenght = games.length

  return (
    <section
      className="max-w-@baseSectionWidth grid grid-cols-4 px-@section gap-4 py-@container mx-auto"
      // style={{ gridTemplateColumns: `repeat(${gamesLenght},1fr)` }}
    >
      {games.map(x => <GamePoster {...x} />)}
    </section>
  )
}