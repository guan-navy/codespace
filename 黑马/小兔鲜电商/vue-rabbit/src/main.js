//引入初始化样式文件
import "@/styles/common.scss";

import { createApp,ref } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useIntersectionObserver } from "@vueuse/core";

//测试接口函数
// import {getCategpry}from '@/apis/testAPI'
// getCategpry().then((res)=>{
//   console.log(res)
// })
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

app.directive("img-lazy", {
  mounted(el, binding) {
    // el指令绑定的元素
    //binding.value是绑定的值
    // console.log(el, binding.value);
    
   

    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
      if( isIntersecting ){
        el.src = binding.value;
      }
      }
    );
  },
});
