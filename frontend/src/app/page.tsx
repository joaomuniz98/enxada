import Hero from './_layouts/Hero'
import Games from './_layouts/Games'

export default function Home() {
  return (
    <main className='w-full sticky mx-auto'>
      <Hero />
      <Games />
    </main>
  )
}
