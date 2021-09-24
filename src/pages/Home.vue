<template>
    <!-- main section -->
    <div class="">
        <!-- <img id="image-height" class=" h-auto w-full object-cover"
        src="http://picsum.photos/id/119/2000/1000"> -->
        <img id="image-height" class="h-auto w-full object-cover opacity-40"
        src="/iback_main_image.png">
    </div>
<!-- 1 -->
    <!-- main text -->
    <div class=" absolute top-10 md:top-16  flex text-center flex-col items-start md:items-center w-full px-4">
        <div class="mb-6  md:text-5xl text-3xl md:mb-14  font-semibold w-full">
            <div class="">죽음은</div>
            <div class=""><span class=" text-light">'삶에 대한 이야기'</span>입니다</div>
        </div>
        <div class=" md:text-3xl text-xl mb-6 md:mb-10  w-full">
            <div><span class="text-light">죽음 연관어 1위</span>가 뭘까요?</div>
            <div>아이러니하게도 '삶'입니다.</div>
        </div>
        <div class=" md:text-3xl  text-xl mb-6 md:mb-10  w-full">
            <div>좋은 죽음이란</div>
            <div>마지막 삶에대한</div>
            <div>주도권을 갖는 것 입니다.</div>
        </div>
        <div class=" md:text-3xl text-xl mb-10 md:mb-14   w-full">
            <div>아이백은 삶의 마침표를</div>
            <div>미리 정리해보는 공간입니다.</div>
        </div>

        <!-- main button -->
        <div class="flex justify-center w-full">
        <button @click="goWellDyingChecklist" class="text-white text-2xl border font-semibold border-primary bg-primary py-6 px-20 rounded-2xl shadow-2xl">시작하기</button>
        </div>

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