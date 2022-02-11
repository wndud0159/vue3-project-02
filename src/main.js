import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import store from './store'
import VueDaumPostcode from 'vue-daum-postcode'



createApp(App).use(router).use(store).use(VueDaumPostcode).mount('#app')
