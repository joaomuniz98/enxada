import Hero from './_layouts/Hero'
import Games from './_layouts/Games'

export default function Home() {
  return (
    <main className='w-[calc(100vw-var(--sidebar-width))] overflow-y-scroll fixed top-@header left-@sidebar'>
      {/* <div className='block w-@content mx-auto'> */}
        <Hero />
        {/* <Games /> */}
      {/* </div> */}
    </main>
  )
}
