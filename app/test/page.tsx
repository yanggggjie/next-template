import _ from 'lodash'
import { clsx } from 'clsx'
import Test from '@/app/test/Test'
import { Suspense } from 'react'
interface Props {}

export default function Page({}: Props) {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Test></Test>
      </Suspense>
    </div>
  )
}
