import { Route, Routes, BrowserRouter,Navigate,Outlet } from "react-router-dom";
import Layout from "./views/Layout";
import Home from './views/Home';
import Article from './views/layout-views/Article';
import Publish from "./views/layout-views/Publish";

export default function App2() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/layout" element={<Layout />}>
            {/* 第一个 子路由 默认 重定向*/}
            <Route path=" " element={<Navigate to="/layout/article" />}></Route>
           <Route path="article" element={<Article />}></Route>
           <Route path="publish" element={<Publish />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
