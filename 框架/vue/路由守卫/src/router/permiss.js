
import "../nprogress/nprogress.css";
import router from '../router/index'

import nProgress from 'nprogress';


nProgress.configure({ showSpinner: true }) 
//前置守卫
router.beforeEach((to, from, next) => {
    console.log('Before Each Hook');
    nProgress.start();
    next(); 
})

//后置守卫
router.afterEach((to, from) => {
    console.log('After Each Hook');
    nProgress.done();
})