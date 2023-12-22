import _ from 'lodash'
import { clsx } from 'clsx'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import axios from 'axios'
interface Props {}

export default function Test({}: Props) {
  const { data, error } = useSuspenseQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todossdf/1',
      )
      return res.data
    },
  })

  if (error) {
    throw error
  }
  return (
    <div>
      id:{data.id}
      <div>title:{data.title}</div>
    </div>
  )
}
