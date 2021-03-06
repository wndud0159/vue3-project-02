import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

import LoadingModal from "../components/LoadingModal.vue";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import ServiceCenter from "../pages/ServiceCenter.vue";
import BusinessAlliance from "../pages/BusinessAlliance.vue";
import Will from "../pages/Will.vue";
import CollbackByNaver from "../collback/CollbackByNaver.vue";

import WellDyingChecklistV2 from "../pages/WellDyingChecklistV2.vue";
import Health from "../pages/Health.vue";
import Finance from "../pages/Finance.vue";
import Testament from "../pages/Testament.vue";
import Funeral from "../pages/Funeral.vue";
import Digital from "../pages/Digital.vue";
import Pet from "../pages/Pet.vue";
import Bucketlist from "../pages/Bucketlist.vue";

import VideoTest from "../pages/VideoTest.vue";
import VideoTest02 from "../pages/VideoTest02.vue";

import PrivacyPolicy from "../pages/PrivacyPolicy.vue";
import TermsOfUse from "../pages/TermsOfUse.vue";
import Notice from "../pages/Notice.vue";
import MyInfo from "../pages/MyInfo.vue";

// import Inheritance from '../pages/Inheritance.vue'

const routes = [
    //메뉴
    { path: "/", name: "home", component: Home, title: "홈", icon: "fas fa-home text-xl", meta: { isMenu: true, requireAuth: true } },
    { path: "/servicecenter", name: "sevicecenter", component: ServiceCenter, title: "고객센터", icon: "fas fa-chalkboard text-xl", meta: { isMenu: true, requireAuth: true } },
    { path: "/myinfo", name: "myinfo", component: MyInfo, title: "내정보", icon: "fas fa-chalkboard text-xl", meta: { isMenu: true, requireAuth: true } },
    { path: "/businessalliance", name: "businessalliance", component: BusinessAlliance, title: "사업제휴", icon: "fas fa-envelope text-xl", meta: { isMenu: true, requireAuth: true } },

    { path: "/will", name: "will", component: Will, title: "유언장작성", meta: { isMenu: false, requireAuth: true } },

    { path: "/welldyingchecklist", component: WellDyingChecklistV2, meta: { isMenu: false, requireAuth: true } },
    { path: "/health", component: Health, meta: { isMenu: false, requireAuth: true } },
    { path: "/finance", component: Finance, meta: { isMenu: false, requireAuth: true } },
    { path: "/testament", component: Testament, meta: { isMenu: false, requireAuth: true } },
    { path: "/funeral", component: Funeral, meta: { isMenu: false, requireAuth: true } },
    { path: "/digital", component: Digital, meta: { isMenu: false, requireAuth: true } },
    { path: "/pet", component: Pet, meta: { isMenu: false, requireAuth: true } },
    { path: "/bucketlist", component: Bucketlist, meta: { isMenu: false, requireAuth: true } },

    { path: "/videotest", component: VideoTest, meta: { isMenu: false, requireAuth: true } },
    { path: "/videotest02", component: VideoTest02, meta: { isMenu: false, requireAuth: true } },
    { path: "/privacypolicy", component: PrivacyPolicy, meta: { isMenu: false, requireAuth: true } },
    { path: "/termsofuse", component: TermsOfUse, meta: { isMenu: false, requireAuth: true } },
    { path: "/notice", component: Notice, meta: { isMenu: false, requireAuth: true } },

    // { path: '/inheritance', name: 'inheritance', component: Inheritance, meta: { isMenu: true, requireAuth: true } },

    { path: "/login", component: Login, title: "로그인", props: true, meta: { isMenu: false, layout: "EmptyLayout" } },
    { path: "/collback/naver", component: CollbackByNaver, title: "loginByNaver", meta: { isMenu: false, layout: "CollbackLayout" } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

//navigation guard
// router.beforeEach((to, from, next) => {
//     const currentUser = store.state.user
//     // console.log(to.matched)
//     const requireAuth = to.matched.some((record) => record.meta.requireAuth)
//     // console.log(to)
//     // not authenticated
//     if(requireAuth && !currentUser) next('/login')
//     // authenticated
//     else next()
// })

export default router;
