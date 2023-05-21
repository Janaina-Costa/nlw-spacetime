import { NextRequest, NextResponse } from 'next/server'
import {
  NEXT_PUBLIC_GITHUB_URL_LOGIN,
  NEXT_PUBLIC_GITHUB_CLIENT_ID,
} from './settings'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(
      `${NEXT_PUBLIC_GITHUB_URL_LOGIN}${NEXT_PUBLIC_GITHUB_CLIENT_ID}`,
      {
        headers: {
          'Set-Cookie': `redirectTo=${req.url}; Path=/; HttpOnly max-age=20`,
        },
      },
    )
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
