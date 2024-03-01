import { createRouter,createWebHistory } from "vue-router";
const route =[
    {
        path:"/",
        name:"home",
        component:()=>import("../views/home.vue"),
        meta:{
            title:"Home"
        }
    },
    {
        path:"/about",
        name:"about",
        component:()=>import("../views/about.vue"),
        meta:{
            title:"About"
        }
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:route
})

export default router