import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Page1() {
  return (
    <div>
      page1
      <Outlet />
    </div>
  )
}
