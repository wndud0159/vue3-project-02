<template>
<div class="flex flex-col h-screen overflow-y-scroll items-center pt-24 pb-48 md:pb-10 px-3 md:px-20">
    <!-- image section by maru -->
    <div class="mb-10">
            <img class="object-cover border-4 border-gray-100 w-24 h-24 rounded-full" src="/maru_beta_image.png" alt="">
    </div>
    <!-- question section -->
    <div v-if="funeral.length" class=" mb-10 text-2xl md:text-4xl font-bold text-gray-700 w-7/8 md:w-4/6">
        <div v-if="step1" class="flex flex-col items-center space-y-1">
            <div>1. {{funeral[0].question}}</div>
        </div>
        <div v-if="step2" class="flex flex-col items-center space-y-1">
            <div>2. {{funeral[1].question}}</div>
        </div>
        <div v-if="step3" class="flex flex-col items-center space-y-1">
            <div>3. {{funeral[2].question}}</div>
        </div>
        <div v-if="step4" class="flex flex-col items-center space-y-1">
            <div>4. {{funeral[3].question}}</div>
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1 && funeral.length" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[0].answer_box" class="w-8 h-8" type="radio" value='네'><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[0].answer_box" class="w-8 h-8" type="radio" value='아니요'><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[0].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[0].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="funeral[0].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    <!-- step2 -->
    <div v-if="step2 && funeral.length" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="네"><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="아니요"><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="저는 장례식장에서 장례식을 진행하고 싶습니다"><span>장례식장</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="저는 집에서 장례식을 진행하고 싶습니다"><span>집</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="저는 종교시설에서 장례식을 진행하고 싶습니다"><span>종교시설</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="기타"><span>기타</span>
            </div>
        </div>
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="funeral[1].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
             rows="4">
            </textarea>
        </div>
    </div>

    <!-- step3 -->
    <div v-if="step3 && funeral.length" class="w-full">
        <!-- radio section -->
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="radio" value='저는 제 장례식이 즐겁게 진행되기를 원해요'><span>즐겁게</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="radio" value='저는 제 장례식이 엄중하게 진행되기를 원해요'><span>엄중하게</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="radio" value='저는 제 장례식이 전통적 방식으로 진행되기를 원해요'><span>전통적 방식으로</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="radio" value='저는 제 장례식이 종교 방식대로 진행되기를 원해요'><span>종교 방식대로</span>
            </div>
        </div>
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <!-- <div class="w-full flex justify-center mb-10">
            <textarea v-model="funeral[2].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div> -->
    </div>

    <!-- step4-->
    <div v-if="step4 && funeral.length" class="w-full">
        <!-- radio section -->
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[3].answer_box" class="w-8 h-8" type="radio" value='저는 매장 방식으로 안장되고 싶습니다'><span>매장</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[3].answer_box" class="w-8 h-8" type="radio" value='저는 화장 방식으로 안장되고 싶습니다'><span>화장</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[3].answer_box" class="w-8 h-8" type="radio" value='저는 수목장 방식으로 안장되고 싶습니다'><span>수목장</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[3].answer_box" class="w-8 h-8" type="radio" value='기타'><span>기타</span>
            </div>
        </div>
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[3].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="funeral[3].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="funeral[3].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    
    <!-- button section -->
    <div v-if="funeral.length" class="flex  justify-center w-full">
        <div v-if="step1" class="">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!funeral[0].answer_text && !funeral[0].answer_box.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>    
            <button v-if="funeral[0].answer_text || funeral[0].answer_box.length" @click="onSaveStep1" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>
            <div>
                <button @click="onLaterStep1" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step2" class=" "> 
            <button @click="onPrevStep2" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!funeral[1].answer_text && !funeral[1].answer_box.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>    
            <button v-if="funeral[1].answer_text || funeral[1].answer_box.length" @click="onSaveStep2" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>
            <div>
                <button @click="onLaterStep2" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
            </div>
        </div>
        <div v-if="step3" class=" ">
            <button @click="onPrevStep3" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!funeral[2].answer_text && !funeral[2].answer_box.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>  
            <button v-if="funeral[2].answer_text || funeral[2].answer_box.length" @click="onSaveStep3" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>  
            <div>
                <button @click="onLaterStep3" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step4" class=" ">
            <button @click="onPrevStep4" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!funeral[3].answer_text && !funeral[3].answer_box.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>  
            <button v-if="funeral[3].answer_text || funeral[3].answer_box.length" @click="onSaveStep4" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>  
            <div>
                <button @click="onLaterStep4" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
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
        const step2 = ref(false)
        const step3 = ref(false)
        const step4 = ref(false)

        const funeral = ref([])
              

        onBeforeMount(async() => {
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                    .then(async(querySnapshot) => {
                            const documentSnapshot = querySnapshot.docs[0]
                            funeral.value = await documentSnapshot.data().funeral
                    })
            } catch(error) {
                console.log('not found firebase db checklists collection by catch', error.message)
            }
            window.scrollTo(0,0)
        })




        const onSaveStep1 = async () => {
            funeral.value[0].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    if(querySnapshot.docs.length > 0) {
                        querySnapshot.docs[0].ref.update({
                            funeral: funeral.value,
                            create_at: Date.now(),
                        })                 
                    } else {
                        console.log('not found firebase db checklists collection')
                        onCreateChecklists()
                    }
                })
            } catch(error) {
                console.log('funeral step1 error : ', error.message)
            }
            step1.value = false
            step2.value = true
            window.scrollTo(0,0)
        }
        const onSaveStep2 = async () => {
            funeral.value[1].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            funeral: funeral.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('funeral step2 error : ', error.message)
            }
            step2.value = false
            step3.value = true
            window.scrollTo(0,0)
        }
        const onSaveStep3 = async () => {
            funeral.value[2].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            funeral: funeral.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('funeral step3 error : ', error.message)
            }
            step3.value = false
            step4.value = true
            window.scrollTo(0,0)
        }
        const onSaveStep4 = async () => {
            funeral.value[3].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            funeral: funeral.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('funeral step3 error : ', error.message)
            }
            router.push('/welldyingchecklist')
        }

        const onPrevStep1 = () => {
            router.push('/welldyingchecklist')
        }
        const onPrevStep2 = () => {
            step2.value = false
            step1.value = true
            window.scrollTo(0,0)
        }
        const onPrevStep3 = () => {
            step3.value = false
            step2.value = true
            window.scrollTo(0,0)
        }
        const onPrevStep4 = () => {
            step4.value = false
            step3.value = true
            window.scrollTo(0,0)
        }

        const onLaterStep1 = () => {
            step1.value = false
            step2.value = true
            window.scrollTo(0,0)
        }
        const onLaterStep2 = () => {
            step2.value = false
            step3.value = true
            window.scrollTo(0,0)
        }
        const onLaterStep3 = () => {
            step3.value = false
            step4.value = true
            window.scrollTo(0,0)
        }
        const onLaterStep4 = () => {
            router.push('/welldyingchecklist')
        }

        return {
            step1,
            step2,
            step3,
            step4,


            onSaveStep1,
            onSaveStep2,
            onSaveStep3,
            onSaveStep4,

            onPrevStep1,
            onPrevStep2,
            onPrevStep3,
            onPrevStep4,

            onLaterStep1,
            onLaterStep2,
            onLaterStep3,
            onLaterStep4,


            funeral,
            
        }

    }


}
</script>

<style>

</style>