import React from 'react'

export default function Normal(props) {
  console.log('Normal');
  
  return (
    <>
    <div>包装之后的组件</div>
    <div>x:{props?.x}</div>
    <div>y:{props?.y}</div>
    </>
  )
}
