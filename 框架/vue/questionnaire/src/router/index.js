import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name:'home',
    component:()=>import('@/views/home/index.vue'),
  },
  {
    path: '/item',
    name:'item',
    component:()=>import('@/views/item/index.vue'),
  },
  {
    path: '/score',
    name:'score',
    component:()=>import('@/views/score/index.vue'),
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
