<template>
<div class="flex flex-col items-center px-3 mb-8">
    <!-- image section by maru -->
    <div class="w-full flex flex-col justify-center items-center rounded-sm pt-8 pb-8">
        <!-- image section -->
        <img class="object-cover w-40 h-40 rounded-full" src="/maru.png" alt="">
        <!-- question section -->
        <div v-if="funeral.length" class="relative text-white flex flex-col items-center text-2xl font-semibold w-full md:w-96">
            <img src="/speech_bubble02.png" :class="`' -mt-4 h-52 `" alt="">   
            <div v-if="step1" class="absolute top-16 flex flex-col items-center ">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>1. <span class="highlight">당신과 마지막 인사를</span></div>
                    <div><span class="highlight">나누는 자리 장례식.</span></div>
                    <div>무엇이 가장 중요할까요?</div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 :</div>
                    <div>다들 저에게 마지막 편지를 써서 읽어주세요.</div>
                    <div>제가 가장 좋아하던 김광석 노래들을 틀어주세요.</div>
                </div>
            </div>
            <div v-if="step2" class="absolute top-16 flex flex-col items-center">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>2. <span class="highlight">장례식은 어디서</span></div>
                    <div>진행되면</div>
                    <div>좋을까요?</div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 :</div>
                    <div>성당에서 장례식을 진행하고 싶습니다.</div>
                    <div>집에서 장례식을 진행하고 싶습니다.</div>
                    <div>장례식을 하고 싶지 않아요.</div>
                </div>
            </div>
            <div v-if="step3" class="absolute top-16 flex flex-col items-center ">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>3. 당신과의 마지막 인사는</div>
                    <div><span class="highlight">어떤 분위기에</span>서</div>
                    <div>나누면 좋을까요?</div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 :</div>
                    <div>장례식이 밝은 분위기로 진행되기를 원해요.</div>
                </div>
            </div>
            
            <div v-if="step4" class="absolute top-16 flex flex-col items-center ">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>4. 이제 다시 자연으로 돌아갈</div>
                    <div>시간이에요. <span class="highlight">어떤 방식으로 안장</span></div>
                    <div>을 원하는지 말씀해주세요.</div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 : </div>
                    <div class=""> [매장/화장]을 한 뒤, [2번] 방식으로 진행해 주세요.</div>
                </div>
            </div>
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1 && funeral.length" class="w-full mt-28">
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
        <div class="w-full flex justify-center mb-8">
            <textarea v-model="funeral[0].answer_text" :placeholder="`${currentUser.username}님의 답변을 적어주세요.`" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    <!-- step2 -->
    <div v-if="step2 && funeral.length" class="w-full mt-32">
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
        <div class="text-xl mb-8 flex flex-col items-center w-full space-y-3">
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="장례식은 장례식장에서 하고 싶습니다."><span>장례식장</span>
            </div>
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="장례식은 집에서 하고 싶습니다."><span>집</span>
            </div>
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="장례식은 성당에서 하고 싶습니다."><span>성당</span>
            </div>
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="장례식은 교회에서 하고 싶습니다."><span>교회</span>
            </div>
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="장례식은 절에서 하고 싶습니다."><span>절</span>
            </div>
            <!-- <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="장례식은 종교시설에서 하고 싶습니다.">
                <input v-if="isSelection == true" type="text" class=" w-28 border-b border-primary outline-none text-center" placeholder="종교방식">
                <select v-if="isSelection == false" @change="showChange()" v-model="funeral[1].answer_box" class=" w-28 border-b border-primary outline-none text-center" >
                    <option value="변호사">변호사</option>
                    <option value="세무사">세무사</option>
                    <option value="자산관리사">자산관리사</option>
                    <option value=true>직접입력</option>
                </select>
            </div> -->
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[1].answer_box" class="w-8 h-8" type="radio" value="직접입력"><span>직접입력</span>
            </div>
        </div>
        <!-- text section -->
        <div v-if="funeral[1].answer_box === '직접입력'" class="w-full flex justify-center mb-8 -mt-10">
            <textarea v-model="funeral[1].answer_text" :placeholder="`${currentUser.username}님의 답변을 적어주세요.`" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
             rows="4">
            </textarea>
        </div>
    </div>

    <!-- step3 -->
    <div v-if="step3 && funeral.length" class="w-full mt-16">
        <!-- radio section -->
        <div class="text-xl mb-8 flex flex-col items-center w-full space-y-3">
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="radio" value='장례식은 즐겁게 진행되기를 원합니다.'><span>즐겁게</span>
            </div>
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="radio" value='장례식은 엄중하게 진행되기를 원합니다.'><span>엄중하게</span>
            </div>
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="radio" value='장례식은 전통적 방식으로 진행되기를 원합니다.'><span>전통적 방식으로</span>
            </div>
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="radio" value='장례식은 종교 방식대로 진행되기를 원합니다.'><span>종교 방식대로</span>
            </div>
            <div class=" px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="funeral[2].answer_box" class="w-8 h-8" type="radio" value='직접입력'><span>직접입력</span>
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
        <div v-if="funeral[2].answer_box === '직접입력'" class="w-full flex justify-center mb-8 -mt-10">
            <textarea v-model="funeral[2].answer_text" :placeholder="`${currentUser.username}님의 답변을 적어주세요.`" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    <!-- step4-->
    <div v-if="step4 && funeral.length" class="w-full mt-20">
        <!-- radio section -->
        <div  class="text-xl flex items-center w-full justify-center">
            <div class="px-2 md:w-96 py-3 w-full">
                <select  v-model="funeral[3].answer_box[0].box_type1" class=" w-28 border-b border-primary outline-none text-center" >
                    <option value="매장">매장</option>
                    <option value="화장">화장</option>
                </select>
                <span>을 한 뒤, </span>
                <select  v-model="funeral[3].answer_box[0].box_type2" class=" w-28 border-b border-primary outline-none text-center" >
                    <option value="납골당">납골당</option>
                    <option value="가족묘">가족묘</option>
                    <option value="선산">선산</option>
                    <option value="수목장">수목장</option>
                    <option value="공동묘지">공동묘지</option>
                </select>
                <span>방식으로 진행해 주세요.</span>
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
        <div class="w-full flex justify-center mb-8">
            <textarea v-model="funeral[3].answer_text" :placeholder="`${currentUser.username}님의 답변을 적어주세요.`" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    
    <!-- button section -->
    <div v-if="funeral.length" class="flex  justify-center w-full">
        <div v-if="step1" class="w-full flex flex-col items-center">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!funeral[0].answer_text && !funeral[0].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>    
            <button v-if="funeral[0].answer_text || funeral[0].answer_box.length" @click="onSaveStep1" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep1" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step2" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center"> 
            <button @click="onPrevStep2" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!funeral[1].answer_text && !funeral[1].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>    
            <button v-if="funeral[1].answer_text || funeral[1].answer_box.length" @click="onSaveStep2" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep2" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div>
        <div v-if="step3" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep3" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!funeral[2].answer_text && !funeral[2].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>  
            <button v-if="funeral[2].answer_text || funeral[2].answer_box.length" @click="onSaveStep3" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>  
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep3" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step4" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep4" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!funeral[3].answer_text && !funeral[3].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>  
            <button v-if="funeral[3].answer_text || funeral[3].answer_box.length" @click="onSaveStep4" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>  
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep4" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
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

        const isSelection = ref(false)

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

        const showChange = () => {
            if(funeral.value[1].answer_box === 'true') {
                isSelection.value = true
            }
        }


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
            isSelection,
            showChange,
            currentUser,
            
        }

    }


}
</script>

<style>

</style>