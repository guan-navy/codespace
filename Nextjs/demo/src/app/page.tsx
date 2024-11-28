import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '首页',
  description: '这是第一个页面',
}

function Home() {
  return (
    <div>
      这里是根页面
    </div>
  )
}

export default Home
