<template>
    <div @click="$emit('close-modal')" class="fixed z-10  inset-0 bg-gray-500 opacity-90 transition-opacity" aria-hidden="true">

    </div>

<!-- ss -->
    <div @click.stop class="fixed top-0  mt-24 transition-all w-full z-30  h-screen  overflow-y-auto ">
            
            <div class=" py-5 px-5 pt-10 lg:pt-24 lg:flex flex-row w-full lg:space-x-5  mb-72 mt-3 ">

                <router-link to="/checklist" class=" font-semibold sm:bg-checklist-pc px-3 rounded-2xl bg-checklist w-full lg:w-1/2 mb-5 lg:mb-0 flex-col flex items-center space-y-3 pt-10 pb-10 sm:pb-14 sm:pt-14">
                    <div class=" font-semibold text-4xl pb-5 sm:text-4xl">웰다잉 준비 메뉴얼 리스트</div>
                    <div class="  text-lg  flex flex-col items-center space-y-1 space-y-1">
                        <div>인생의 모든 기록을 한 곳에 정리해보세요</div>
                        <div>장례식 준비, 상속 설계, 소셜 미디어, 유지/유산 등</div>
                        <div>삶을 잘 마무리하기 위해 필요한 정보를 남겨주세요</div>
                    </div>
                </router-link>
                <router-link to="/will" class=" font-semibold sm:bg-will-pc px-3 rounded-2xl bg-will w-full lg:w-1/2 flex-col flex items-center space-y-3 pt-10 pb-10 sm:pb-14 sm:pt-14 ">
                    <div class=" font-semibold text-4xl pb-5 sm:text-4xl">유언장 작성</div>
                    <div class=" text-lg  flex flex-col items-center space-y-1 space-y-1 px-6">
                        <div>만약 내일이 당신의 삶의 마지막 날이라면?</div>
                        <div>유언은 남은 생을 위한 선물이자, 남은 이들을 위한 배려입니다.</div>
                        <div>미리 준비할수록 절약되는 상속세, 가족들에게 남기고 싶은 말과 평화로운 재산 분할, 사회를 위한 기부.</div>
                        <div>아이백의 녹음 유언장 기능을 통해 손쉽게 유언장을 남겨보세요.</div>
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