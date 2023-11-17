import { clsx } from 'clsx'
interface Props {}

async function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, delay)
  })
}

export default async function Page({}: Props) {
  console.log('in page')
  await sleep(1000)
  return <div>123</div>
}
