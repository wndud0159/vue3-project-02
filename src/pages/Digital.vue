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
    </div>


    <!-- step1 -->
    <div v-if="step1 && digital.length" class="w-full">
        <!-- radio section -->
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_box1" class="w-8 h-8" type="radio" value='저의 소셜미디어는 그대로 유지하겠습니다'><span>그대로 놔두세요</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_box1" class="w-8 h-8" type="radio" value='저의 소셜미디어는 모두 삭제하겠습니다'><span>삭제하세요</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_box1" class="w-8 h-8" type="radio" value='기타'><span>기타</span>
            </div>
        </div>
        <!-- checkbox section -->
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-6 w-full">
                <input v-model="digital[0].answer_box2" class="w-8 h-8" type="checkbox" value="카카오"><span>카카오</span>
                <select v-model="digital[0].box_state1" class=" w-20 py-0.5 text-center border-2">
                    <option value="">선택</option>
                    <option value="은 그대로 유지해주세요">유지</option>
                    <option value="은 삭제해주세요">삭제</option>
                </select>
                <input v-model="digital[0].box_name1" class="w-20 text-center border-2 " placeholder="이름" type="text">
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-6 w-full">
                <input v-model="digital[0].answer_box2" class="w-8 h-8" type="checkbox" value="네이버"><span>네이버</span>
                <select v-model="digital[0].box_state2" class=" w-20 py-0.5 text-center border-2">
                    <option value="">선택</option>
                    <option value="은 그대로 유지해주세요">유지</option>
                    <option value="은 삭제해주세요">삭제</option>
                </select>
                <input v-model="digital[0].box_name2" class="w-20 text-center border-2 " placeholder="이름" type="text">
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-6 w-full">
                <input v-model="digital[0].answer_box2" class="w-8 h-8" type="checkbox" value="구글"><span>구글</span>
                <select v-model="digital[0].box_state3" class=" w-20 py-0.5 text-center border-2">
                    <option value="">선택</option>
                    <option value="은 그대로 유지해주세요">유지</option>
                    <option value="은 삭제해주세요">삭제</option>
                </select>
                <input v-model="digital[0].box_name3" class="w-20 text-center border-2 " placeholder="이름" type="text">
            </div>   
        </div>
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
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box1" class="w-8 h-8" type="radio" value='저의 SNS는 그대로 유지하겠습니다'><span>그대로 놔두세요</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box1" class="w-8 h-8" type="radio" value='저의 SNS는 모두 삭제하겠습니다'><span>삭제하세요</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box1" class="w-8 h-8" type="radio" value='기타'><span>기타</span>
            </div>
        </div>
        <!-- checkbox section -->
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-6 w-full">
                <input v-model="digital[1].answer_box2" class="w-8 h-8" type="checkbox" value="페이스북"><span>페이스북</span>
                <select v-model="digital[1].box_state1" class=" w-20 py-0.5 text-center border-2">
                    <option value="">선택</option>
                    <option value="은 그대로 유지해주세요">유지</option>
                    <option value="은 삭제해주세요">삭제</option>
                </select>
                <input v-model="digital[1].box_name1" class="w-20 text-center border-2 " placeholder="이름" type="text">
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-6 w-full">
                <input v-model="digital[1].answer_box2" class="w-8 h-8" type="checkbox" value="트위터"><span>트위터</span>
                <select v-model="digital[1].box_state2" class=" w-20 py-0.5 text-center border-2">
                    <option value="">선택</option>
                    <option value="은 그대로 유지해주세요">유지</option>
                    <option value="은 삭제해주세요">삭제</option>
                </select>
                <input v-model="digital[1].box_name2" class="w-20 text-center border-2 " placeholder="이름" type="text">
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-6 w-full">
                <input v-model="digital[1].answer_box2" class="w-8 h-8" type="checkbox" value="인스타그램"><span>인스타그램</span>
                <select v-model="digital[1].box_state3" class=" w-20 py-0.5 text-center border-2">
                    <option value="">선택</option>
                    <option value="은 그대로 유지해주세요">유지</option>
                    <option value="은 삭제해주세요">삭제</option>
                </select>
                <input v-model="digital[1].box_name3" class="w-20 text-center border-2 " placeholder="이름" type="text">
            </div>   
        </div>
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
                <input v-model="digital[2].answer_box" class="w-8 h-8" type="checkbox" value="사전연명치료금지서"><span>사전연명치료금지서</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[2].answer_box" class="w-8 h-8" type="checkbox" value="의료대리인"><span>의료대리인</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input class="w-8 h-8" type="checkbox" value="기타"><span>기타</span>
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
                <input v-model="digital[3].answer_box" class="w-8 h-8" type="radio" value="저는 장기 기증을 희망합니다"><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[3].answer_box" class="w-8 h-8" type="radio" value=false><span>아니요</span>
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

    
    <!-- button section -->
    <div v-if="digital.length" class="flex  justify-center w-full">
        <div v-if="step1" class="">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!digital[0].answer_text && !digital[0].answer_box1.length && !digital[0].answer_box2.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>    
            <button v-if="digital[0].answer_text || digital[0].answer_box1.length || digital[0].answer_box2.length" @click="onSaveStep1" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>
            <div>
                <button @click="onLaterStep1" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step2" class=" "> 
            <button @click="onPrevStep2" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!digital[1].answer_text && !digital[1].answer_box1.length && !digital[1].answer_box2.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>    
            <button v-if="digital[1].answer_text || digital[1].answer_box1.length || digital[1].answer_box2.length" @click="onSaveStep2" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>
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
                console.log('digital step3 error : ', error.message)
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


            digital,
            
        }

    }


}
</script>

<style>

</style>