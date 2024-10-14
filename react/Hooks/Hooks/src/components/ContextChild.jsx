// import React from 'react'
//
import { useContext } from "react"
import Con from "../_context"
export default function ContextChild() {
    const msg = useContext(Con)
  return (
    <div>
      <h2>ContextChild组件--{msg}</h2>
    </div>
  )
}
