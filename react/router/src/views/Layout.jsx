
import { Link, Outlet ,useNavigate} from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()
  return (
    <div>
      <header style={{height: '80px', backgroundColor: 'rgb(241, 202, 202)'}}>header</header>
      <section style={{display: 'flex'}}>
        <aside style={{width: '200px', height: 'calc(100vh - 80px)', backgroundColor: 'rgb(235, 233, 185)'}}>
          <ul>
            <li><Link to='/layout/article'>文章</Link></li>
            <li><Link to='/layout/publish'>发布</Link></li>
          </ul> 
        </aside>
        <section>
          {/* 二级路由的出口 */}
          <Outlet />
        </section>
      </section>
    </div>
  );
};

export default Layout;