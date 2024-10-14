
import { useEffect,useState } from "react";
const Effect=()=>{
   //卸载的生命周期


    const [count,setCount]=useState(0);
    useEffect(()=>{
       console.log("useEffect",count);
    },[count]);
   
    useEffect(()=>{
       const timer =  setTimeout(()=>{
            setCount(count+1);
        },2000)
        return()=>{ //会在组件卸载的时候触发
            console.log('组件卸载');
            clearTimeout(timer);
        }
    },[count]);
    return(
        <div>
            <h1>Effect</h1>
            <button onClick={()=>setCount(count+1)}>Click-{count}</button>
        </div>
    )
}
export default Effect;
