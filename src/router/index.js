import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import ServiceCenter from '../pages/ServiceCenter.vue'
import IbackIntrodues from '../pages/IbackIntrodues.vue'
import BusinessAlliance from '../pages/BusinessAlliance.vue'
import Checklist from '../pages/Checklist.vue'
import Will from '../pages/Will.vue'



const routes = [
    //메뉴
    { path: '/', name: 'home', component: Home, title: '홈', icon: 'fas fa-home', meta: { isMenu: true, } },
    { path: '/ibackIntrodues', name: 'ibackIntrodues', component: IbackIntrodues, title: '아이백이란?', icon: 'fas fa-book', meta: { isMenu: true, } },
    { path: '/businessAlliance', name: 'businessAlliance', component: BusinessAlliance, title: '사업제휴', icon: 'fas fa-envelope', meta: { isMenu: true, } },
    { path: '/serviceCenter', name: 'seviceCenter', component: ServiceCenter, title: '고객센터', icon: 'fas fa-chalkboard', meta: { isMenu: true, } },
    
    
    { path: '/checklist', name: 'checklist', component: Checklist, title: '체크리스트작성', meta: { isMenu: false, } },
    { path: '/will', name: 'will', component: Will, title: '유언장작성', meta: { isMenu: false, } },
    

    

    { path: '/login', component: Login, title: '로그인', meta: { isMenu: false, layout: 'EmptyLayout'} }
    
]


const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router