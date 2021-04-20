import { useContext } from 'react'
import { CountContext } from './index'

function Counter() {
  const count = useContext(CountContext)
  return (
    <div>{count}</div>
  )
}
export default Counter