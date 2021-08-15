<template>
    <!-- main section -->
    <div class="pt-20">
        <!-- <img id="image-height" class=" h-auto w-full object-cover"
        src="http://picsum.photos/id/119/2000/1000"> -->
        <img id="image-height" class=" h-auto w-full object-cover"
        src="/flower01.png">
    </div>
<!-- 1 -->
    <!-- main text -->
    <div class="fixed  lg:bottom-48 sm:bottom-60  bottom-28 flex flex-col items-center w-full">
        <div class="mb-5 lg:text-4xl sm:text-3xl text-2xl">
            <div class="">죽음을 잘 준비하고 싶으신가요?</div>
            <div class="">아이백이 가이드가 되어 드릴게요.</div>
        </div>
        <div class=" lg:text-2xl text-center sm:text-xl text-xs mb-6">
            <div>따뜻하고 평화로운 삶의 마무리,</div>
            <div> 아이백과 함께 유언장 작성/버킷리스트 완성하세요.</div>
        </div>

        <!-- main button -->
        <button @click="showOpenOrCloseModal = true" class="text-white text-2xl border font-bold border-primary bg-primary py-6 px-6 rounded-2xl shadow-2xl hover:bg-dark">무료 계획 세워보기!</button>

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