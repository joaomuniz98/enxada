import Image from 'next/image'

import Aside from './_layouts/Aside'
import Mine from './mine/_layouts/Mine'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className='max-w-[100em] px-@section mx-auto overflow-scroll bg-slate-400'>
      <h1 className='text-9xl text-white font-bold'>Enxada Bet</h1>
    </main>
  )
}
