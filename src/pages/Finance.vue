<template>
<div class="flex flex-col items-center px-3 mb-8">
    <!-- image section by maru -->
    <div class="w-full flex flex-col justify-center items-center rounded-sm pt-8 pb-8">
        <!-- image section -->
        <img class="object-cover w-40 h-40 rounded-full mb-8" src="/maru.png" alt="">
        <!-- question section -->
        <div v-if="finance.length" class="flex flex-col items-center text-2xl font-semibold w-full md:w-96">
            <div v-if="step1" class="flex flex-col items-center ">
                <div class="mb-8 ">1. {{finance[0].question}}</div>
                <div class="w-full flex flex-col items-center text-lg text-white bg-lighter rounded-xl px-3 py-3 -mt-2">
                    <div>답변 예시 :</div>
                    <div>삼성생명 보험이 있으며, 수혜자는 딸 윤하입니다.</div>
                </div>
            </div>
            <div v-if="step2" class="flex flex-col items-center ">
                <div class="mb-8 ">2. {{finance[1].question}}</div>
                <div class="w-full flex flex-col items-center text-lg text-white bg-lighter rounded-xl px-3 py-3 -mt-2">
                    <div>답변 예시 :</div>
                    <div>유언장을 작성했으며, 서재 책상의 첫번째 서랍에 보관하고 있습니다. 아이백을 통해 유언장을 작성하고, 파일은 노트북에 저장되어 있습니다.</div>
                    <div class=" text-blue-500 underline">유언장 작성하러 가기</div>
                </div>
            </div>
            <div v-if="step3" class="flex flex-col items-center ">
                <div class="mb-8 ">3. {{finance[2].question}}</div>
                <div class="w-full flex flex-col items-center text-lg text-white bg-lighter rounded-xl px-3 py-3 -mt-2">
                    <div>답변 예시 :</div>
                    <div>은행 계좌 목록은 노란 노트에 정리해놓았습니다. 미래에셋증권 주식 계좌가 있습니다. 하나은행을 통해 신용대출을 받았습니다. </div>
                </div>
            </div>
            <div v-if="step4" class="flex flex-col items-center ">
                <div class="mb-8 ">4. {{finance[3].question}}</div>
                <div class="w-full flex flex-col items-center text-lg text-white bg-lighter rounded-xl px-3 py-3 -mt-2">
                    <div>답변 예시 :</div>
                    <div>이도현 회계사가 재산을 관리하고 있습니다. 대한은행 신탁을 통해 관리하고 있습니다. 연락처는 010-0000-0000 입니다.</div>
                </div>
            </div>
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1 && finance.length" class="w-full">
        <!-- radio section -->
        <div class="text-xl mb-8 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[0].answer_box" class="w-8 h-8" type="radio" value=true><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[0].answer_box" class="w-8 h-8" type="radio" value=false><span>아니요</span>
            </div>
        </div>
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[0].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[0].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-8">
            <textarea v-model="finance[0].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    <!-- step2 -->
    <div v-if="step2 && finance.length" class="w-full">
        <!-- radio section -->
        <div class="text-xl mb-8 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[1].answer_box" class="w-8 h-8" type="radio" value=true><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[1].answer_box" class="w-8 h-8" type="radio" value=false><span>아니요</span>
            </div>
        </div>
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[1].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[1].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[1].answer_box" class="w-8 h-8" type="checkbox" value="선택형3"><span>선택형3</span>
            </div>
        </div> -->
        <!-- text section -->
        <!-- <div class="w-full flex justify-center mb-10">
            <textarea v-model="finance[1].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
             rows="4">
            </textarea>
        </div> -->
    </div>

    <!-- step3 -->
    <div v-if="step3 && finance.length" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[2].answer_box" class="w-8 h-8" type="radio" value='네'><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[2].answer_box" class="w-8 h-8" type="radio" value='아니요'><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[2].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[2].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-8">
            <textarea v-model="finance[2].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    <!-- step4-->
    <div v-if="step4 && finance.length" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[3].answer_box" class="w-8 h-8" type="radio" value='네'><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[3].answer_box" class="w-8 h-8" type="radio" value='아니요'><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <div class="text-sm mb-8 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[3].answer_box" class="w-8 h-8" type="radio" :value="`변호사`"><span>변호사</span><input v-model="finance[3].box_name1" class="w-20 text-center border-2" placeholder="이름" type="text"><input v-model="finance[3].box_number1" class=" w-40 text-center border-2" placeholder="010-0000-0000" type="text">
            </div>
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[3].answer_box" class="w-8 h-8" type="radio" :value="`회계사`"><span>회계사</span><input v-model="finance[3].box_name2" class="w-20 text-center border-2" placeholder="이름"  type="text"><input v-model="finance[3].box_number2" class="w-40 text-center border-2" placeholder="010-0000-0000"  type="text">
            </div>
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[3].answer_box" class="w-8 h-8" type="radio" value="기타"><span>기타</span>
            </div>
        </div>
        <!-- text section -->
        <div class="w-full flex justify-center mb-8">
            <textarea v-model="finance[3].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    
    <!-- button section -->
    <div v-if="finance.length" class="flex  justify-center w-full">
        <div v-if="step1" class="w-full flex flex-col items-center">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!finance[0].answer_text && !finance[0].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>    
            <button v-if="finance[0].answer_text || finance[0].answer_box.length" @click="onSaveStep1" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep1" class="bg-lighter py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step2" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center"> 
            <button @click="onPrevStep2" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!finance[1].answer_text && !finance[1].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>    
            <button v-if="finance[1].answer_text || finance[1].answer_box.length" @click="onSaveStep2" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep2" class="bg-lighter py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div>
        <div v-if="step3" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep3" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!finance[2].answer_text && !finance[2].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>  
            <button v-if="finance[2].answer_text || finance[2].answer_box.length" @click="onSaveStep3" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>  
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep3" class="bg-lighter py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step4" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep4" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!finance[3].answer_text && !finance[3].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>  
            <button v-if="finance[3].answer_text || finance[3].answer_box.length" @click="onSaveStep4" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>  
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep4" class="bg-lighter py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
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

        const finance = ref([])

        const answerText1 = ref('')
        const answerText2 = ref('')
              

        onBeforeMount(async() => {
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                    .then(async(querySnapshot) => {
                            const documentSnapshot = querySnapshot.docs[0]
                            finance.value = await documentSnapshot.data().finance
                    })
            } catch(error) {
                console.log('not found firebase db checklists collection by catch', error.message)
            }
            window.scrollTo(0,0)
        })




        const onSaveStep1 = async () => {
            finance.value[0].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    if(querySnapshot.docs.length > 0) {
                        querySnapshot.docs[0].ref.update({
                            finance: finance.value,
                            create_at: Date.now(),
                        })                 
                    } else {
                        console.log('not found firebase db checklists collection')
                        onCreateChecklists()
                    }
                })
            } catch(error) {
                console.log('finance step1 error : ', error.message)
            }
            step1.value = false
            step2.value = true
            window.scrollTo(0,0)
        }
        const onSaveStep2 = async () => {
            finance.value[1].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            finance: finance.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('finance step2 error : ', error.message)
            }
            step2.value = false
            step3.value = true
            window.scrollTo(0,0)
        }
        const onSaveStep3 = async () => {
            finance.value[2].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            finance: finance.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('finance step3 error : ', error.message)
            }
            step3.value = false
            step4.value = true
            window.scrollTo(0,0)
        }
        const onSaveStep4 = async () => {
            finance.value[3].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            finance: finance.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('finance step3 error : ', error.message)
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


            finance,

            answerText1,
            answerText2,
            
        }

    }


}
</script>

<style>

</style>