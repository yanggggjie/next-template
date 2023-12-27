'use client'
import _ from 'lodash'
import { clsx } from 'clsx'
import useSWR from 'swr'
import { testAction } from '@/server-actions/testAction'
import { useState } from 'react'
interface Props {}

export default function Page({}: Props) {
  const [time, setTime] = useState(1)
  const { data, isLoading, isValidating } = useSWR(
    {
      url: '/testAction',
      time: time,
    },
    testAction,
  )
  if (isLoading) return <div>loading</div>
  console.log('data', data)
  return (
    <div>
      in page
      <button
        onClick={() => {
          setTime(time + 1)
        }}
      >
        click
      </button>
    </div>
  )
}
