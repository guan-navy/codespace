import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '列表',
  description: '这是商品列表页面',
}
function ListLayout({children}: {children:React.ReactNode}) {
  return (
    <div className='list'>
     <h3>这是我的列表页</h3>
     {children}
    </div>
  )
}

export default ListLayout
