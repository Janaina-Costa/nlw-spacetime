import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJam } from 'next/font/google'
import { ReactNode } from 'react'

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
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJam.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
