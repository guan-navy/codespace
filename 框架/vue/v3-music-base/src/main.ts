import { createApp } from 'vue'
import '@/assets/base.scss'
import '@/assets/theme.scss'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import '@/utils/extend' 
const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
