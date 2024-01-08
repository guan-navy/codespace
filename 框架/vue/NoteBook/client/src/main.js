import { createApp } from 'vue'

import App from './App.vue'
import './assets/style/reset.css'
import 'amfe-flexible' 
import router from './router'

import {Button,Form,Field,CellGroup,Icon} from 'vant'
import 'vant/lib/index.css';
const app = createApp(App);

app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(router);
app.use(Icon);
app.mount('#app')

