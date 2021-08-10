import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import ServiceCenter from '../pages/ServiceCenter.vue'
import IbackIntrodues from '../pages/IbackIntrodues.vue'
import BusinessAlliance from '../pages/BusinessAlliance.vue'
import Checklist from '../pages/Checklist.vue'
import Will from '../pages/Will.vue'
import store from '../store'



const routes = [
    //메뉴
    { path: '/', name: 'home', component: Home, title: '홈', icon: 'fas fa-home text-xl', meta: { isMenu: true, requireAuth: true} },
    { path: '/', name: 'ibackIntrodues', component: IbackIntrodues, title: '아이백이란?', icon: 'fas fa-book text-xl', meta: { isMenu: true, requireAuth: true} },
    { path: '/', name: 'businessAlliance', component: BusinessAlliance, title: '사업제휴', icon: 'fas fa-envelope text-xl', meta: { isMenu: true, requireAuth: true} },
    { path: '/', name: 'seviceCenter', component: ServiceCenter, title: '고객센터', icon: 'fas fa-chalkboard text-xl', meta: { isMenu: true, requireAuth: true} },
    
    
    { path: '/checklist', name: 'checklist', component: Checklist, title: '체크리스트작성', meta: { isMenu: false, requireAuth: true} },
    { path: '/will', name: 'will', component: Will, title: '유언장작성', meta: { isMenu: false, requireAuth: true} },
    

    

    { path: '/login', component: Login, title: '로그인', props: true, meta: { isMenu: false, layout: 'EmptyLayout'} }
    
]


const router = createRouter({
    history: createWebHistory(), 
    routes
})

// navigation guard
router.beforeEach((to, from, next) => {
    const currentUser = store.state.user
    // console.log(to.matched)
    const requireAuth = to.matched.some((record) => record.meta.requireAuth)
    // console.log(to)
    // not authenticated
    if(requireAuth && !currentUser) next('/login')
    // authenticated
    else next()
})



export default router