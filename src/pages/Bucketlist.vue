<template>
<div class="flex flex-col items-center px-3 mb-8">
     <!-- image section by maru -->
    <div class="w-full flex flex-col justify-center items-center rounded-sm pt-8 pb-8">
        <!-- image section -->
        <img class="object-cover w-40 h-40 rounded-full" src="/maru.png" alt="">
        <!-- question section -->
        <div v-if="bucketlist.length" class="relative text-white flex flex-col items-center text-2xl font-semibold w-full md:w-96">
            <img src="/speech_bubble02.png" :class="`' -mt-4 h-60 `" alt="">   
            <div v-if="step1" class="absolute top-16 flex flex-col items-center ">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div class="highlight">세상과 이별하기 전</div>
                    <div><span class="highlight">꼭 하고 싶은 것</span> 들을 떠올려보세요.</div>
                    <div>마루가 옆에서 당신의</div>
                    <div>버킷리스트 친구가 될게요.</div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 :</div>
                    <div>스위스에서 가족과 패러글라이딩을 하고 싶어요.</div>
                    <div>동해 바다에서 남편과 같이 석양을 보고 싶어요.</div>
                    <div>친구들과 함께 고아원 봉사활동을 하고 싶어요.</div>
                    <div>소설책을 출간하고 싶어요.</div>
                </div>
            </div>
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1 && bucketlist.length" class="w-full mt-44">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="bucketlist[0].answer_box" class="w-8 h-8" type="radio" value='네'><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="bucketlist[0].answer_box" class="w-8 h-8" type="radio" value='아니요'><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <div class="flex justify-end md:justify-center w-full text-2xl space-x-3 mb-1">
            <button @click="onAddBucketListBox" class="bg-primary text-white px-6 cursor-pointer py-1 rounded-md">추가</button>
            <button @click="onDeleteBucketListBox" class="border-2 border-primary px-5 cursor-pointer rounded-md">삭제</button>
        </div>
        <div v-for="(item, index) in bucketlist[0].answer_box" :key="index" class="text-xl mb-1 flex items-center w-full justify-center">
            <div class=" px-2 md:w-96  space-x-2 py-3 w-full">
                <span>{{index+1}}. 나는</span>
                <input v-model="item.box_who" class="w-20 text-center border-b border-primary outline-none cursor-pointer " placeholder="누구와" type="text">
                <input v-model="item.box_when" class="w-40 text-center border-b border-primary outline-none cursor-pointer " placeholder="언제" type="text">
                <input v-model="item.box_what" class="w-60 text-center border-b border-primary outline-none cursor-pointer " placeholder="무엇을" type="text">
                <span>싶어요</span>
            </div>
        </div>
    </div>

    
    <!-- button section -->
    <div v-if="bucketlist.length" class="flex  justify-center w-full mt-7">
        <div v-if="step1" class="w-full flex flex-col items-center">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!bucketlist[0].answer_text && !bucketlist[0].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>    
            <button v-if="bucketlist[0].answer_text || bucketlist[0].answer_box.length" @click="onSaveStep1" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep1" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div> 
    </div>
</div>
</template>

<script>
import {ref, onBeforeMount, computed} from 'vue'
import {useRouter} from 'vue-router'
import store from '../store'
import {CHECKLISTS_COLLECTION} from '../firebase'
export default {
    setup() {


        const currentUser = computed(() => store.state.user)
        const router = useRouter()

        const step1 = ref(true)

        const bucketlist = ref([])
              

        onBeforeMount(async() => {
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                    .then(async(querySnapshot) => {
                            const documentSnapshot = querySnapshot.docs[0]
                            bucketlist.value = await documentSnapshot.data().bucketlist
                    })
            } catch(error) {
                console.log('not found firebase db checklists collection by catch', error.message)
            }
            window.scrollTo(0,0)
        })


        const onAddBucketListBox = () => {
            if(bucketlist.value[0].answer_box.length < 10) {
                bucketlist.value[0].answer_box.push({
                    box_when: [null],
                    box_what: [null],
                    box_who: [null],
                })
            }
        }

        const onDeleteBucketListBox = () => {
            if(bucketlist.value[0].answer_box.length > 1) {
                bucketlist.value[0].answer_box.pop()
            } else {
                bucketlist.value[0].answer_box.pop()
                bucketlist.value[0].answer_box.push({
                    box_when: [null],
                    box_what: [null],
                    box_who: [null],
                })
            }
        }



        const onSaveStep1 = async () => {
            bucketlist.value[0].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    if(querySnapshot.docs.length > 0) {
                        querySnapshot.docs[0].ref.update({
                            bucketlist: bucketlist.value,
                            create_at: Date.now(),
                        })                 
                    } else {
                        console.log('not found firebase db checklists collection')
                        onCreateChecklists()
                    }
                })
            } catch(error) {
                console.log('bucketlist step1 error : ', error.message)
            }
            router.push('/welldyingchecklist')
        }

        const onPrevStep1 = () => {
            router.push('/welldyingchecklist')
        }

        const onLaterStep1 = () => {
            router.push('/welldyingchecklist')
        }
        

        return {
            step1,
            


            onSaveStep1,
           

            onPrevStep1,
            

            onLaterStep1,
            
            onAddBucketListBox,
            onDeleteBucketListBox,


            bucketlist,
            
        }

    }


}
</script>

<style>

</style>