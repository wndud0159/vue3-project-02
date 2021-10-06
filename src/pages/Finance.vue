<template>
<div class="flex flex-col items-center px-3 mb-8">
    <!-- image section by maru -->
    <div class="w-full flex flex-col justify-center items-center rounded-sm pt-8 pb-8">
        <!-- image section -->
        <img class="object-cover w-40 h-40 rounded-full" src="/maru.png" alt="">
        <!-- question section -->
        <div v-if="finance.length" class="relative text-white flex flex-col items-center text-2xl font-semibold w-full md:w-96">
            <img src="/speech_bubble02.png" :class="`' -mt-4 h-60 `" alt="">   
            <div v-if="step1" class="absolute top-16 flex flex-col items-center ">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>1. 생명 보험에 가입한 적</div>
                    <div>있으신가요? 있다면 <span class="highlight">보험 정보와</span></div>
                    <div><span class="highlight">수혜자</span>를 적어보세요.</div>
                    <div>마루가 가족에게 알려줄게요.</div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 :</div>
                    <div>삼성생명 보험이며, 수혜자는 남편 한호열, 딸 한새벽, 아들 한준호입니다.</div>
                </div>
            </div>
            <div v-if="step2" class="absolute top-16 flex flex-col items-center">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>2. 은행 계좌, 주식, 부동산,</div>
                    <div>귀중품까지, 혹시 모를 부채도</div>
                    <div>가족들이 당황하지 않게 말이에요.</div>
                    <div>여기에다 정리해볼까요? </div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 :</div>
                    <div>은행 계좌 목록은 휴대폰 메모장에 정리해놓았습니다.</div>
                    <div>아이백증권에 주식 계좌가 있습니다.</div>
                    <div>아이백은행을 통해 신용대출을 받았습니다.</div>
                </div>
            </div>
            <div v-if="step3" class="absolute top-16 flex flex-col items-center ">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>3. 열심히 일해서 쌓아온 당신의</div>
                    <div><span class="highlight">자산, 부동산, 은행 계좌, 주식을</span></div>
                    <div> <span class="highlight">관리하는 사람</span>은 누군가요? 가족들이</div>
                    <div>누구에게 연락해야 할 지 알려주세요. </div>
                </div>
                <div class="w-full flex flex-col items-center text-lg text-light  ">
                    <div>답변 가이드 :</div>
                    <div>이도현 회계사가 재산을 관리하고 있습니다.</div>
                    <div>연락처는 010-1111-1111입니다.</div>
                    <div>아이백 은행 신탁을 통해 관리하고 있습니다.</div>
                </div>
            </div>
            
            <div v-if="step4" class="absolute top-16 flex flex-col items-center ">
                <div class="mb-12 w-full flex flex-col items-center">
                    <div>4. 암호화폐 자산도 곧 정리할</div>
                    <div>수 있어요. 마루가 가상자산</div>
                    <div class="highlight">거래소 연동도 준비하고 있답니다.</div>
                    <div>조금만 기다려주세요!</div>
                </div>
            
            </div>
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1 && finance.length" class="w-full mt-28 mb-8">
        <!-- radio section -->
        <!-- <div class="text-xl mb-8 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[0].answer_box" class="w-8 h-8" type="radio" value=true><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[0].answer_box" class="w-8 h-8" type="radio" value=false><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <div class="flex justify-end md:justify-center w-full text-2xl space-x-3">
            <button @click="onAddFinanceBox1" class="bg-primary text-white px-6 cursor-pointer py-1 rounded-md">추가</button>
            <button @click="onDeleteFinanceBox1" class="border-2 border-primary px-5 cursor-pointer rounded-md">삭제</button>
        </div>
        <div v-for="item in finance[0].answer_box" :key="item" class="text-xl flex items-center w-full justify-center">
            <div class=" px-2 md:w-96  py-3 w-full ">
                <input v-model="item.box_type" type="text" class="w-28 border-b text-center outline-none border-primary" placeholder="보험명">
                
                <span> 보험이며,</span>
                <span> 수혜자는</span>
                <input v-model="item.box_name" class="w-40 text-center outline-none  border-b border-primary " placeholder="이름" type="text">
                <span> 입니다.</span>
            </div>
        </div>
        <div class="w-full flex justify-center">
            <div class="px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="finance[0].answer_check" class="w-8 h-8" type="checkbox" value="직접입력"><span>직접입력</span>
            </div>
        </div>
        <!-- text section -->
        <div v-if="finance[0].answer_check.length" class="w-full flex justify-center -mt-2">
            <textarea v-model="finance[0].answer_text" :placeholder="`${currentUser.username}님의 답변을 적어주세요.`" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    <!-- step2 -->
    <div v-if="step2 && finance.length" class="w-full mt-40">
        <!-- radio section -->
        <!-- <div class="text-xl mb-8 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[1].answer_box" class="w-8 h-8" type="radio" value=true><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[1].answer_box" class="w-8 h-8" type="radio" value=false><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        
        <!-- text section -->
        <div class="w-full flex justify-center mb-8">
            <textarea v-model="finance[1].answer_text" :placeholder="`${currentUser.username}님의 답변을 적어주세요.`" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
             rows="4">
            </textarea>
        </div>
    </div>

    <!-- step3 -->
    <div v-if="step3 && finance.length" class="w-full mt-36 mb-8">
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
        <div class="flex justify-end md:justify-center w-full text-2xl space-x-3 mb-1">
            <button @click="onAddFinanceBox2" class="bg-primary text-white px-6 cursor-pointer py-1 rounded-md">추가</button>
            <button @click="onDeleteFinanceBox2" class="border-2 border-primary px-5 cursor-pointer rounded-md">삭제</button>
        </div>
        <div v-for="item in finance[2].answer_box" :key="item" class="text-xl flex items-center w-full justify-center">
            <div class="px-2 md:w-96 py-3 w-full">
                <input v-model="item.box_name" class="w-20 mr-1 text-center border-b border-primary outline-none " placeholder="이름" type="text">
                <input v-if="item.box_selection == true" v-model="item.box_type" class="w-28 text-center border-b border-primary outline-none " placeholder="직책" type="text">
                <select v-if="item.box_selection == false" @change="showChange(item)" v-model="item.box_type" class=" w-28 border-b border-primary outline-none text-center" >
                    <option value="변호사">변호사</option>
                    <option value="세무사">세무사</option>
                    <option value="자산관리사">자산관리사</option>
                    <option value=true>직접입력</option>
                </select>
                <span>님이 </span>
                <span>재산을 관리하고 있습니다.</span>
                <span> 연락처는 </span>
                <input v-model="item.box_number" class="w-40 mr-1 text-center border-b border-primary outline-none " placeholder="010-0000-0000" type="text">
                <span>입니다.</span>

            </div>
        </div>
        <div class="w-full flex justify-center">
            <div class="px-2 md:w-96 py-2 flex items-center space-x-2 w-full">
                <input v-model="finance[2].answer_check" class="w-8 h-8" type="checkbox" value="직접입력"><span>직접입력</span>
            </div>
        </div>
        <!-- text section -->
        <div v-if="finance[2].answer_check.length" class="w-full flex justify-center -mt-2">
            <textarea v-model="finance[2].answer_text" :placeholder="`${currentUser.username}님의 답변을 적어주세요.`" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
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
        <!-- <div class="text-sm mb-8 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[3].answer_box" class="w-8 h-8" type="radio" :value="`변호사`"><span>변호사</span><input v-model="finance[3].box_name1" class="w-20 text-center border-2" placeholder="이름" type="text"><input v-model="finance[3].box_number1" class=" w-40 text-center border-2" placeholder="010-0000-0000" type="text">
            </div>
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[3].answer_box" class="w-8 h-8" type="radio" :value="`회계사`"><span>회계사</span><input v-model="finance[3].box_name2" class="w-20 text-center border-2" placeholder="이름"  type="text"><input v-model="finance[3].box_number2" class="w-40 text-center border-2" placeholder="010-0000-0000"  type="text">
            </div>
            <div class="bg-gray-100 px-3 md:w-96 py-3 flex items-center space-x-2 w-full">
                <input v-model="finance[3].answer_box" class="w-8 h-8" type="radio" value="기타"><span>기타</span>
            </div>
        </div> -->
        <!-- text section -->
        <!-- <div class="w-full flex justify-center mb-8">
            <textarea v-model="finance[3].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-96 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div> -->
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
                <button @click="onLaterStep1" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step2" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center"> 
            <button @click="onPrevStep2" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!finance[1].answer_text && !finance[1].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>    
            <button v-if="finance[1].answer_text || finance[1].answer_box.length" @click="onSaveStep2" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep2" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div>
        <div v-if="step3" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep3" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button v-if="!finance[2].answer_text && !finance[2].answer_box.length" class=" bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">저장 / 다음</button>  
            <button v-if="finance[2].answer_text || finance[2].answer_box.length" @click="onSaveStep3" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">저장 / 다음</button>  
            </div>
            <div class="w-full flex justify-center">
                <button @click="onLaterStep3" class="bg-light py-3 w-full md:w-96  text-white rounded-lg mt-8">나중에 적겠습니다</button>
            </div>
        </div> 
        <div v-if="step4" class="w-full flex flex-col items-center ">
            <div class=" flex w-full justify-center">
            <button @click="onPrevStep4" class=" bg-gray-100 py-3 w-1/2 md:w-44 mr-8 rounded-lg">이전으로</button>    
            <button @click="onLaterStep4" class=" bg-primary py-3 w-1/2 md:w-44 rounded-lg text-white">완료 / 다음</button>  
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

        const showChange = (element) => {
            console.log(element.box_type)
            if(element.box_type === 'true') {
                element.box_selection = true
                element.box_type = ''
            }
        }

        const onAddFinanceBox1 = () => {
            if(finance.value[0].answer_box.length < 5) {
                finance.value[0].answer_box.push({
                    box_type: [null],
                    box_name: [null],
                    box_selection: false,
                })
            }
        }

        const onAddFinanceBox2 = () => {
            if(finance.value[2].answer_box.length < 5) {
                finance.value[2].answer_box.push({
                    box_type: [null],
                    box_number: [null],
                    box_name: [null],
                    box_selection: false,
                })
            }
        }

        const onDeleteFinanceBox1 = () => {
            if(finance.value[0].answer_box.length > 1) {
                finance.value[0].answer_box.pop()
            } else {
                finance.value[0].answer_box.pop()
                finance.value[0].answer_box.push({
                    box_type: [null],
                    box_name: [null],
                    box_selection: false,
                })
            }
        }

        const onDeleteFinanceBox2 = () => {
            if(finance.value[2].answer_box.length > 1) {
                finance.value[2].answer_box.pop()
            } else {
                finance.value[2].answer_box.pop()
                finance.value[2].answer_box.push({
                    box_type: [null],
                    box_number: [null],
                    box_name: [null],
                    box_selection: false,
                })
            }
        }




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
            currentUser,

            onAddFinanceBox1,
            onAddFinanceBox2,
            onDeleteFinanceBox1,
            onDeleteFinanceBox2,
            showChange,
            
        }

    }


}
</script>

<style>

</style>