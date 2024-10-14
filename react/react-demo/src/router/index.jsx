import { BrowserRouter, useRoutes } from "react-router-dom";

import React from "react";
import Login from "../pages/login";
import Home from "../pages/home";

//路由懒加载
const  LayoutWrap = React.lazy(() => import('../pages/layout'))

// import Students from '../pages/students'
// import Employment from '../pages/employment'
// import Personal from '../pages/personal'

const routerList = [
  { path: "/home", element: <Home/> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:'/layout',
    element: <LayoutWrap />,
  }
  //   {
  //     path: '/layout',
  //     element: <LayoutWrap/>,
  //     children: [
  //       {
  //         path: '',
  //         element: <Navigate to='/layout/students'/>,
  //       },
  //       {
  //         path: '/layout/students',
  //         element: <Students/>
  //       },
  //       {
  //         path: '/layout/employment',
  //         element: <Employment/>
  //       },
  //       {
  //         path: '/layout/personal',
  //         element: <Personal/>
  //       }
  //     ]
  //   },
];

function Element() {
  return useRoutes(routerList); // <Route path="/" element={<Home/>}/>
}

function WrapperRoutes() {
  return (
    <BrowserRouter>
      <Element />
    </BrowserRouter>
  );
}

export default WrapperRoutes;
