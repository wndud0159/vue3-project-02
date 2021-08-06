import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import ServiceCenter from '../pages/ServiceCenter.vue'



const routes = [
    { path: '/', name: 'home', component: Home, title: '홈', icon: 'fas fa-home', meta: { isMenu: true, } },
    { path: '/ibackIntrodues', name: 'ibackIntrodues', component: Home, title: '아이백이란?', icon: 'fas fa-book', meta: { isMenu: true, } },
    { path: '/businessAlliance', name: 'businessAlliance', component: Home, title: '사업제휴', icon: 'fas fa-envelope', meta: { isMenu: true, } },
    { path: '/serviceCenter', name: 'seviceCenter', component: ServiceCenter, title: '고객센터', icon: 'fas fa-chalkboard', meta: { isMenu: true, } },
    
    { path: '/login', component: Login, title: '로그인', meta: { isMenu: false, layout: 'EmptyLayout'} }
    
]


const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router