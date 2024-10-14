import { useState } from "react"

export default function State() {
    //这里的值可以随便声明的
   const [count, setCount] = useState(10)
   const add=()=>{
    //设置新的值 
    setCount(count+1)
   }
//    const num = 1
//    if(num){
//     const [test, setTest] = useState(0)
//   }
  return (
    <div>
      <h2>State组件</h2>
      {/* <h2>{test}</h2> */}
      <button onClick={() => {add()}}>{count}</button>
    </div>
  )
}
