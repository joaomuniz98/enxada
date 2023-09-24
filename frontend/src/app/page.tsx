<<<<<<< HEAD
import Image from 'next/image'

import Aside from './_layouts/Aside'
import Mine from './mine/_layouts/Mine'
import styles from './page.module.css'
=======
import Hero from './_layouts/Hero'
import Games from './_layouts/Games'
>>>>>>> fd776f763466f58502f0a3d8e5e2fd3f7c5402f5

export default function Home() {
  return (
    <main className='w-full sticky mx-auto'>
      <Hero />
      <Games />
    </main>
  )
}
