import {useRouter} from 'vue-router'
import NProgress from 'nprogress'
 
const router = useRouter();

/* *
*前置路由守卫
*
*/
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})
//后置守卫
router.afterEach((to, from) => {
    NProgress.done()
})