// 后台系统 History html5 history.pushState 公司内部使用,chrome 
// 前台项目 用户端 移动项目没这个问题 PC端 -> 政府、企业 需要考虑兼容性
import { createRouter, createWebHistory } from 'vue-router';
import { userPermissStore } from '../store/permiss';
import Home from '../views/Home.vue';//直接引入 开销
// const data = userPermissStore();//hooks
//路由配置 后台管理系统
// 设置数组 admin[1,2,3] user[1]
// userRoute meta.permiss 你要访问的页面的权限 includes true
const routes = [

    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',// useRouter push
        component: Home,//Layout
        children: [
            {
                path: '/dash-board',
                name: 'dashboard',
                meta: {
                    title: '系统首页',//路由守卫
                    permiss: '1' //哪些页面可以看
                },
                component: () => import('../views/DashBoard.vue')
            },
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '表格',//路由守卫
                    permiss: '2' //哪些页面可以看
                },
                // 动态挂载路由 路由为'/table'异步加载组件
                component: () => import('../views/Table.vue')
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
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | 后台管理系统`
    //登录后的用户角色
    // const role  = localStorage.getItem('ms_username');
    const role = 'admin'
    const permiss = userPermissStore();
    console.log(permiss);
    if (!role && to.path !== '/login') {
        next('/login')
    } else if (to.meta.permiss &&
        !permiss.roleList[role].includes(to.meta.permiss)) {
        next('/403')
    } else {
        next()
    }
})
export default router