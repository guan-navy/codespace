
import {useScroll} from '../_hooks/useScroll'
import {useLocal } from '../_hooks/useLocal'
// import {useState} from 'react'
export default function MyHooks() {
 
const [pageY] = useScroll()//获取到当前滚动的距离,会导致组件重新加载
const [count,setCount] = useLocal('count',0)//将count的值存储在本地
  return (
    <div style={{height:'200vh',marginTop:'50vh'}}>
      <h2>MyHooks</h2>
      <h3>当前页面滚动的距离是{pageY}<button onClick={()=>setCount(count+1)}>{count}</button></h3>
    </div>
  )
}
