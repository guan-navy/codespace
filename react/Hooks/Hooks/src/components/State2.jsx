
import { useState } from 'react'
import  PropTypes from 'prop-types'
export default function State2(props) {
const [n] = useState(0)
    const [count,setCount]=useState(()=>{
        return props.num*n
    })
   

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}
State2.propTypes = {
    num: PropTypes.string.isRequired
}