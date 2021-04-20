import React, { useState, useEffect, createContext } from 'react';
import { Button } from 'antd'
import Counter from './Counter'

export const CountContext = createContext()

function ReactHooks() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // 等价于componentDidMount和componentUpdateMount
    console.log('init or update ' + count)

    // componentWillUnmount
    return () => {
      console.log('unmount page')
    }
  }, [])

  return (
    <div>
      <span>{count}</span>
      <Button onClick={() => setCount(count + 1)}>add</Button>

      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default ReactHooks;