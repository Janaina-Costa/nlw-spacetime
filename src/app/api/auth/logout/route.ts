import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const redirectTo = new URL('/', req.url)

  return NextResponse.redirect(redirectTo, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0`,
    },
  })
}
