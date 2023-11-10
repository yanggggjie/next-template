'use client'
import { clsx } from 'clsx'
import Link from 'next/link'
interface Props {}
const url = 'https://github.com/login/oauth/authorize'
export default function Page({}: Props) {
  const href = `${url}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`

  return (
    <div>
      <Link href={href}>login with github</Link>
    </div>
  )
}
