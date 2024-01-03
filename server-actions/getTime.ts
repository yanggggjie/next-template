'use server'

import { memoize } from 'nextjs-better-unstable-cache'
export default memoize(
  async function getTime() {
    const res = await fetch('https://quan.suning.com/getSysTime.do', {
      next: {
        revalidate: 10,
      },
    })
    const json = await res.json()
    console.log('json', json)
    return json
  },
  {
    persist: true,
    duration: 3,
    log: ['dedupe'],
  },
)
