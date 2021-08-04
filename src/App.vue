<template>
  <div class="flex flex-col h-screen">
    <!-- header-section -->
    <div class="bg-white pl-10 pr-10 fixed w-full border-b-4 border-gray-100 top-0 z-40">
      
      <!-- top banner -->
      <div class=" relative">
        <!-- login -->
        <div class="flex items-center justify-center" >
          <div class="absolute right-0 top-4 mt-0.5 ">
            <div @click="sideToggleMenu = true" class="flex items-center space-x-1 hover:text-primary text-gray-500 hover:opacity-80 cursor-pointer z-50">
              <img 
              src="/profile.jpeg" 
              class="w-10 y-10 rounded-full">
              <i class="fas fa-sort-down text-xl"></i>
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
          <i class="fab fa-node-js text-4xl"></i>
          <span>12jobs</span>
        </div>
        <!-- 메뉴 -->
        <div class=" hidden lg:inline-block w-4/5 text-gray-500 ">
          <div class="flex">
          <div class=" flex items-center justify-center h-20 pt-2   w-1/6 cursor-pointer border-b-4 border-gray-100 hover:border-primary hover:text-primary">
            <span>홈</span>
          </div>
          <div class=" flex items-center justify-center h-20 pt-2   w-1/6 cursor-pointer border-b-4 border-gray-100 hover:border-primary hover:text-primary">
            <span>구직자</span>
          </div>
          <div class=" flex items-center justify-center h-20 pt-2   w-1/6 cursor-pointer border-b-4 border-gray-100 hover:border-primary hover:text-primary">
            <span>구인자</span>
          </div>
          <div class=" flex items-center justify-center h-20 pt-2   w-1/6 cursor-pointer border-b-4 border-gray-100 hover:border-primary hover:text-primary">
            <span>협력업체신청</span>
          </div>
          </div>
        </div>
      </div>
    </div>

    




   

    <!--bottom mobile menu -->
    <div class=" fixed border-t-4 border-gray-100 bottom-0 w-full bg-white text-gray-500 z-40">
      <div class="flex items-center justify-center text-center text-sm lg:hidden py-3">
        <div class=" w-1/4 py-2 flex flex-col space-y-1 cursor-pointer hover:text-primary">
          <i class="fas fa-home"></i>
          <span>홈</span>
        </div>
        <div class=" w-1/4 py-2 flex flex-col space-y-1 cursor-pointer hover:text-primary">
          <i class="fas fa-hard-hat"></i>
          <span>구인자</span>
        </div>
        <div class=" w-1/4 py-2 flex flex-col space-y-1 cursor-pointer hover:text-primary">
          <i class="fas fa-truck-pickup"></i>
          <span>구직자</span>
        </div>
        <div class=" w-1/4 py-2 flex flex-col space-y-1 cursor-pointer hover:text-primary">
          <i class="fas fa-address-card"></i>
          <span>협력업체신청</span>
        </div>
      </div>
    </div>

    <!-- side toggle menu -->
    <div :class="`${sideToggleMenu ? 'md:w-1/5 w-3/5' : 'w-0'} fixed right-0 bg-white  h-full  z-50 transition-all`">
    <i @click="sideToggleMenu = false" class="fas fa-times px-4 py-3 hover:bg-gray-100 rounded-full"></i>
    </div>
  </div>  
 

</template>

<script>
import {ref} from 'vue'

export default {

name: 'Autoplay',

components: {
  
},

setup() {
  const sideToggleMenu = ref(false)



  return {
    sideToggleMenu
  }
}


}
</script>

<style>

</style>