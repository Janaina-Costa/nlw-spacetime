import { User } from 'lucide-react'
import Link from 'next/link'
import {
  NEXT_PUBLIC_GITHUB_CLIENT_ID,
  NEXT_PUBLIC_GITHUB_URL_LOGIN,
} from '../settings'

export const Signin = () => {
  return (
    <Link
      href={`${NEXT_PUBLIC_GITHUB_URL_LOGIN}${NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-5 w-5 text-gray-500" />
      </div>
      <p className="w-40 text-sm leading-snug ">
        <span className="underline">Crie sua conta</span> e salve suas memórias!
      </p>
    </Link>
  )
}
