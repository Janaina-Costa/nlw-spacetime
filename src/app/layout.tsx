import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJam } from 'next/font/google'
import { ReactNode } from 'react'
import { Blur } from '../components/Blur'

import { cookies } from 'next/headers'

import { Hero } from '../components/Hero'
import { Profile } from '../components/Profile'
import { Signin } from '../components/Signin'
import { Copyright } from '../components/Copyright'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJam = BaiJam({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jam',
})

export const metadata = {
  title: 'NLW SpaceTime',
  description: 'Sua capsula do tempo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJam.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2 ">
          <div
            className={`relative flex flex-col items-start justify-between overflow-hidden bg-[url('../assets/stars.svg')] bg-cover px-28 py-16 `}
          >
            <Blur />
            {isAuthenticated ? <Profile /> : <Signin />}

            <Hero />
            <Copyright />
          </div>

          <div className="flex flex-col bg-[url('../assets/stars.svg')] bg-cover p-16 ">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
