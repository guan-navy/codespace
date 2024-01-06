// 后台系统 比如公司内部使用Chrome引擎，使用History模式即可  Html5.pushState  ，chrome
// 用户端、 移动项目没这个问题 PC 端，政府、企业
import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/Home.vue'; // 直接引入 开销

// const data = usePermissStore(); // hook 
// console.log(data);
// 路由的配置   后台管理系统
// 设置数组 
// admin[1,2,3]
// user[1]
// useRoute meta.permiss 你要访问的页面的权限 includes true 
const routes:RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'/dashboard' // 重定向 状态码：30X
    },
    {
        path:'/login',
        name:'login',
        component:() => import('../views/Login.vue'),
        meta:{
            title:'登录'
        }
    },
    {
        path:'/',
        name:'home', // useRouter push
        component: Home, // Layout
        children: [
            {
                path:'/dashboard',
                name:'dashboard',
                meta: { 
                    title: '系统首页', // 路由守卫
                    permiss: '1' // 哪些页面可以看吗？
                },
                component:() => import('../views/Dashboard.vue')
            },
            {
                path:'/table',
                name:'basetable',
                meta: { 
                    title: '表格', // 路由守卫
                    permiss: '2' // 哪些页面可以看吗？
                },
                // 动态挂载路由 异步加载组件
                component:() => import('../views/Table.vue')
            }
        ]
    },
    {
        path:'/403',
        name:'403',
        meta:{
            title:'没有权限'
        },
        component: ()=>import('../views/403.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,from,next) => {
    document.title = `${to.meta.title} | 后台管理系统`;
    // 登录后的用户名
    const role = localStorage.getItem('ms_username');
    // const role = 'user';
    const permiss = usePermissStore();
    // console.log(permiss);
    if(!role && to.path !== '/login'){
        next('/login');
    } else if (to.meta.permiss && !permiss.roleList[role].includes(to.meta.permiss)){
        next('./403')
    }
    next();
})

export default router