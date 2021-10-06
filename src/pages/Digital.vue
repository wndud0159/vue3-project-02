<template>
<div class="flex flex-col items-center px-3 mb-8">
    <!-- image section by maru -->
    <div class="w-full flex flex-col justify-center items-center rounded-sm pt-8 pb-8">
        <!-- image section -->
        <img class="object-cover w-40 h-40 rounded-full" src="/maru.png" alt="">
        <!-- question section -->
        <div v-if="digital.length" class="relative text-white flex flex-col items-center text-2xl font-semibold w-full md:w-96">
            <img src="/speech_bubble02.png" :class="`' -mt-4 h-60 `" alt="">   
            <div v-if="step1" class="absolute top-16 flex flex-col items-center ">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>1. <span class="highlight">수많은 사이트</span></div>
                    <div><span class="highlight">이메일 계정을</span></div>
                    <div>그냥 놔둘지, 삭제할지</div>
                    <div> 고민해볼까요?</div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 :</div>
                    <div>카카오의 계정은 삭제해주세요.</div>
                    <div> 관리자는 김윤아입니다.</div>
                    <div>이메일 계정을 모두 유지하겠습니다.</div>
                    <div>이메일 계정을 모두 삭제해주세요.</div>
                </div>
            </div>
            <div v-if="step2" class="absolute top-16 flex flex-col items-center">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>이제는 <span class="highlight">소셜미디어(SNS)</span> </div>
                    <div>차례에요. 당신의 기록이</div>
                    <div>담긴 계정들을 어떻게 </div>
                    <div>정리할까요?</div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 :</div>
                    <div>인스타그램의 계정은 삭제해주세요.</div>
                    <div>관리자는 티파니입니다.</div>
                    <div>SNS 계정을 모두 유지하겠습니다.</div>
                    <div>SNS 계정을 모두 삭제해주세요.</div>
                </div>
            </div>
            <div v-if="step3" class="absolute top-16 flex flex-col items-center ">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>3. 멋진 사진들과 영상이 많네요! </div>
                    <div>{{currentUser.username}}님의 <span class="highlight">사진, 영상,</span></div>
                    <div> <span class="highlight">글과 파일</span>을 어떻게 정리하면</div>
                    <div>좋을까요?</div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 :</div>
                    <div>보관할 사진과 영상들은 노트북 ‘사랑해’ 폴더에 모아놨습니다.</div>
                    <div>디지털 파일들은 모두 삭제해주세요.</div>
                </div>
            </div>
            
           
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1 && digital.length" class="w-full mt-44">
        <!-- radio section -->
        <!-- <div class="text-xl mb-8 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_box" class="w-8 h-8" type="radio" value='저의 소셜미디어는 그대로 유지하겠습니다'><span>전부 그대로 놔두세요</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_box" class="w-8 h-8" type="radio" value='저의 소셜미디어는 모두 삭제하겠습니다'><span>전부 삭제하세요</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_box" class="w-8 h-8" type="radio" value='기타'><span>기타</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <div class="flex justify-end md:justify-center w-full text-2xl space-x-3">
            <button @click="onAddDigitalBox1" class="bg-primary text-white px-6 cursor-pointer py-1 rounded-md">추가</button>
            <button @click="onDeleteDigitalBox1" class="border-2 border-primary px-5 cursor-pointer rounded-md">삭제</button>
        </div>
        <div v-for="item in digital[0].answer_box" :key="item" class="text-xl flex items-center w-full justify-center">
            <div class=" px-2 md:w-96  py-2 w-full">
                <input v-if="item.box_selection == true" v-model="item.box_type" class="w-40 text-center outline-none border-primary border-b " placeholder="이메일" type="text">
                <select v-if="item.box_selection == false" @change="showChange(item)" v-model="item.box_type" class="w-40 text-center outline-none border-primary border-b ">
                    <option value="카카오">카카오</option>
                    <option value="네이버">네이버</option>
                    <option value="구글">구글</option>
                    <option value=true>직접입력</option>
                </select>
                <span> 의 계정은 </span>
                <select v-model="item.box_state" class=" w-48 outline-none text-center border-b border-primary">
                    <option value="은 그대로 놔둬주세요">그대로 놔둬주세요</option>
                    <option value="은 삭제해주세요">삭제해주세요</option>
                </select>
                <span> 관리자는 </span>
                <input v-model="item.box_name" class=" w-20 outline-none text-center border-b border-primary" placeholder="이름" type="text">
                <span> 입니다.</span>
        </div>
        </div>
        <div class="w-full flex justify-center">
            <div class="px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="digital[0].answer_check" class="w-8 h-8" type="checkbox" value="직접입력"><span>직접입력</span>
            </div>
        </div>
        <!-- text section -->
        <div v-if="digital[0].answer_check.length" class="w-full flex justify-center -mt-2">
            <textarea v-model="digital[0].answer_text" :placeholder="`${currentUser.username}님의 답변을 적어주세요.`" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    <!-- step2 -->
    <div v-if="step2 && digital.length" class="w-full mt-44">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box" class="w-8 h-8" type="radio" value='저의 SNS는 그대로 유지하겠습니다'><span>전부 그대로 놔두세요</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box" class="w-8 h-8" type="radio" value='저의 SNS는 모두 삭제하겠습니다'><span>전부 삭제하세요</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_box" class="w-8 h-8" type="radio" value='기타'><span>기타</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <div class="flex justify-end md:justify-center w-full text-2xl space-x-3">
            <button @click="onAddDigitalBox2" class="bg-primary text-white px-6 cursor-pointer py-1 rounded-md">추가</button>
            <button @click="onDeleteDigitalBox2" class="border-2 border-primary px-5 cursor-pointer rounded-md">삭제</button>
        </div>
        <div v-for="item in digital[1].answer_box" :key="item" class="text-xl flex items-center w-full justify-center">
            <div class=" px-2 md:w-96  py-2 w-full">
                <input v-if="item.box_selection == true" v-model="item.box_type" class="w-40 text-center outline-none border-primary border-b " placeholder="이메일" type="text">
                <select v-if="item.box_selection == false" @change="showChange(item)" v-model="item.box_type" class="w-40 text-center outline-none border-primary border-b ">
                    <option value="인스타그램">인스타그램</option>
                    <option value="페이스북">페이스북</option>
                    <option value="트위터">트위터</option>
                    <option value=true>직접입력</option>
                </select>
                <span> 의 계정은 </span>
                <select v-model="item.box_state" class=" w-48 outline-none text-center border-b border-primary">
                    <option value="은 그대로 놔둬주세요">그대로 놔둬주세요</option>
                    <option value="은 삭제해주세요">삭제해주세요</option>
                </select>
                <span> 관리자는 </span>
                <input v-model="item.box_name" class=" w-20 outline-none text-center border-b border-primary" placeholder="이름" type="text">
                <span> 입니다.</span>
        </div>
        </div>
        <div class="w-full flex justify-center">
            <div class="px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="digital[1].answer_check" class="w-8 h-8" type="checkbox" value="직접입력"><span>직접입력</span>
            </div>
        </div>
        <!-- text section -->
        <div v-if="digital[1].answer_check.length" class="w-full flex justify-center  -mt-2">
            <textarea v-model="digital[1].answer_text" :placeholder="`${currentUser.username}님의 답변을 적어주세요.`" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
             rows="4">
            </textarea>
        </div>
    </div>

    <!-- step3 -->
    <div v-if="step3 && digital.length" class="w-full mt-36">
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
        <div class="w-full flex justify-center mb-8">
            <textarea v-model="digital[2].answer_text" :placeholder="`${currentUser.username}님의 답변을 적어주세요.`" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
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
        <!-- <div class="w-full flex justify-center mb-10">
            <textarea v-model="digital[3].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div> -->
    </div>

    
    <!-- button section -->
    <div v-if="digital.length" class="flex  justify-center w-full">
        <div v-if="step1" class="w-full flex flex-col items-center mt-7">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!digital[0].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>    
            <button v-if="digital[0].answer_box.length " @click="onSaveStep1" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep1" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step2" class="w-full flex flex-col items-center mt-7">
            <div class=" flex w-full justify-center"> 
            <button @click="onPrevStep2" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!digital[1].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>    
            <button v-if="digital[1].answer_box.length" @click="onSaveStep2" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep2" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div>
        <div v-if="step3" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep3" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!digital[2].answer_text && !digital[2].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>  
            <button v-if="digital[2].answer_text || digital[2].answer_box.length" @click="onSaveStep3" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>  
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep3" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div> 
        <!-- <div v-if="step4" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep4" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="digital[3].answer_text && digital[3].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>  
            <button v-if="!digital[3].answer_text || !digital[3].answer_box.length" @click="onSaveStep4" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">완료 / 다음</button>  
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep4" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div>  -->
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
            console.log(digital.value[0].answer_box)
        })

        const showChange = (element) => {
            console.log(element.box_type)
            if(element.box_type === 'true') {
                element.box_selection = true
                element.box_type = ''
            }
        }

        const onAddDigitalBox1 = () => {
            if(digital.value[0].answer_box.length < 5) {
                digital.value[0].answer_box.push({
                    box_type: [null],
                    box_state: [null],
                    box_name: [null],
                    box_selection: false,
                })
            }
        }

        const onAddDigitalBox2 = () => {
            if(digital.value[1].answer_box.length < 5) {
                digital.value[1].answer_box.push({
                    box_type: [null],
                    box_state: [null],
                    box_name: [null],
                    box_selection: false,
                })
            }
        }

        const onDeleteDigitalBox1 = () => {
            if(digital.value[0].answer_box.length > 1) {
                digital.value[0].answer_box.pop()
            } else {
                digital.value[0].answer_box.pop()
                digital.value[0].answer_box.push({
                    box_type: [null],
                    box_state: [null],
                    box_name: [null],
                    box_selection: false,
                })
            }
        }

        const onDeleteDigitalBox2 = () => {
            if(digital.value[1].answer_box.length > 1) {
                digital.value[1].answer_box.pop()
            } else {
                digital.value[1].answer_box.pop()
                digital.value[1].answer_box.push({
                    box_type: [null],
                    box_state: [null],
                    box_name: [null],
                    box_selection: false,
                })
            }
        }

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
            // step3.value = false
            // step4.value = true
            // window.scrollTo(0,0)
            router.push('/welldyingchecklist')
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
            // step3.value = false
            // step4.value = true
            // window.scrollTo(0,0)
            router.push('/welldyingchecklist')
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

            onAddDigitalBox1,
            onDeleteDigitalBox1,
            onAddDigitalBox2,
            onDeleteDigitalBox2,

            showChange,

            digital,
            currentUser,
            
        }

    }


}
</script>

<style>

</style>