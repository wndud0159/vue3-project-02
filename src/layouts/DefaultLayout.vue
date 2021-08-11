<template>
 <div class="flex flex-col">
    <!-- header-section -->
    <div class="bg-white pl-10 pr-10 fixed w-full border-b-4 border-gray-100 top-0 z-30">
      
      <!-- top banner -->
      <div class=" relative">
        <!-- login -->
        <div class="flex items-center justify-center" >
          <div class="absolute right-0 top-4 mt-0.5 ">
            <div v-if="currentUser" @click="sideToggleMenu = true" class="flex items-center space-x-1 hover:text-primary text-gray-500 hover:opacity-80 cursor-pointer z-50">
              <img 
              :src="currentUser.profile_image_url" 
              class="w-10 y-10 rounded-full">
              <i class="fas fa-sort-down text-xl text-gray-400"></i>
            </div>
          </div>
          <router-link v-if="!currentUser"  to="/login" class="absolute text-lg right-0  top-7 text-gray-500 hover:text-primary cursor-pointer pb-2" >
            <span>로그인</span>
          </router-link>
        </div>
      </div>

      <!--top nav bar -->
    <div class="flex items-center h-20 -mb-1">
        <!-- title  logo-->
        <router-link to="/" class=" font-extrabold text-2xl flex-1 text-primary flex items-center">
          <i class="fas fa-feather-alt text-4xl mr-1"></i>
          <span>iback</span>
        </router-link>
        <!--tmenu -->
        <div class=" hidden lg:inline-block w-4/5 text-gray-500 text-lg">
          <div class="flex">

          <router-link :to='route.path' 
          v-for="route in routes" :key="route" 
          :class="`${router.currentRoute.value.name == route.name ? 'text-primary' : ''} flex items-center justify-center h-20 pt-2   w-1/6 cursor-pointer border-b-4 border-gray-100 hover:border-primary hover:text-primary`">
            <span>{{route.title}}</span>
          </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- main section -->
        <router-view></router-view>

    <!--bottom mobile menu -->
    <div class="  fixed border-t-4 lg:border-0 border-gray-100 bottom-0 w-full bg-white text-gray-500 z-30">
      <div class="flex items-center justify-center text-center text-sm lg:hidden">
        <router-link :to='route.path' 
        v-for="route in routes" :key="route"
        :class="`${router.currentRoute.value.name == route.name ? 'text-primary' : ''} w-1/4 py-2 flex flex-col space-y-1 cursor-pointer hover:text-primary`">
          <i :class="route.icon"></i>
          <span class="text-base">{{route.title}}</span>
        </router-link>  
      </div>
    </div>

    <!-- side toggle menu -->
    <div :class="`${sideToggleMenu ? 'md:w-2/5 w-3/5' : 'w-0'} fixed right-0 bg-white  h-full  z-50 transition-all`">
      <i @click="sideToggleMenu = false" class="fas fa-times px-4 py-3 hover:bg-gray-100 rounded-full text-gray-400"></i>
      <div class=" flex flex-col">
        <div class="flex justify-center">
          <img v-if="sideToggleMenu" class="w-24 h-24 border-4 border-white rounded-full "
          :src="currentUser.profile_image_url" alt="">
        </div>
        <div class="text-center text-xl mt-3">{{currentUser.nickname}}</div>
        <div class="text-center mt-2">
          <button @click="showProfileEditModal = true" class=" text-primary hover:text-dark">프로필 수정</button>
        </div>

        <div class="flex flex-col mt-10">
          <router-link @click="sideToggleMenu = false" to="/checklist" class="flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
            <button class="py-5 ">체크리스트 작성</button>
            <i class="fas fa-angle-right text-gray-400 "></i>
          </router-link>
          <router-link @click="sideToggleMenu = false" to="/will" class="flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
            <button class="py-5 ">유언장 작성</button>
            <i class="fas fa-angle-right text-gray-400 "></i>
          </router-link>
          <div class="flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
            <button class="py-5 ">서비스 이용약관</button>
            <i class="fas fa-angle-right text-gray-400 "></i>
          </div>
          <div class="flex items-center w-full md:px-6 px-3  justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
            <button class="py-5">개인정보 보호정책</button>
            <i class="fas fa-angle-right text-gray-400 "></i>
          </div>
          <div @click="logoutWithKakao" class="text-gray-500 w-full md:px-6 px-3">
            <button class="py-4">로그아웃</button>
          </div>
        </div>
      </div>
    </div>
    <ProfileEditModal v-if="showProfileEditModal" @close-modal="showProfileEditModal = false"/>
  </div>  



</template>

<script>
import ProfileEditModal from '../components/ProfileEditModal.vue'
import {ref, onBeforeMount, computed} from 'vue'
import router from '../router'
import store from '../store'
import {USER_COLLECTION} from '../firebase'


export default {

    components: {
      ProfileEditModal,
    },
    setup() {
        const showProfileEditModal = ref(false)
        const sideToggleMenu = ref(false)
        const routes = ref([])
        const currentUser = computed(() => store.state.user)
        


        const logoutWithKakao = async () => {
          if (!Kakao.Auth.getAccessToken()) {
            console.log('Not logged in.');
            return;
          }
          Kakao.Auth.logout(function() {
            // console.log(Kakao.Auth.getAccessToken())
            store.commit("SET_USER", null)
            router.replace('/login')
            console.log('로그아웃 성공')
          });
        }
        

        onBeforeMount(()  =>  {
            // console.log(store.state.user)
            //라우터에 등록한 라우트 가져오기
            // routes.value = router.options.routes
            // 라우터에 등록한 라우트중 ismenu가 true인 것만 가져오기
            routes.value = router.options.routes.filter((routes) => routes.meta.isMenu == true)
            setCurrentUser()
          })

          const setCurrentUser = async () => {
                try { 
                  const doc = await USER_COLLECTION.doc(currentUser.value.uid).get()
                  store.commit('SET_USER', doc.data())
                } catch (e) {
                  console.log(`firebase users data error:${e}`)
                }   
          }

        return {
            sideToggleMenu, router, routes, currentUser, logoutWithKakao, showProfileEditModal
        }
    }
}
</script>

<style>

</style>