import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

import Aside from './_layouts/Aside'
import Header from './_layouts/Header'
import Providers from '@/contexts/Providers'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.className} h-screen flex flex-col`}>
=======
      <body className={`${poppins.className} bg-@dark-sec sticky top-0 h-screen flex flex-col`}>
>>>>>>> fd776f763466f58502f0a3d8e5e2fd3f7c5402f5
        <Providers>
          <div className='grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]'>
            <Aside />
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
