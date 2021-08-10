import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

window.Kakao.init('27c3bac20c362a640406590367df687d')

createApp(App).use(router).mount('#app')
