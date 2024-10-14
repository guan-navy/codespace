import { createWebHistory } from 'vue-router'
import VueRouter from 'vue-router'

const history = createWebHistory()
// 定义路由规则
const routes = [
    {
      path: '/',
      component: '',
      name: 'Home',
      // 其他可选参数如meta等
    },
    {
      path: '/about',
      component: About,
      name: 'About',
    }
  ]
  const router = new VueRouter({
    // 使用history模式
    history: history,
  
   
  
    routes, // 简写方式，相当于 routes: routes
  })

  
export default router