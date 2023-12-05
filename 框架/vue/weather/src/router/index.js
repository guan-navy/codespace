import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        //重定向当访问根路径,将会被重定向到
        path: '/',
        redirect:'/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router