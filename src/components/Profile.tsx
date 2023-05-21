import Image from 'next/image'

import { getUser } from '../lib/auth'

export const Profile = () => {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <Image
          alt={`Imagem de ${name}`}
          src={avatarUrl}
          width={50}
          height={40}
          className="h-10 w-10 rounded-full"
        />
      </div>
      <p className="max-w-[140px] text-sm leading-snug ">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-700 hover:text-red-800"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
