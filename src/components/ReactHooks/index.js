import React, { useState, useEffect, createContext, useReducer, useRef } from 'react';
import { Button } from 'antd'
import Counter from './Counter'

export const CountContext = createContext()
export const ADD_ACTION = 'add'
export const UPDATE_ACTION = 'update'
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ACTION: 
      return state + 1
    case UPDATE_ACTION:
      return action.count
    default:
      return state
  }
}

function ReactHooks() {
  const [testUseMemo1, setTestUseMemo1] = useState('useMemo1')
  const [testUseMemo2, setTestUseMemo2] = useState('useMemo2')
  const [count, dispatch] = useReducer(reducer, 0)   // 参数0为默认值

  const inputEl = useRef(null)
  const getEl = () => {
    inputEl.current.value = 'use ref'
    console.log(inputEl)
  }
  useEffect(() => {
    // 等价于componentDidMount和componentUpdateMount
    console.log('init or update ' + count)

    // componentWillUnmount
    return () => {
      console.log('unmount page')
    }
  }, [count])  // 第二个参数为触发componentWillUnmount时机

  return (
    <div>
      <span>{count}</span>
      <Button onClick={() => dispatch({type: ADD_ACTION})}>add</Button>
      <Button onClick={() => {setTestUseMemo1('触发change')}}>testUseMemo1</Button>
      <Button onClick={() => {setTestUseMemo2('触发change')}}>testUseMemo2</Button>
      
      <CountContext.Provider value={{count, dispatch}}>
        <Counter testUseMemo1={testUseMemo1}>{testUseMemo2}</Counter>
      </CountContext.Provider>

      <input ref={inputEl} type="text" />
      <button onClick={getEl}>get El</button>
    </div>
  )
}

export default ReactHooks;