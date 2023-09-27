'use client';

import { CaretDownIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation';

import CustomButton from '@/components/CustomButton';

interface AsideProps {

}

const games = ["Mine", "Cannon", "Carrot"]

export default function Aside({ }: AsideProps) {
  const router  = useRouter()

  return (
    <aside className="text-white z-10 top-@header fixed w-@sidebar col-span-1 row-span-2 pt-4 justify-center items-center px-4 bottom-0 bg-@dark h-screen">
      <CustomButton className='w-full'>Resgatar ticket 🎉</CustomButton>
      <div className="flex flex-col mt-@sm">
        <div className="flex justify-between items-center mb-4">
          <h5>Nossos jogos</h5>
          <CaretDownIcon color='#fff' />
        </div>
        <article>
          {games.map((x, i) => <p key={`game_${i}`} className='text-white/50 my-@gap border-b-2 border-white/20'>{x}</p>)}
        </article>
      </div>
    </aside>
  )
}