import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
export default function page2() {
  let nav = new useNavigate()
  return (
    <div>page2
<button onClick={
()=>{
  nav('/page1')
}
}>跳转到page1</button>

<Outlet/>
    </div>
      
  )
}
