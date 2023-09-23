'use client';

import { CaretDownIcon } from '@radix-ui/react-icons'

interface AsideProps {

}

const games = ["Mine", "Cannon", "Carrot"]

export default function Aside({ }: AsideProps) {
  return (
    <aside className="w-auto text-white z-10 pt-@lg justify-center items-center px-@sm  bg-slate-800 h-screen">
      <button className="p-4 rounded-md w-max text-white text-lg bg-green-600">Resgatar ticket 🎉</button>
      <div className="flex flex-col mt-@sm">
        <div className="flex justify-between items-center mb-4">
        <h5>Games da Enxada</h5>
          <CaretDownIcon color='#fff' />
        </div>
        <article>
          {games.map((x,i) => <p key={`game_${i}`} className='text-white/50 my-@gap border-b-2 border-white/20'>{x}</p>)}
        </article>
      </div>
    </aside>
  )
}