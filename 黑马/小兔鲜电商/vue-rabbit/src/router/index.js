//createRouter创建路由实例
//createWebHistory创建history模式路由

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '../views/Category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'layout',
      component:Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'/category',
          component:Category
        }
      ]
      
    },
    {
      path: '/login',
      name:'login',
      component:Login,
      
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('../views/Login/index.vue'),
      
    }
  ]
})

export default router
