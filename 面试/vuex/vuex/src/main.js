import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/index'


// vue保持自身的简单,其它工作交给生态中的插件
const app = createApp(App)
app.use(store)
app.mount('#app')
