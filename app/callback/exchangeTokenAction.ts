'use server'
import axios from 'axios'

const url = 'https://github.com/login/oauth/access_token'
export default async (code: string) => {
  const res = await axios.post(
    url,
    {
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      code: code,
    },
    {
      headers: {
        accept: 'application/json',
      },
    },
  )

  return res.data
}
