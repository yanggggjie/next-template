'use client'
import _ from 'lodash'
import { clsx } from 'clsx'
import Test from '@/component/test'
import Boundary from '@/component/Boundary'
interface Props {}

export default function Page({}: Props) {
  return <div>
    <Boundary>
      <Test></Test>
    </Boundary>
  </div>
}
