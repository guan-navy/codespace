import React from 'react'

import {useState,useMemo} from'react'


export default function ShowFn() {
    let [count, setCount] = useState(0)
    let [msg, setMsg] = useState('初始消息')
    let a  = useMemo(()=>{
        console.log('我是useMemo');
        return count*2
    },[count])
    return (<>
        <div>这里是函数组件</div>
        <div>{count}</div>
        <div>{msg}</div>
        <div>{a}</div>
        <button onClick={()=>{
            setCount(count+1)}}>+1</button>
        <button onClick={
           (() => {
            let flag = true

            
            return (function () {
                
                if (flag) {
                    setMsg('我是函数组件的消息')

                    flag = false
                } else {
                    setMsg('我是消息')
                    flag = true
                }

            })
            
        }) ()
        }>切换</button>
    </>

    )
}
