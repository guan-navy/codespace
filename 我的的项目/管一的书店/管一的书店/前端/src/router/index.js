import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Layout/index.vue'
import LoginView from '../views/Login/index.vue'
import {ElMessage} from 'element-plus'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',//空白子路由自动展示
          name: 'default',
          component: () => import('../views/Home/components/DefaultContent.vue')
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('../views/Home/components/SearchResult.vue')
        },
        {
          path:'/detail',
          name: 'detail',
          component: () => import('../views/Home/components/BookDetail.vue')
        }
       ]

    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})


// 路由守卫
// 白名单
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  const token =   sessionStorage.getItem('token')
  if (whiteList.includes(to.path) ) {
    if(to.path ==='/login'){
      if(token){
        ElMessage({
          message: '您已登录,无需再次登录',
          type: 'success',
          offset:200
        })
        next('/')
        console.log('token:' + token);
      } 
    }
    next()
  } else {
    
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
