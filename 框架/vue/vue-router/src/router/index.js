import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Newest from '../views/HomeChild/Newest.vue'

const routes = [
    {
        path:'/',
        redirect:'/Home'
    },
    {
        path:'/Home',
        component: Home,
        children:[
            {
                path: '/Home',
                redirect:'/Home/Newest',
            },
            {
                path: 'Newest',
                component: Newest
            },
            {
                path:'Recommend',
                component: () => import('../views/HomeChild/Recommend.vue')
            }
        ]
    },
    {
        path:'/about',
        component: About
    }
]
const router = createRouter({
    history: createWebHistory(),//路由history模式,hash模式
    routes
})

export default router