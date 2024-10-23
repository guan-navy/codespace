import React from 'react'
import { useParams } from'react-router-dom'
export default function Page3() {
  let params = useParams()
  console.log(params);
  return (
    <div>page3</div>
  )
}
