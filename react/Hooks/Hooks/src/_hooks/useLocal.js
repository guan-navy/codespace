
import {useEffect, useState} from 'react'  
export function useLocal (key,value){
    const [msg,setMag]=useState(value)
    useEffect(()=>{
        console.log(msg);
        localStorage.setItem(key,msg)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ msg])//不添加第二个参数的话呢,会受到其他钩子函数的影响,也就是会受到滚动钩子的影响导致,再次存储
    return [msg,setMag]
}