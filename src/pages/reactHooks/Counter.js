import { Fragment, useContext, useMemo } from 'react'
import { CountContext, ADD_ACTION, UPDATE_ACTION } from './index'

function Counter({testUseMemo1, children}) {
  function change(val) {
    console.log("change触发了")
    return val
  }
  // 等价于shouldComponentUpdate用法, 参数数组中的值表示testUseMemo1改变时触发，[]则除了首次加载时触发change，都不再触发
  const newMsg = useMemo(() => change(testUseMemo1), [testUseMemo1])
  const {count, dispatch} = useContext(CountContext)
  return (
    <Fragment>
      <div onClick={() => dispatch({type: ADD_ACTION})}>{count}</div>
      <div onClick={() => dispatch({type: UPDATE_ACTION, count: 0})}>点我重置</div>
      <div>
        {newMsg}
      </div>
      <div>
        {children}
      </div>
    </Fragment>
  )
}
export default Counter