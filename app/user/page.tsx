'use client'
import { clsx } from 'clsx'
import { useToken } from '@/store/useToken'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
interface Props {}

export default function Page({}: Props) {
  const { token } = useToken()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user', token],
    queryFn: async () => {
      const res = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return res.data
    },
  })
  if (isLoading) {
    return <div>loading</div>
  }
  if (isError) {
    return <div>error</div>
  }
  console.log('data ', data)

  return (
    <div>
      token is {token}
      user {JSON.stringify(data)}
    </div>
  )
}
