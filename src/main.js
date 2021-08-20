import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import store from './store'
import axios from 'axios'

window.Kakao.init('27c3bac20c362a640406590367df687d')
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

createApp(App).use(router).use(store).mount('#app')
