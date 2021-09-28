<template>
 <div class="flex flex-col">
    <!-- header-section -->
    <div class=" bg-white pl-10 pr-10 hidden  md:flex md:flex-col fixed w-full border-b-2  border-gray-100 top-0 z-30">
      
      <!-- top banner -->
      <div class=" relative">
        <!-- login -->
        <div class="flex items-center justify-center" >
          <div class="absolute right-0 top-3 ">
            <router-link to="/myinfo" v-if="currentUser" :class="`${router.currentRoute.value.path == '/myinfo' ? 'text-primary' : ''}  flex items-center space-x-1 hover:text-primary text-gray-500 hover:opacity-80 cursor-pointer z-50`">
              <img 
              :src="currentUser.profile_image_url" 
              class="w-12 h-12 rounded-full object-cover">
              <i class="fas fa-sort-down text-xl text-gray-400"></i>
            </router-link>
          </div>
          <router-link v-if="!currentUser"  to="/login" class="absolute text-lg right-0  top-6 text-gray-500 hover:text-primary cursor-pointer pb-2" >
            <span>로그인</span>
          </router-link>
        </div>
      </div>

      <!--top nav bar -->
    <div class="flex items-center -mb-0.5 ">
        <!-- title  logo-->
        <router-link to="/" class=" font-semibold text-3xl flex-1 text-primary -mt-0.5 flex items-center">
          <img src="/iback_logo.ico" class="w-10 -mt-1 h-10 mr-0.5" alt="">
          <span>iback</span>
        </router-link>
        <!--tmenu -->
        <div class="  w-4/5 text-gray-500 text-lg">
          <div class="flex">

          <router-link to='/' 
          :class="`${router.currentRoute.value.path == '/' ? 'text-primary' : ''}   flex items-center justify-center py-6 border-b-2    w-1/4 cursor-pointer border-gray-100 hover:border-primary hover:text-primary`">
            <span>홈</span>
          </router-link>
          <div @click="onIbackIntroduce"
          :class="`flex items-center justify-center py-6  border-b-2    w-1/4 cursor-pointer  border-gray-100 hover:border-primary hover:text-primary`">
            <span>아이백이란?</span>
          </div>
          <router-link to='/servicecenter' 
          :class="`${router.currentRoute.value.path == '/businessalliance' ? 'text-primary' : ''}   flex items-center justify-center py-6  border-b-2    w-1/4 cursor-pointer border-gray-100 hover:border-primary hover:text-primary`">
            <span>고객센터</span>
          </router-link>
          <!-- <div @click="nonServiceMessage"
          :class="`flex items-center justify-center h-20 pt-2   w-1/6 cursor-pointer border-b-4 border-gray-100 hover:border-primary hover:text-primary`">
            <span>고객센터</span>
          </div> -->
          </div>
        </div>
      </div>
    </div>
<!-- 1 -->
    <!-- main section -->
    <div class=" md:mt-20 mb-20 md:mb-0 relative">
        <router-view @open-modal="showCongratulationsBypdf = true"></router-view>
    </div>

    <!--bottom mobile menu -->
    <div class="  fixed flex  text-center items-center  md:hidden border-t-2 justify-center border-gray-100 mt-20 bottom-0 w-full bg-white text-gray-400 z-30">
      <!-- <div class="flex items-center justify-center text-center text-sm md:hidden"> -->
        <router-link to='/' 
        :class="` w-1/4 py-3 flex flex-col space-y-1  ${router.currentRoute.value.path == '/' ? 'text-primary' : ''} cursor-pointer hover:text-primary`">
          <i class="fas fa-home text-xl"></i>
          <span class="text-base">홈</span>
        </router-link>
        <div  @click="onIbackIntroduce" @mouseover="changeImage = true" @mouseout="changeImage = false" 
        :class="` w-1/4 py-3 flex flex-col  items-center mt-1  space-y-1.5 cursor-pointer hover:text-primary`">
          <img :src="`${changeImage ? '/iback_logo_navbar_color.png' : '/iback_logo_navbar.png'}`" :class="`${changeImage ? 'w-6 h-6' : 'w-6 h-6 '}`" alt="">
          <span class="text-base">아이백이란?</span>
        </div>  
        <router-link to='/servicecenter' 
        :class="` w-1/4 py-3 flex flex-col space-y-1  ${router.currentRoute.value.path == '/servicecenter' ? 'text-primary' : ''}  cursor-pointer hover:text-primary`">
          <i class="fas fa-desktop text-xl"></i>
          <span class="text-base">고객센터</span>
        </router-link>  
        <router-link to="/myinfo" v-if="currentUser"
        :class="` w-1/4 py-3 flex flex-col space-y-1 cursor-pointer ${router.currentRoute.value.path == '/myinfo' ? 'text-primary' : ''} `">
          <i class="fas fa-user text-xl"></i>
          <span class="text-base">내정보</span>
        </router-link>   
        <router-link to="/login" v-if="!currentUser"
        :class="` w-1/4 py-3 flex flex-col space-y-1 cursor-pointer hover:text-primary`">
          <i class="fas fa-user text-xl"></i>
          <span class="text-base">내정보</span>
        </router-link>    
      <!-- </div> -->
    </div>

    <!-- side toggle menu -->
    <div v-if="currentUser" :class="`${sideToggleMenu ? 'md:w-2/5 w-full' : 'w-0'} fixed right-0 bg-white  h-full  z-50 transition-all`">
      <i @click="sideToggleMenu = false" class="fas fa-times px-4 py-3 hover:bg-gray-100 rounded-full text-primary"></i>
      <div v-if="sideToggleMenu" class=" flex flex-col">
        <div class="flex justify-center">
          <img class="w-24 h-24 border-4 border-white rounded-full "
          :src="currentUser.profile_image_url" alt="">
        </div>
        <div class="text-center text-xl mt-3">{{currentUser.nickname}}</div>
        <div class="text-center mt-2">
          <button @click="showProfileEditModal = true" class=" text-primary hover:text-dark">프로필 수정</button>
        </div>

        <div class="flex flex-col mt-10">
            <!-- <button  @click="nonServiceMessage" class="py-5 flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
              나의 체크리스트 <i class="fas fa-angle-right text-gray-400 "></i></button> -->
            <router-link to="/notice"  @click="sideToggleMenu = false" class="py-5 flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
              공지사항 <i class="fas fa-angle-right text-gray-400 "></i></router-link>
            <router-link to="/termsofuse"  @click="sideToggleMenu = false" class="py-5 flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
              서비스 이용약관 <i class="fas fa-angle-right text-gray-400 "></i></router-link>
            <router-link to="/privacypolicy" @click="sideToggleMenu = false" class="py-5 flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
              개인정보 보호정책 <i class="fas fa-angle-right text-gray-400 "></i></router-link>
            <button @click="logout" class="py-4 text-left text-gray-500 w-full md:px-6 px-3">로그아웃</button>
        </div>
      </div>
    </div>
    <ProfileEditModal v-if="showProfileEditModal" @close-modal="showProfileEditModal = false"/>
    <CongratulationsModalByPdf v-if="showCongratulationsByPdf" @close-Modal="showCongratulationsByPdf = false"/>

  </div>  



</template>

<script>
  // Channel Plugin Scripts
  (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": import.meta.env.VITE_CHANNEL_PLUGIN_KEY
  });


import ProfileEditModal from '../components/ProfileEditModal.vue'
import {ref, onBeforeMount, computed} from 'vue'
import router from '../router'
import store from '../store'
import {USER_COLLECTION, auth} from '../firebase'
import LoadingModal from '../components/LoadingModal.vue'
import CongratulationsModalByPdf from '../components/CongratulationsModalByPdf.vue'

export default {

    components: {
      ProfileEditModal,
      LoadingModal,
      CongratulationsModalByPdf,

    },
    setup() {
        const changeImage = ref(false)
        const nonPage = ref(false)
        const showCongratulationsByPdf = ref(false)
        const showProfileEditModal = ref(false)
        const sideToggleMenu = ref(false)
        const routes = ref([])
        const currentUser = computed(() => store.state.user)
        
        const nonServiceMessage =() => {
          alert('현재 서비스 개발중 입니다. 문의는 우측 하단 아이콘을 눌러주세요.')
        }

        const onIbackIntroduce = () => {
          window.open('https://bigwavvv.notion.site/Bigwavv-3faaf9ea2d694c209e4f4ccfe0922698')
        } 
        

        // runs after firebase is initialized
        // auth.onAuthStateChanged(function(user) {
        //     if (user) {
        //       console.log('사용자 true', user);
        //       // isLoggedIn.value = true // if we have a user
        //     } else {
        //       console.log('사용자 false');
        //       // isLoggedIn.value = false // if we do not
        //     }
        // })


        const logout = async () => {
          // if (Kakao.Auth.getAccessToken()) {
          //   Kakao.Auth.logout(function() {
          //   store.commit("SET_USER", null)
          //   router.replace('/login')
          //   console.log('logout success by kakao')
          //   });
          // } else {
            store.commit("SET_USER", null)
            auth.signOut();
            router.replace('/login')
            console.log('logout success')
          // }
        }
        

        onBeforeMount(()  =>  {
            if(currentUser.value === null) {
                router.push('/login')
            }
            // console.log(store.state.user)
            //라우터에 등록한 라우트 가져오기
            // routes.value = router.options.routes
            // 라우터에 등록한 라우트중 ismenu가 true인 것만 가져오기
            routes.value = router.options.routes.filter((routes) => routes.meta.isMenu == true)
            setCurrentUser()
          })

          const setCurrentUser = async () => {
                try { 
                  if(currentUser){
                  const doc = await USER_COLLECTION.doc(currentUser.value.uid).get()
                  store.commit('SET_USER', doc.data())
                  }
                } catch (e) {
                  console.log(`firebase users data error:${e}`)
                }   
          }

        return {
            sideToggleMenu, router, routes, currentUser, logout, showProfileEditModal, onIbackIntroduce, nonServiceMessage, showCongratulationsByPdf, nonPage, changeImage,
        }
    }
}
</script>

<style>

</style>