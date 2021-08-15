<template>
    <div @click="$emit('close-modal')" class="fixed z-10  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">

    </div>


    <div @click.stop class="fixed top-0  mt-24 transition-all w-full z-30  h-screen  overflow-y-auto ">
            
            <div class=" py-5 px-5 pt-10 lg:pt-24 lg:flex flex-row w-full lg:space-x-5  mb-72 mt-3 ">

                <router-link to="/checklist" class=" sm:bg-checklist-pc px-3 rounded-2xl bg-checklist w-full lg:w-1/2 mb-5 lg:mb-0 flex-col flex items-center space-y-3 pt-10 pb-10 sm:pb-14 sm:pt-14 hover:opacity-70">
                    <div class=" font-semibold text-4xl pb-5 sm:text-4xl">체크리스트 작성</div>
                    <div class=" text-lg  flex flex-col items-center space-y-1 space-y-4">
                        <div>어떻게 삶을 정리하고 싶으신가요?</div>
                        <div>자산관리, 버킷리스트, 소셜미디어 관리 등</div>
                        <div>내 인생의 모든 정보와 기록을 한 번에 정리할 수 있어요</div>
                    </div>
                </router-link>
                <router-link to="/will" class=" sm:bg-will-pc px-3 rounded-2xl bg-will w-full lg:w-1/2 flex-col flex items-center space-y-3 pt-10 pb-10 sm:pb-14 sm:pt-14 hover:opacity-70">
                    <div class=" font-semibold text-4xl pb-5 sm:text-4xl">유언장 작성</div>
                    <div class=" text-lg  flex flex-col items-center space-y-1 space-y-4">
                        <div>어떻게 삶을 정리하고 싶으신가요?</div>
                        <div>자산관리, 버킷리스트, 소셜미디어 관리 등</div>
                        <div>내 인생의 모든 정보와 기록을 한 번에 정리할 수 있어요</div>
                    </div>
                </router-link>
            </div>

        <!-- 취소 버튼 -->
        <div class=" absolute right-0 top-0 z-40 lg:right-5 lg:top-1">
            <i class="fas fa-times text-light py-3 px-4 hover:bg-gray-500 rounded-full" @click="$emit('close-modal')"></i>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>