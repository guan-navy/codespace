import React from 'react'
import { lazy,Suspense } from'react'

import App from './App'
import './App1.css'
import { Route, Routes,NavLink } from 'react-router-dom'
import Page1 from './components/路由/Page1'
import Page2 from './components/路由/page2'
import Page3 from './components/路由/page3'
import Page2Son1 from './components/路由/Page2Son1'
import store from './store'
let Page4 = lazy(()=>import('./components/路由/Page4'))

export default function App1() {
  return (
    <>
    <NavLink to='/' >首页</NavLink>
    <NavLink to='/page1' >page1</NavLink>
    <NavLink to='/page2'>page2</NavLink>
    <NavLink to='/page3'>page3</NavLink>
    <NavLink to='/page4'>page4</NavLink>

    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/page1' element={<Page1></Page1>}/>
    <Route path='/page2' Component={Page2}>
      <Route path='son1' element={<Page2Son1/>}/>
    </Route>

    <Route path='/page3/:id/:age' element={<Page3/>}/>

    <Route path='/page4' element={<Suspense fallback={<div>加载中</div>}><Page4/></Suspense>}/>
   </Routes>
    </>
   

  )
}
