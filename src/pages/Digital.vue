<template>
<div class="flex flex-col h-screen overflow-y-scroll items-center pt-24 pb-48 md:pb-10 px-3 md:px-20">
    <!-- image section by maru -->
    <div class="mb-10">
            <img class="object-cover border-4 border-gray-100 w-24 h-24 rounded-full" src="/maru_beta_image.png" alt="">
    </div>
    <!-- question section -->
    <div v-if="digital.length" class=" mb-10 text-2xl md:text-4xl font-bold text-gray-700 w-7/8 md:w-4/6">
        <div v-if="step1" class="flex flex-col items-center space-y-1">
            <div>1. {{digital[0].question}}</div>
        </div>
        <div v-if="step2" class="flex flex-col items-center space-y-1">
            <div>2. {{digital[1].question}}</div>
        </div>
        <div v-if="step3" class="flex flex-col items-center space-y-1">
            <div>3. {{digital[2].question}}</div>
        </div>
        <div v-if="step4" class="flex flex-col items-center space-y-1">
            <div>4. {{digital[3].question}}</div>
        </div>
        <div v-if="step5" class="flex flex-col items-center space-y-1">
            <div>5. {{digital[4].question}}</div>
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1 && digital.length" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_box" class="w-8 h-8" type="radio" value='네'><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_box" class="w-8 h-8" type="radio" value='아니요'><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="digital[0].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    <!-- step2 -->
    <div v-if="step2 && digital.length" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box" class="w-8 h-8" type="radio" value="네"><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box" class="w-8 h-8" type="radio" value="아니요"><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box" class="w-8 h-8" type="checkbox" value="선택형3"><span>선택형3</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="digital[1].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
             rows="4">
            </textarea>
        </div>
    </div>

    <!-- step3 -->
    <div v-if="step3 && digital.length" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[2].answer_box" class="w-8 h-8" type="radio" value='네'><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[2].answer_box" class="w-8 h-8" type="radio" value='아니요'><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[2].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[2].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="digital[2].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    <!-- step4-->
    <div v-if="step4 && digital.length" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[3].answer_box" class="w-8 h-8" type="radio" value='네'><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[3].answer_box" class="w-8 h-8" type="radio" value='아니요'><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[3].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[3].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="digital[3].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    <!-- step5-->
    <div v-if="step5 && digital.length" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[4].answer_box" class="w-8 h-8" type="radio" value='네'><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[4].answer_box" class="w-8 h-8" type="radio" value='아니요'><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[4].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[4].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="digital[4].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    
    <!-- button section -->
    <div v-if="digital.length" class="flex  justify-center w-full">
        <div v-if="step1" class="">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!digital[0].answer_text && !digital[0].answer_box.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>    
            <button v-if="digital[0].answer_text || digital[0].answer_box.length" @click="onSaveStep1" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>
            <div>
                <button @click="onLaterStep1" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step2" class=" "> 
            <button @click="onPrevStep2" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!digital[1].answer_text && !digital[1].answer_box.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>    
            <button v-if="digital[1].answer_text || digital[1].answer_box.length" @click="onSaveStep2" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>
            <div>
                <button @click="onLaterStep2" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
            </div>
        </div>
        <div v-if="step3" class=" ">
            <button @click="onPrevStep3" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!digital[2].answer_text && !digital[2].answer_box.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>  
            <button v-if="digital[2].answer_text || digital[2].answer_box.length" @click="onSaveStep3" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>  
            <div>
                <button @click="onLaterStep3" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step4" class=" ">
            <button @click="onPrevStep4" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!digital[3].answer_text && !digital[3].answer_box.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>  
            <button v-if="digital[3].answer_text || digital[3].answer_box.length" @click="onSaveStep4" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>  
            <div>
                <button @click="onLaterStep4" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step5" class=" ">
            <button @click="onPrevStep5" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!digital[4].answer_text && !digital[4].answer_box.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>  
            <button v-if="digital[4].answer_text || digital[4].answer_box.length" @click="onSaveStep5" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>  
            <div>
                <button @click="onLaterStep5" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
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
        const step5 = ref(false)

        const digital = ref([])
              

        onBeforeMount(async() => {
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                    .then(async(querySnapshot) => {
                            const documentSnapshot = querySnapshot.docs[0]
                            digital.value = await documentSnapshot.data().digital
                    })
            } catch(error) {
                console.log('not found firebase db checklists collection by catch', error.message)
            }
            window.scrollTo(0,0)
        })




        const onSaveStep1 = async () => {
            digital.value[0].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    if(querySnapshot.docs.length > 0) {
                        querySnapshot.docs[0].ref.update({
                            digital: digital.value,
                            create_at: Date.now(),
                        })                 
                    } else {
                        console.log('not found firebase db checklists collection')
                        onCreateChecklists()
                    }
                })
            } catch(error) {
                console.log('digital step1 error : ', error.message)
            }
            step1.value = false
            step2.value = true
            window.scrollTo(0,0)
        }
        const onSaveStep2 = async () => {
            digital.value[1].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            digital: digital.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('digital step2 error : ', error.message)
            }
            step2.value = false
            step3.value = true
            window.scrollTo(0,0)
        }
        const onSaveStep3 = async () => {
            digital.value[2].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            digital: digital.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('digital step3 error : ', error.message)
            }
            step3.value = false
            step4.value = true
            window.scrollTo(0,0)
        }
        const onSaveStep4 = async () => {
            digital.value[3].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            digital: digital.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('digital step4 error : ', error.message)
            }
            step4.value = false
            step5.value = true
            window.scrollTo(0,0)
        }
        const onSaveStep5 = async () => {
            digital.value[4].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            digital: digital.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('digital step5 error : ', error.message)
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
        const onPrevStep5 = () => {
            step5.value = false
            step4.value = true
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
            step4.value = false
            step5.value = true
            window.scrollTo(0,0)
        }
        const onLaterStep5 = () => {
            router.push('/welldyingchecklist')
        }

        return {
            step1,
            step2,
            step3,
            step4,
            step5,


            onSaveStep1,
            onSaveStep2,
            onSaveStep3,
            onSaveStep4,
            onSaveStep5,

            onPrevStep1,
            onPrevStep2,
            onPrevStep3,
            onPrevStep4,
            onPrevStep5,

            onLaterStep1,
            onLaterStep2,
            onLaterStep3,
            onLaterStep4,
            onLaterStep5,


            digital,
            
        }

    }


}
</script>

<style>

</style>