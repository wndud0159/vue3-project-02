<template>
    <div class="flex flex-col h-screen overflow-y-scroll items-center pt-24 pb-48 md:pb-10 px-3 md:px-20">
        <div class="mb-10">
            <img class="object-cover border-4 border-gray-100 w-24 h-24 rounded-full" src="/maru_beta_image.png" alt="">
        </div>
        <!-- title section -->
        <div v-if="stepState" class="flex flex-col items-center text-2xl md:text-4xl mb-10 font-bold text-gray-700 w-7/8 md:w-4/6">
            <div v-if="step1">안녕하세요? 마루에요 이름을 입력해주세요.</div>
            <div v-if="step2">{{userName}}님 반갑습니다 주소를 적어주세요.</div>
            <div v-if="step3" class="w-full text-center space-y-4">
                <div> {{currentUser.username}}님, 저는 ‘마루’에요.</div>
                <div> 아래 질문에 하나하나 답하다 보면  &nbsp;  좋은 마무리를 위한 삶의 이정표가&nbsp;&nbsp; 완성될 거에요</div>
                <!-- <div>준비한 질문에 하나하나 답하다 보면 ‘좋은 마무리’에 도달하는 이정표가 완성될 거에요.</div> -->
            </div>
        </div>
        <!-- userInfo section -->
        <div v-if="userInfoState" class="w-full mb-10 flex flex-col items-center text-xl">
                <input v-model="userName" v-if="step1" type="text" class="md:w-1/2 w-full text-center border border-gray-300 focus:ring-2 focus:outline-none rounded-lg px-4 py-4">
                <div v-if="step2" class="w-full flex flex-col relative items-center space-y-5">
                <input @click="showVueDaumPostcode" readonly v-model="userAddress" placeholder="도로명 입력" type="text" class="md:w-1/2  w-full text-center border border-gray-300 focus:ring-2 focus:outline-none rounded-lg px-4 py-4">
                <input v-model="userDetailAddress" placeholder="상세주소 입력" type="text" class="md:w-1/2  w-full text-center border border-gray-300 focus:ring-2 focus:outline-none rounded-lg px-4 py-4">
                <VueDaumPostcode class="w-full md:w-1/2 absolute -top-5" v-if="addressState" @complete="onComplete" />
                </div>
        </div>

        <!-- checklist section -->
        <div v-if="checklistState" class="w-full md:w-1/2">
        <!-- <div @click="onPrevStep3" class=" cursor-pointer underline text-blue-800">이름,주소 다시 입력하기</div> -->

        <!-- health -->
        <router-link to="/health" class="w-full mb-5">
            <div class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-heart text-white bg-red-300 px-3 py-2 rounded-full text-3xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{completeHealth.length}}/{{4}}</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">건강</div>
                            <div>건강하게 늙어갈 권리</div>
                        </div>
                    </div>
                </div>
                <i class="fas fa-chevron-right"></i>
            </div>
            </router-link>

            <!-- finance -->
            <router-link to="/finance" class="w-full mb-5">
            <div @click="showfinanceLists" class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-briefcase text-white bg-green-600 opacity-70 px-3 py-2 rounded-full text-3xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{completeFinance.length}}/4</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">재무</div>
                            <div>자산을 알맞게 처분할 권리</div>
                        </div>
                    </div>
                </div>
                <i class="fas fa-chevron-right"></i>
            </div>
            </router-link>

            <!-- testament -->
            <router-link to="/testament" class="w-full mb-5">
            <div class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-cloud text-white bg-green-400 opacity-70 px-3 py-2.5 rounded-full text-2xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{completeTestament.length}}/4</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">유언</div>
                            <div>마지막 말과 생각을 남길 권리</div>
                        </div>
                    </div>
                </div>
                <i class="fas fa-chevron-right"></i>
            </div>
            </router-link>

            <!-- funeral -->
            <router-link to="/funeral" class="w-full mb-5">
            <div class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-cloud text-white bg-green-400 opacity-70 px-3 py-2.5 rounded-full text-2xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{completeFuneral.length}}/4</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">장례식</div>
                            <div>나의 삶을 추모하고 유족을 위로할 권리</div>
                        </div>
                    </div>
                </div>
                <i class="fas fa-chevron-right"></i>
            </div>
            </router-link>
                 
            <!-- digital -->
            <router-link to="/digital"  class="w-full mb-5">
            <div class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-chalkboard text-white bg-yellow-500 opacity-70 px-3 py-2.5 rounded-full text-2xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{completeDigital.length}}/4</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">디지털</div>
                            <div>디지털 정보를 정리할 권리</div>
                        </div>
                    </div>
                </div>
                <i class="fas fa-chevron-right"></i>
            </div>
            </router-link>

            <!-- pet -->
            <router-link to="/pet" class="w-full mb-5">
            <div  class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-paw text-white bg-blue-300 opacity-70 px-3 py-2 rounded-full text-3xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{completePet.length}}/1</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">애완동물</div>
                            <div>반려동물과의 마지막 삶</div>
                        </div>
                    </div>
                </div>
                <i class="fas fa-chevron-right"></i>
            </div>
            </router-link>

            <!-- bucketlist -->
            <router-link to="/bucketlist"  class="w-full mb-10">
            <div class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-fill text-white bg-primary opacity-70 px-3 py-2 rounded-full text-3xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{completeBucketlist.length}}/1</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">버킷리스트</div>
                            <div>삶을 충만하게 채울 권리</div>
                        </div>
                    </div>
                </div>
                    <i class="fas fa-chevron-right"></i>
            </div>
            </router-link>

            <!-- will -->
            <router-link to="/will"  class="w-full mb-10">
            <div class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-microphone text-white bg-indigo-600 opacity-70 px-4 py-2 rounded-full text-3xl"></i>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">유언장 작성</div>
                            <div>작성하신 답변으로 유언장을 만들어보세요</div>
                        </div>
                    </div>
                </div>
                    <i class="fas fa-chevron-right"></i>
            </div>
            </router-link>

        </div>


        <!-- button section -->
        <div v-if="stepState" class="flex  justify-center w-full">
            <div v-if="step1" class=" space-x-4"> 
                <button v-if="!userName" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>    
                <button v-if="userName" @click="onSaveStep1" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>
            </div>
            <div v-if="step2" class=" space-x-4">
                <button @click="onPrevStep2" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
                <button v-if="!userAddress || !userDetailAddress" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>  
                <button v-if="userAddress && userDetailAddress" @click="onSaveStep2" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>  
            </div>  
        </div>
    </div>
</template>

<script>
import {ref, computed, onBeforeMount} from 'vue'
import store from '../store'
import {USER_COLLECTION, CHECKLISTS_COLLECTION} from '../firebase'
import {useRouter} from 'vue-router'
import {VueDaumPostcode} from 'vue-daum-postcode'
import checklist from '../js/checklist'

export default {
    components: {
        VueDaumPostcode,
    },
    setup() {
        const router = useRouter()
        const currentUser = computed(() => store.state.user)

        const stepState = ref(true)
        const step1 = ref(true)
        const step2 = ref(false)
        const step3 = ref(false)
        const step4 = ref(false)
        
        const completeHealth = ref([])
        const completeFinance = ref([])
        const completeTestament = ref([])
        const completeFuneral = ref([])
        const completeDigital = ref([])
        const completePet = ref([])
        const completeBucketlist = ref([])
        
        const checklists = ref([])
        const checklistState = ref(false)

        const userName = ref('')
        const userAddress = ref('')
        const userDetailAddress = ref('')
        const userInfoState = ref(true)
        
        const addressState = ref(false)

        onBeforeMount(async() => {
            if(currentUser.value === null) {
                router.push('/login')
            }
            if(currentUser.value.username !== '' && !currentUser.value.address !== '') {
                step1.value = false
                step2.value = false
                userInfoState.value = false
                step3.value = true
                checklistState.value = true
            }
            try{
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then(async(querySnapshot) => {
                    if(querySnapshot.docs.length > 0) {
                        console.log('existing checklist')
                        const documentSnapshot = querySnapshot.docs[0]
                        checklists.value = documentSnapshot.data()
                        onChecklistComplete()
                    } else {
                        console.log('new checklist')
                        onCreateChecklists()
                    }
                })
            } catch(error) {
                console.log('checklists database error')
            }
            window.scrollTo(0,0)
        })

        const onCreateChecklists = async () => {
            try {
                const doc = CHECKLISTS_COLLECTION.doc()
                await doc.set({
                    uid: currentUser.value.uid,
                    health: checklist.health,
                    finance: checklist.finance,
                    testament: checklist.testament,
                    funeral: checklist.funeral,
                    digital: checklist.digital,
                    pet: checklist.pet,
                    bucketlist: checklist.bucketlist,
                    create_at: Date.now(),
                })
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then(async(querySnapshot) => {
                        const documentSnapshot = querySnapshot.docs[0]
                        checklists.value = documentSnapshot.data()
                        onChecklistComplete()
                })
            } catch(error) {
                console.log('create db error by onCreateChecklists : ', error.message)
            }
        }

        const onChecklistComplete = () => {
            for(let index = 0; index < checklists.value.health.length; index++){
                if(checklists.value.health[index].iscomplete == true){
                    completeHealth.value.push(checklists.value.health[index])
                }
            }
            for(let index = 0; index < checklists.value.finance.length; index++){
                if(checklists.value.finance[index].iscomplete == true){
                    completeFinance.value.push(checklists.value.finance[index])
                }
            }
            for(let index = 0; index < checklists.value.testament.length; index++){
                if(checklists.value.testament[index].iscomplete == true){
                    completeTestament.value.push(checklists.value.testament[index])
                }
            }
            for(let index = 0; index < checklists.value.funeral.length; index++){
                if(checklists.value.funeral[index].iscomplete == true){
                    completeFuneral.value.push(checklists.value.funeral[index])
                }
            }
            for(let index = 0; index < checklists.value.digital.length; index++){
                if(checklists.value.digital[index].iscomplete == true){
                    completeDigital.value.push(checklists.value.digital[index])
                }
            }
            for(let index = 0; index < checklists.value.pet.length; index++){
                if(checklists.value.pet[index].iscomplete == true){
                    completePet.value.push(checklists.value.pet[index])
                }
            }
            for(let index = 0; index < checklists.value.bucketlist.length; index++){
                if(checklists.value.bucketlist[index].iscomplete == true){
                    completeBucketlist.value.push(checklists.value.bucketlist[index])
                }
            }
        }

        const showVueDaumPostcode = () => [
            addressState.value = true
        ]
        const onComplete = (result) => {
            userAddress.value = result.address
            addressState.value = false
        }

        const onSaveStep1 = () => {
            step1.value =false
            step2.value =true
            window.scrollTo(0,0)
        }

        const onSaveStep2 = async () => {
            try {
                await USER_COLLECTION.doc(currentUser.value.uid).update({
                    username: userName.value,
                    address: userAddress.value+" "+userDetailAddress.value
                })
                store.commit('SET_USERNAME', userName.value)
                store.commit('SET_ADDRESS', userAddress.value+" "+userDetailAddress.value)
            } catch(error) {
                console.log('step2 error', error)
            }
            step2.value = false
            userInfoState.value = false
            step3.value = true
            checklistState.value = true
            window.scrollTo(0,0)
        }


        const onPrevStep2 = () => {
            step2.value = false
            step1.value = true
            window.scrollTo(0,0)
        }

        const onPrevStep3 = () => {
            step3.value = false            
            step2.value = false
            checklistState.value = false
            step1.value = true
            userInfoState.value = true
            window.scrollTo(0,0)
        }

        return {
            currentUser,
            stepState,
            step1,
            step2,
            step3,
            step4,

            onComplete,

            onSaveStep1,
            onSaveStep2,

            onPrevStep2,
            onPrevStep3,

            userName,
            userAddress,
            userDetailAddress,
            addressState,
            userInfoState,
            showVueDaumPostcode,
            checklists,
            checklistState,

            completeHealth,
            completeFinance,
            completeTestament,
            completeFuneral,
            completeDigital,
            completePet,
            completeBucketlist,
        }
        
    }

}
</script>

<style>

</style>