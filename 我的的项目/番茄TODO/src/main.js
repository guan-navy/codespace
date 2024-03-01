
import 'vant/lib/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem , Button,Field, CellGroup  } from 'vant';

const app = createApp(App)

app.use(createPinia())
app.use(router)
//ui组件

app.use(Tabbar)
app.use(TabbarItem)
app.use(Button)
//文本框
app.use(Field)
app.use(CellGroup)


app.mount('#app')
