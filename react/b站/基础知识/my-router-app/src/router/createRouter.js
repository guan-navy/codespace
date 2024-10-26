import React from "react";
import { Route } from "react-router-dom";
import { routeMap } from "./routeMap";
export default function createRouter(routesArr) {
  
  return routesArr.map((item, index) => {
    // 有子路由递归
    
    if (item.children&&item.children.length) {
      return (
        <Route key={index} path={item.path} Component={routeMap[item.component]}>
          {createRouter(item.children)}
        </Route>
      );
    }
    return <Route key={index} path={item.path} Component={routeMap[item.component]} />;
  });
}
