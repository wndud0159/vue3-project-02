<template>
    <!-- main section -->
    <div class="pt-20">
        <!-- <img id="image-height" class=" h-auto w-full object-cover"
        src="http://picsum.photos/id/119/2000/1000"> -->
        <img id="image-height" class=" h-auto w-full object-cover opacity-50"
        src="/flower01.png">
    </div>
<!-- 1 -->
    <!-- main text -->
    <div class="fixed  lg:bottom-48 sm:bottom-60  bottom-24 flex flex-col items-center w-full">
        <div class="mb-5 lg:text-4xl sm:text-3xl text-2xl">
            <div class="">죽음을 잘 준비하고 싶으신가요?</div>
            <div class="">아이백이 가이드가 되어 드릴게요.</div>
        </div>
        <div class=" lg:text-2xl text-center sm:text-xl text-xs mb-6">
            <div>당신의 마지막 순간이 아름답도록, 아이백이 동행이 될게요.</div>
            <div class="mb-2">따뜻하고 평화로운 삶의 마무리, 아이백과 함께 유언장 작성/버킷리스트 완성하세요</div>
            <div>그렇게 긴 시간 동안에 우리는 단 한번 죽는다  -몰리에르-</div>
        </div>

        <!-- main button -->
        <button @click="goWellDyingChecklist" class="text-white text-2xl border font-bold border-primary bg-primary py-6 px-6 rounded-2xl shadow-2xl hover:bg-dark">무료 계획 세워보기!</button>

        <!-- modal -->
        <SelectionChecklistOrWillModal
        @close-modal="showOpenOrCloseModal = false"
        v-if="showOpenOrCloseModal"/>
        
    </div>
</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import SelectionChecklistOrWillModal from '../components/SelectionChecklistOrWillModal.vue'

export default {

components: {
    SelectionChecklistOrWillModal
},
setup() {

    const router = useRouter()
    const showOpenOrCloseModal = ref(false)
    
    const goWellDyingChecklist = () => {
        router.push("/welldyingchecklist")
    }

    return {
        showOpenOrCloseModal, goWellDyingChecklist,
    }
}



}
</script>

<style>

</style>