import React, { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export default function Page1() {
  let [params,setParams] = useSearchParams()
  let loaction = useLocation()
  let  searchParams = new URLSearchParams(loaction.search)

  let name = params.get('name')
  useEffect(()=>{
    console.log(name);
    console.log(searchParams.get('name'));
    console.log(searchParams.get('age'));
    
    
  },[ ])
  return (
    <div>page1

      <button onClick={
        ()=>{
          setParams({name:'李四'
              ,age:18
          })
        }
      }></button>
    </div>
  
  )
}

