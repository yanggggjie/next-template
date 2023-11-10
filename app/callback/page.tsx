'use client'
import { clsx } from 'clsx'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import exchangeTokenAction from '@/app/callback/exchangeTokenAction'
import { useToken } from '@/store/useToken'
interface Props {}

export default function Page({}: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const { setToken } = useToken()
  useEffect(() => {
    if (code) {
      exchangeTokenAction(code).then((value) => {
        const { access_token } = value
        if (access_token) {
          setToken(access_token)
          router.push('/user')
        } else {
          console.log('no access_token')
        }
      })
    }
  }, [code])
  console.log('code ', code)
  return <div></div>
}
