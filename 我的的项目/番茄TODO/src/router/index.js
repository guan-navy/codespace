import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/index/index.vue'
import Login from '@/views/login/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      
      component: Login
    }
  ]
})

export default router
