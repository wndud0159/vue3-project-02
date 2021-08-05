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
        <!-- 메뉴 -->
        <div class=" hidden lg:inline-block w-4/5 text-gray-500 text-lg">
          <div class="flex">
          <div class=" flex items-center justify-center h-20 pt-2   w-1/6 cursor-pointer border-b-4 border-gray-100 hover:border-primary hover:text-primary">
            <span>홈</span>
          </div>
          <div class=" flex items-center justify-center h-20 pt-2   w-1/6 cursor-pointer border-b-4 border-gray-100 hover:border-primary hover:text-primary">
            <span>아이백이란?</span>
          </div>
          <div class=" flex items-center justify-center h-20 pt-2   w-1/6 cursor-pointer border-b-4 border-gray-100 hover:border-primary hover:text-primary">
            <span>사업제휴</span>
          </div>
          <div class=" flex items-center justify-center h-20 pt-2   w-1/6 cursor-pointer border-b-4 border-gray-100 hover:border-primary hover:text-primary">
            <span>고객센터</span>
          </div>
          </div>
        </div>
      </div>
    </div>

    

    <!-- main section -->
      <div>
        <img id="image-height" class="mt-20 h-auto w-full object-cover"
        src="http://picsum.photos/id/119/2000/1000">
      </div>

    <!-- main text -->
    <div class="fixed  lg:bottom-48 sm:bottom-60 bottom-32 flex flex-col items-center w-full">
      <div class="mb-10 lg:text-4xl sm:text-3xl text-2xl">
        <div class="">죽음을 잘 준비하고 싶으신가요?</div>
        <div class="">아이백이 가이드가 되어 드릴게요.</div>
      </div>
      <div class=" lg:text-2xl sm:text-xl text-xs mb-10">매년 120만 명의 사람들이 죽음과 슬픔을 치유하기 위해 우리와 함께해요</div>

      <button class="text-white text-xl border border-primary bg-primary py-6 px-6 rounded-2xl shadow-2xl hover:bg-dark"
      >무료 계획 세워보기!</button>
    </div>

    <!-- main button -->
   

    <!--bottom mobile menu -->
    <div class="  fixed border-t-4 lg:border-0 border-gray-100 bottom-0 w-full bg-white text-gray-500 z-40">
      <div class="flex items-center justify-center text-center text-sm lg:hidden py-3">
        <div class=" w-1/4 py-2 flex flex-col space-y-1 cursor-pointer hover:text-primary">
          <i class="fas fa-home "></i>
          <span class="text-lg">홈</span>
        </div>
        <div class=" w-1/4 py-2 flex flex-col space-y-1 cursor-pointer hover:text-primary">
          <i class="fas fa-book "></i>
          <span class="text-lg">아이백이란?</span>
        </div>
        <div class=" w-1/4 py-2 flex flex-col space-y-1 cursor-pointer hover:text-primary">
          <i class="fas fa-envelope "></i>
          <span class="text-lg">사업제휴</span>
        </div>
        <div class=" w-1/4 py-2 flex flex-col space-y-1 cursor-pointer hover:text-primary">
          <i class="fas fa-chalkboard "></i>
          <span class="text-lg">고객센터</span>
        </div>
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
            <button class="py-5 ">무료 계획 세우기</button>
            <i class="fas fa-angle-right text-gray-400 "></i>
          </div>
          <div class="flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
            <button class="py-5 ">무료 유언장 작성</button>
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