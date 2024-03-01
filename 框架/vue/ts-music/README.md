# typescript
- 让前端像写java大型项目一样代码1万行+
- vue/react +typescript
- es6
   弱类型还是没有强类型,缺点是容易出问题
   
- ts是js的超集
- 给项目引入模型层
- ui组件和数据管理的分离
   - store /component|views
   - pinia defineStore('todos',()=>{
      return{
         state,
         ...actions
      }
   }) useTodoStore
   - vue ref
   - 这里是唯一请求axios接口的方法
   - app.use(createPinia())
   - 引入这个模块,执行useTodoStore 方法
   const {todos} = toRefs(useTodoStore())
   const {getTodos} = useTodosStore


   - vue 的开发设计模式
      - 越复杂的,只要是流程,其实很简单,只不过是需要一本说明书
      - ui组件+数据管理
      - 数据的流向
         backedd ->api ->store -> component
      - Spa
         router->views->components
      - App = Vue+VueRouter +pinia +ts
      - 写ui组件
         ElemnetPlus(熟悉) +views +components(common|components)+
         Tailwindcss(熟悉)+组件设计艺术
- App.vue 一个个组件慢慢搭
   <>defineProps