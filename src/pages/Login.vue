<template>
  
  <div class="flex flex-col mt-44 md:mt-80 lg:mt-56 items-center justify-center mr-10 ml-10 ">
    <div class=" mb-10 flex flex-col w-full md:w-1/2 items-start">
      <div class="text-4xl font-bold text-primary mb-4">로그인</div>
      <div class="text-gray-500">아이백에 오신 걸 환영합니다. 기존에 사용하시는 계정으로 간편하게 로그인하세요.</div>
    </div>
    <div class="flex bg-kakao items-center space-x-1 w-full md:w-1/2 justify-center  py-2 rounded-md  shadow mb-3 hover:opacity-30">
      <i class="fas fa-comment px-px"></i>
      <button class="">카카오로 로그인</button>
    </div>
    <div class="flex items-center space-x-1 bg-naver w-full md:w-1/2 justify-center  py-2 rounded-md shadow mb-3 hover:opacity-30">
      <img src="/naver.ico" class="w-5 h-5" alt="">
      <button class="text-white">네이버로 로그인</button>
    </div>
    <div class=" bg-white flex items-center space-x-1 w-full md:w-1/2 justify-center    py-2 rounded-md shadow hover:opacity-30">
      <img src="/google.ico" class="w-5 h-5" alt="">
      <button class="">구글로 로그인</button>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>