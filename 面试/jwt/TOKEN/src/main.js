import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import {Button,Form,Field,CellGroup} from 'vant'
import 'vant/lib/index.css';

const app = createApp(App)
app.use(router)
app.use(Button)

app.use(Form)
app.use(Field)
app.use(CellGroup)
app.mount('#app')

