import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeMsg ,changeMsgThunk} from './store/toolkit'
export default function App2() {
  const state = useSelector(state=>state)
  const {msg} = state
  const dispatch = useDispatch()
  console.log(dispatch);
  console.log(state)
  console.log(msg);
  return (
    <div>
     <div>App2展示hook连接react</div> 
      {msg.msg}
      <button onClick={
        ()=>{
          dispatch(changeMsg('guanhaijun'))
        }
      }>点击更改</button>
        <button
        onClick={
          ()=>{
            dispatch(changeMsgThunk('给定的参数'))

          }
        }
        >
            异步修改
        </button>
    </div>
  )
}
