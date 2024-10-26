
import './App.css';
import { routesArr as originalArr } from './router/initConfig'

import createRouter from './router/createRouter';
import {  Routes } from'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  console.log('App渲染');
  
  const routes = useSelector(state=>{
    console.log('这里是state',state);
    
    return state.userinfo.userRoute})
    console.log('生成的路由数组',createRouter(routes.concat(originalArr)));
    console.log('合并之后的路由数组',routes.concat(originalArr));
    
  return (
    <>
    
    <Routes>

    {createRouter(routes.concat(originalArr))}
    </Routes>
  
  
    
    </>
  );
}

export default App;
