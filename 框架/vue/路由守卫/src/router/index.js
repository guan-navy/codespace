//router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
    {
        path:'/',
        redirect:'Login'
    }
    ,
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:()=> import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component:()=> import('../views/Login.vue')
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router