// 定义懒加载 指令逻辑
import { useIntersectionObserver } from "@vueuse/core";

export const imgLazyLoad = {
  install(app) {
    //懒加载逻辑
    //监听元素
    app.directive("img-lazy", {
      mounted(el, binding) {
        // el指令绑定的元素
        //binding.value是绑定的值
        // console.log(el, binding.value);
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
            // console.log(isIntersecting);
          if (isIntersecting === true) {
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
