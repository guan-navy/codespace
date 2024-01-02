import { createRouter, createWebHistory } from "vue-router";


const routes = 
[
    {
        path : '/login', //要以斜杠开头
        name : 'login-page',
        component : () => import('../assets/views/login.vue')
    },
    {
        path : '/register', //
        name :'register-page',
        component : () => import('../assets/views/register.vue')
    }
]
const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router