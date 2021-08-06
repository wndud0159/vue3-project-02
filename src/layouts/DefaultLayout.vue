<template>
 <div class="flex flex-col h-screen">
    <!-- header-section -->
    <div class="bg-white pl-10 pr-10 fixed w-full border-b-4 border-gray-100 top-0 z-30">
      
      <!-- top banner -->
      <div class=" relative">
        <!-- login -->
        <div class="flex items-center justify-center" >
          <div class="absolute right-0 top-4 mt-0.5 ">
            <div @click="sideToggleMenu = true" class="flex items-center space-x-1 hover:text-primary text-gray-500 hover:opacity-80 cursor-pointer z-50">
              <img 
              src="/profile.jpeg" 
              class="w-10 y-10 rounded-full">
              <i class="fas fa-sort-down text-xl text-gray-400"></i>
            </div>
          </div>
          <div class="absolute right-0 mt-px top-6 text-gray-500 hover:text-primary cursor-pointer hidden pb-2" >
            <span>로그인</span>
          </div>
        </div>
      </div>

      <!--top nav bar -->
    <div class="flex items-center h-20 -mb-1">
        <!-- title  logo-->
        <div class=" font-extrabold text-2xl flex-1 text-primary flex items-center">
          <i class="fas fa-feather-alt text-4xl mr-1"></i>
          <span>iback</span>
        </div>
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
    <div class="flex flex-col h-screen mt-20">
        <router-view></router-view>
    </div>

    <!--bottom mobile menu -->
    <div class="  fixed border-t-4 lg:border-0 border-gray-100 bottom-0 w-full bg-white text-gray-500 z-30">
      <div class="flex items-center justify-center text-center text-sm lg:hidden">
        <router-link :to='route.path' 
        v-for="route in routes" :key="route"
        :class="`${router.currentRoute.value.name == route.name ? 'text-primary' : ''} w-1/4 py-3 flex flex-col space-y-1 cursor-pointer hover:text-primary`">
          <i :class="route.icon"></i>
          <span class="text-lg">{{route.title}}</span>
        </router-link>  
      </div>
    </div>

    <!-- side toggle menu -->
    <div :class="`${sideToggleMenu ? 'md:w-2/5 w-3/5' : 'w-0'} fixed right-0 bg-white  h-full  z-50 transition-all`">
      <i @click="sideToggleMenu = false" class="fas fa-times px-4 py-3 hover:bg-gray-100 rounded-full text-gray-400"></i>
      <div class=" flex flex-col">
        <div class="flex justify-center">
          <img class="w-24 h-24 border-4 border-white rounded-full "
          src="/profile.jpeg" alt="">
        </div>
        <div class="text-center text-xl mt-3">홍길동</div>
        <div class="text-center mt-2">
          <button class=" text-primary hover:text-dark">프로필 수정</button>
        </div>

        <div class="flex flex-col mt-10">
          <div class="flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
            <button class="py-5 ">체크리스트 작성</button>
            <i class="fas fa-angle-right text-gray-400 "></i>
          </div>
          <div class="flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
            <button class="py-5 ">유언장 작성</button>
            <i class="fas fa-angle-right text-gray-400 "></i>
          </div>
          <div class="flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
            <button class="py-5 ">서비스 이용약관</button>
            <i class="fas fa-angle-right text-gray-400 "></i>
          </div>
          <div class="flex items-center w-full md:px-6 px-3  justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
            <button class="py-5">개인정보 보호정책</button>
            <i class="fas fa-angle-right text-gray-400 "></i>
          </div>
          <div class="text-gray-500 w-full md:px-6 px-3">
            <button class="py-4">로그아웃</button>
          </div>
        </div>
      </div>
    </div>
  </div>  



</template>

<script>
import {ref, onBeforeMount} from 'vue'
import router from '../router'

export default {

    components: {
    
    },
    setup() {
        const sideToggleMenu = ref(false)
        const routes = ref([])

        

        onBeforeMount(() => {
            //라우터에 등록한 라우트 가져오기
            // routes.value = router.options.routes
            // 라우터에 등록한 라우트중 ismenu가 true인 것만 가져오기
            routes.value = router.options.routes.filter((routes) => routes.meta.isMenu == true)
            
            console.log(router.currentRoute.value, router.currentRoute.value)
        })

        return {
            sideToggleMenu, router, routes
        }
    }
}
</script>

<style>

</style>