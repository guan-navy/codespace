import React from 'react'

export default function TestLayout({children}: {children:React.ReactNode}) {
  return (
    <div className='testLayout'>
        <h3>布局测试</h3>
        {children}
    </div>
  )
}
