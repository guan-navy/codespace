import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'
import './router/permiss';
const app = createApp(App)
app
.use(router)

.mount('#app')
