# 生命周期钩子函数
onBeforeMount ,onMounted,onUnmounted,onBeforeUpdate,onUpdated,onActivated,onDeactivated,onBeforeUnmount,onBeforeRender,onRenderTracked,onRenderTriggered

# 生命周期钩子函数的执行顺序
1. onBeforeMount
2. onMounted
3. onBeforeUpdate
4. onUpdated
5. onActivated
6. onDeactivated
7. onBeforeUnmount  一般不用,可以用于销毁组件如定时器


# axios
在代码当中可以发的请求在代码中类型不固定按照后端说了算
在浏览器url地址栏中只能发get请求



# 响应式数据
- 先从vue中导入
import {  reactive,ref } from "vue"; 
- ref 
  - 使用ref创建响应式变量
  const refVarible = ref({})
  - 更改变量的值 通过.value
  refVarible.value = data

- reactive
  - 使用reactive创建一个对象有响应式变量属性
  const reactiveVarible = reactive({
    name:'zhangsan',
  })
  - 更改变量的值,直接改
  reactiveVarible.name = 'lisi'

- 注意对象属性在页面中展示的时候,要注意对象为空的情况,可以加上v-if来解决


# 富文本编辑器
- 安装
npm install @vueup/vue-quill@latest --save
