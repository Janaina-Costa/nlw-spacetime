import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 ">
      {/* left */}
      <div
        className={`relative flex flex-col items-start justify-between overflow-hidden bg-[url('../assets/stars.svg')] bg-cover px-28 py-16 `}
      >
        {/* Blur */}
        <div className=" absolute right-8 top-1/2 h-[388px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>

        {/* Signin */}
        <Link
          href={'#'}
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="w-40 text-sm leading-snug ">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </Link>

        {/* Hero */}
        <div className="space-y-5 ">
          <Image src={logo} alt="logo do projeto" />
          <div className="max-w[420px] space-y-1">
            <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <Link
            className="z-10 inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
            href={'#'}
          >
            CADASTRAR LEMBRANçA
          </Link>
        </div>

        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            href="https://rocketseat.com.br"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-50"
          >
            {' '}
            Rocketseat
          </a>{' '}
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col bg-[url('../assets/stars.svg')] bg-cover p-16 ">
        <div className="flex flex-1 items-center justify-center ">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <Link href={'#'} className="underline hover:text-gray-50">
              criar agora
            </Link>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
