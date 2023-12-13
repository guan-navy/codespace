import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/goods',
    name: 'goods',
    component: () => import('@/views/goods')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('@/views/comment')
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import('@/views/seller')
  },
  {
    path: '/',
    redirect:'goods'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
