import { createRouter, createWebHistory } from "vue-router";


const routes = 
[
    {
        //根目录重定向到noteclass-page页面
        path : '/', 
        redirect: '/noteclass'
    },
    {
        path : '/login', //要以斜杠开头
        name : 'login-page',
        meta:{
            title : '登入'
        },
        component : () => import('../assets/views/login.vue')
    },
    {
        path : '/register', 
        name :'register-page',
        meta:{
            title : '注册'
        },
        component : () => import('../assets/views/register.vue')
    },
    {
        path : '/noteclass', 
        name :'noteclass-page',
        meta:{
            title : '笔记分类'
        },
        component : () => import('../assets/views/NoteClass.vue')
    }
    ,
    {
        path:'/noteList',
        name:'noteList-page',
        meta:{
            title : '笔记列表'
        },
        component : () => import('../assets/views/NoteList.vue')
    },
    {
        path:'/noteDetail',
        name:'noteDetail-page',
        meta:{
            title : '笔记详情'
        },
        component : () => import('../assets/views/NoteDetail.vue')
    },
    {
        path:'/notePublish',
        name:'notePublish-page',
        meta:{
            title : '笔记发布'
        },
        component : () => import('../assets/views/NotePublish.vue')
        
    }
    
]
const router = createRouter({
    history : createWebHistory(),
    routes
})
//路由守卫
//白名单路径
// 路由守卫
const whitePath = ['/login','/register']
router.beforeEach((to,from,next) => {
    document.title = to.meta.title

    if(!whitePath.includes(to.path)) { // 你想去详情页
        if(!sessionStorage.getItem('userInfo')){ // 没登入
            router.push('/login')
            return
        }
        next()
        return 
    }
    next()
})
    
export default router