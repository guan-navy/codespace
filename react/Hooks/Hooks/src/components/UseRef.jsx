
import {useRef,useEffect} from 'react';


export default function UseRef() {
  //得到一个可以存放值的对象
  console.log(h2Ref);
    const h2Ref = useRef(null)
    useEffect(()=>{
      console.log(h2Ref.current);
    },[])
  return (
    <div>
      <h2>Ref</h2>
    </div>
  )
}
