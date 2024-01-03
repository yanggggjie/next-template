import getTime from '@/server-actions/getTime'

interface Props {}

export default async function Page({}: Props) {
  const res = await getTime()
  return (
    <div>
      <div>
        in server
        <div>{JSON.stringify(res)}</div>
      </div>
    </div>
  )
}
