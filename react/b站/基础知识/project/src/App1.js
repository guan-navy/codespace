import React, { useEffect } from 'react'
import { lazy,Suspense } from'react'

import App from './App'
import './App1.css'
import { Route, Routes,NavLink } from 'react-router-dom'
import Page1 from './components/路由/Page1'
import Page2 from './components/路由/page2'
import Page3 from './components/路由/page3'
import Page2Son1 from './components/路由/Page2Son1'
// import store from './store/index'
import { connect  } from 'react-redux'
import { changeMsg } from './store/toolkit'
// let state = store.getState()

let Page4 = lazy(()=>import('./components/路由/Page4'))

 function App1(props) {
  console.log('这里是props',props);
  
  useEffect(()=>{
    console.log('App1挂载');
    
    // console.log(store);
    // console.log(state);
    
    // console.log(state.msg);
    
  },[])
  return (
    <>
    <NavLink to='/' >首页</NavLink>
    <NavLink to='/page1' >page1</NavLink>
    <NavLink to='/page2'>page2</NavLink>
    <NavLink to='/page3'>page3</NavLink>
    <NavLink to='/page4'>page4</NavLink>
    <NavLink to='/page5'>page5</NavLink>
    <br />
    <div>全局状态↓</div>
    {/* <div>{state.msg}</div> */}
    <div>{props.msg}</div>
    <button
    onClick={
      ()=>{
        // store.dispatch({type:'changeMsg', payload:'guanhaijun'})
        // console.log(store.getState());
        props.dispatch({type:'msg/changeMsg', payload:'guanhaijun'})
        // props.changeMsg('guanhaijun')


        
      }
    }>
点击更改状态
    </button>
    <button onClick={
      ()=>{
        // store.dispatch({type:'changeMsg', payload:'guanhaijun'})
        // console.log(store.getState());
        props.changeMsg('guanhaijun12')



      }

    }>单独暴露出来的</button>

    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/page1' element={<Page1></Page1>}/>
    <Route path='/page2' Component={Page2}>
      <Route path='son1' element={<Page2Son1/>}/>
    </Route>

    <Route path='/page3/:id/:age' element={<Page3/>}/>

    <Route path='/page4' element={<Suspense fallback={<div>加载中</div>}><Page4/></Suspense>}/>

    <Route path='/page5' element={<page5/>}/>

   </Routes>
    </>
   

  )
}


export default connect(
  // 第一个参数是state的映射
  // 第二个参数是dispatch的映射,都会合并到props中

  state=>{
    console.log(state);
    
    // 选择需要映射的数据
    return {msg:state.msg.msg,
    // num:state.numReducer.num
    }
  },(dispatch)=>{
    return {
      changeMsg(str){
        dispatch(changeMsg(str))

      }
    }
  }
)(App1)
