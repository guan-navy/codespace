import { BrowserRouter, Routes, Route ,Link,useNavigate, useParams} from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>这是Home组件</h2>
      <button onClick={() => navigate('/about/123',{replace:true})}>跳转到关于页面</button>
    </div>
  )
}
const About = () => {
  // const [searchParams] = useSearchParams()
  // console.log(searchParams.get('id'))
  let params = useParams()
  console.log(params)
  return (
    <div>
      <h2>这是About组件</h2>
    </div>
  )
}
export default function App() {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about/:age',
      element: <About />,
    },
  ]
  
  return (
    <div>
      <div className="app">这是根组件</div>
      <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="about">关于</Link>

      <Routes>
      
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
