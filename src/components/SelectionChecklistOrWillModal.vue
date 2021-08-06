<template>
<div @click="$emit('close-modal')" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class=" items-center justify-center min-h-screen pt-4 px-4 pb-24 text-center block p-0">
    <div class="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">

    </div>

    <div class="md:mt-40 mt-20 text-transparent">hidden</div>

    <div @click.stop class=" relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-4/5">


            
            <div class=" py-5 px-5 pt-10   lg:flex flex-none w-full lg:space-x-5">
                <router-link to="/Checklist" class="sm:bg-checklist-pc px-3 rounded-2xl bg-checklist h-60 sm:h-80   mb-5 lg:mb-0  w-full lg:w-1/2 flex-col flex items-center space-y-3 pt-4 sm:pt-14 hover:opacity-70">
                    <div class=" font-semibold text-2xl sm:text-4xl">체크리스트 작성</div>
                    <div class=" sm:text-lg flex flex-col items-center space-y-1 sm:space-y-4">
                        <div>어떻게 삶을 정리하고 싶으신가요?</div>
                        <div>자산관리, 버킷리스트, 소셜미디어 관리 등</div>
                        <div>내 인생의 모든 정보와 기록을 한 번에 정리할 수 있어요</div>
                    </div>
                </router-link>
                <router-link to="/Will" class="sm:bg-will-pc rounded-2xl bg-will h-60 sm:h-80 w-full lg:w-1/2 flex justify-center pt-4 sm:pt-14 hover:opacity-70">
                    <div class=" text-2xl font-semibold sm:text-4xl">유언장 작성</div>
                </router-link>
            </div>

        <!-- 취소 버튼 -->
        <div class=" absolute right-1 top-1">
            <i class="fas fa-times text-gray-400 py-3 px-4 hover:bg-gray-100 rounded-full" @click="$emit('close-modal')"></i>
        </div>
    </div>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>