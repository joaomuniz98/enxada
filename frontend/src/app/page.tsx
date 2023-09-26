import Hero from './_layouts/Hero'
import Games from './_layouts/Games'

export default function Home() {
  return (
    <main className='w-full fixed left-[240px] top-[144px] mx-auto'>
      <Hero />
      <Games />
    </main>
  )
}
