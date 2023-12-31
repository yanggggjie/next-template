'use client'
import _ from 'lodash'
import { clsx } from 'clsx'
import { Suspense, use, useRef } from 'react'
import { ofetch } from 'ofetch'
interface Props {}

// 计算斐波那契数列的第 n 项（递归实现，昂贵计算）
function fibonacci(n) {
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

// 执行昂贵计算

export default function Test({}: Props) {
  const data = use<string>(
    new Promise((resolve, reject) => {
      fibonacci(40)
      resolve('123')
    }),
  )
  return <div>data is {data}</div>
}
