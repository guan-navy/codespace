import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import 'element-plus/dist/index.css'
import './assets/css/color-dark.css'
import { usePermissStore } from './store/permiss.ts'
// import * as语法用于将一个模块的所有导出内容作为一个命名空间对象导入。
//在这种情况下，import * as ElementPlusIconsVue将@element-plus/icons-vue模块中的所有导出内容作为ElementPlusIconsVue对象导入。
//这意味着在使用时，需要通过ElementPlusIconsVue对象来访问模块中的所有导出内容。
//这种方式可以方便地将一个模块的所有导出内容组织在一个对象中，避免了可能的命名冲突。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index.js'
import { createPinia } from 'pinia'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())

// 将ElementPlusIconsVue对象中的所有组件注册到app对象中。
for(const [key,component ]of Object.entries(ElementPlusIconsVue)){
  app.component(key,component)
}

const permiss = usePermissStore()
// 全局指令 directive 接收两个参数，第一个是指令的名称，我们在其他地方可以使用v-permiss 调用该指令，第二个参数为一个回调函数
app.directive('permiss',{
  mounted(el,binding){
      if(!permiss.key.includes(String(binding.value))){
        el['hidden'] = true;
      }
  }
})


app
  .mount('#app')
