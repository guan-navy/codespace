import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './config/rem.js'
import './assets/style/reset.less'

createApp(App).use(store).use(router).mount('#app')
