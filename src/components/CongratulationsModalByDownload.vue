<template>
    <div @click="$emit('close-modal')" class="fixed z-40  inset-0 bg-gray-500 opacity-90 transition-opacity" aria-hidden="true">

    </div>

    <div @click.stop class="fixed top-0  mt-0 transition-all w-full z-50  h-screen  overflow-y-auto ">
            
            <div class=" py-5 md:px-96 px-10 pt-10 lg:pt-24 lg:flex flex-row w-full lg:space-x-5  mt-3 ">

                <div class="bg-white flex flex-col w-full items-center space-y-7 relative pb-7  pt-14">
                    <div class="flex flex-col items-center">
                        <div>{{currentUser.username}}님,</div>
                        <div>완성된 유언장을</div>
                        <div> 다운로드 하셨네요!</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div>유언장은 {{currentUser.username}}님의</div>
                        <div>기기에만 저장됩니다.</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div>아이백 서버에는</div>
                        <div>저장되지 않으니 안심하세요.</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div>아이백은 유언장에서 가장 중요한</div>
                        <div>자산정리 서비스 역시 준비 중이에요</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div>조금만 기다려주세요.</div>
                        <div class="text-light">(자산정리 서비스 내년 상반기 초 오픈 예정)</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div>다운로드가 안된다면,</div>
                        <div>다른 브라우저를 이용해주세요.</div>
                    </div>
                    <div class="flex justify-center">
                        <button @click="$emit('close-modal')" class="text-white bg-light hover:bg-primary py-2 rounded-lg px-20">확인</button>
                    </div>
                    <div class=" absolute -top-16 bg-light py-4 px-4 rounded-full">
                        <img src="/congratulations.png" class="h-12 w-12" alt="">
                    </div>
                </div>
            </div>

       
    </div>

</template>

<script>
import {ref, computed} from 'vue'
import store from '../store'
export default {
    emits: ['close-modal'],
    setup() {
        const currentUser = computed(() => store.state.user)

        return {
            currentUser,
        }
    }

}
</script>

<style>

</style>