# 路由 BrowserRouter 和 HashRouter

## 基本概念

- Link 标签相当于 a 标签使用 to 属性跳转到指定的路径
- Routes 路由出口相当于 router-view
- Route 单个路由匹配
- path 匹配路径
- element 匹配渲染的组件

## 跳转

1. 编程式跳转
   useNavigate
   使用这个钩子函数得到一个新函数调用跳转至新的路由,相当于 router.push(path)
   还有 replace 属性可以设置是否不可回退

## 传参

1. ?传参
传参:
navigate('/detail?id=1')
获取参数:
useSearchParams编程式跳转的时候可以直接直接问号后面加参数
   获取参数useSearchParams
2. /传参
useParams 获取使用斜杠拼接的参数


## 二级路由

## 分类

1. BrowserRouter,需要使用路由的地方要用路由包裹
   <BrowserRouter></BrowserRouter>
   整个外部标签
   就是 history 模式下的路由,hash模式的路由HashRoutes
2. <Routes></Routes>
开启路由配置的文件

