'use client'
interface Props {}

export default function Page({}: Props) {
  const color = 'blue'
  return (
    <div>
      <h1>Hello Next.js</h1>
      <p className={'a'}>haahh</p>
      <p>Let s explore different ways to style Next.js apps</p>
      <style jsx>{`
        .a {
          color: ${color};
        }
        p {
          background: red;
        }
      `}</style>
    </div>
  )
}
