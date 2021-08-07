<template>
    <!-- main section -->
    <div class="pt-20">
        <img id="image-height" class=" h-auto w-full object-cover"
        src="http://picsum.photos/id/119/2000/1000">
    </div>

    <!-- main text -->
    <div class="fixed  lg:bottom-48 sm:bottom-60 bottom-32 flex flex-col items-center w-full">
        <div class="mb-10 lg:text-4xl sm:text-3xl text-2xl">
            <div class="">죽음을 잘 준비하고 싶으신가요?</div>
            <div class="">아이백이 가이드가 되어 드릴게요.</div>
        </div>
        <div class=" lg:text-2xl sm:text-xl text-xs mb-10">매년 120만 명의 사람들이 죽음과 슬픔을 치유하기 위해 우리와 함께해요</div>

        <!-- main button -->
        <button @click="showOpenOrCloseModal = true" class="text-white text-xl border border-primary bg-primary py-6 px-6 rounded-2xl shadow-2xl hover:bg-dark">무료 계획 세워보기!</button>

        <!-- modal -->
        <SelectionChecklistOrWillModal
        @close-modal="showOpenOrCloseModal = false"
        v-if="showOpenOrCloseModal"/>
        
    </div>
</template>

<script>
import {ref} from 'vue'
import SelectionChecklistOrWillModal from '../components/SelectionChecklistOrWillModal.vue'

export default {

components: {
    SelectionChecklistOrWillModal
},
setup() {
    const showOpenOrCloseModal = ref(false)

    return {
        showOpenOrCloseModal,
    }
}



}
</script>

<style>

</style>