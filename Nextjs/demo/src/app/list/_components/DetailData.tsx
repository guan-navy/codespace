'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
export default function DetailData() {
  const searchParams = useSearchParams()
  return (
    <div>DetailData
        {searchParams.get('name')}
        
    </div>
  )
}
