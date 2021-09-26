<template>
    <div class="flex flex-col  items-center w-full  px-3">
        
        <!-- top section by image, title -->
        <div class="  w-full flex flex-col justify-center items-center rounded-sm pb-8 pt-8">
            <!-- image section -->
            <img class="object-cover w-40 h-40 rounded-full mb-8" src="/maru.png" alt="">
            <!-- title section -->
            <div v-if="stepState" class="flex flex-col items-center text-2xl md:text-4xl font-semibold w-full ">
                <div v-if="step1">안녕하세요? 마루에요 이름을 입력해주세요.</div>
                <div v-if="step2">{{userName}}님 반갑습니다 주소를 적어주세요.</div>
                <div v-if="step3" class="w-full text-center">
                    <div> {{currentUser.username}}님, 저는 ‘마루’에요. 아래 질문에 하나하나 답하다 보면 좋은 마무리를 위한 삶의 이정표가 완성될 거에요</div>
                </div>
            </div>
        </div>
        <!-- userInfo section -->
        <div v-if="userInfoState" class="w-full mb-8 flex flex-col items-center text-xl">
                <input v-model="userName" v-if="step1" type="text" class="md:w-96 w-full text-center border border-gray-300 focus:ring-2 focus:outline-none rounded-lg px-4 py-4">
                <div v-if="step2" class="w-full flex flex-col relative items-center space-y-5">
                <input @click="showVueDaumPostcode" readonly v-model="userAddress" placeholder="도로명 입력" type="text" class="md:w-96  w-full text-center border border-gray-300 focus:ring-2 focus:outline-none rounded-lg px-4 py-4">
                <input v-model="userDetailAddress" placeholder="상세주소 입력" type="text" class="md:w-96  w-full text-center border border-gray-300 focus:ring-2 focus:outline-none rounded-lg px-4 py-4">
                <VueDaumPostcode class="w-full md:w-1/2 absolute -top-5" v-if="addressState" @complete="onComplete" />
                </div>
        </div>

        <!-- new checklist -->
        <div v-if="checklistState" class="w-full ">
            <div class="md:flex">
            <!-- health -->
            <router-link to="/health" class=" flex w-full md:w-1/2 border border-gray-100 shadow-md rounded-sm mb-5 md:mr-2 items-center py-5 px-5 md:px-10 cursor-pointer ">
                <div class=" space-y-2">
                    <div class="flex items-center">
                        <div class="text-2xl font-semibold mr-1">건강</div>
                        <div class="-mb-2">{{completeHealth.length}} / 4</div>
                    </div>
                    <div>건강에 대한 결정권</div>
                    <button class="bg-light text-white px-5 py-2 rounded-full">시작하기</button>
                </div>
                <div class=" flex-1 flex justify-end">
                    <img src="/health.png" class="w-20 h-20" alt="">
                </div>
            </router-link>

            <!-- finance -->
            <router-link to="/finance" class="flex w-full md:w-1/2 border border-gray-100 shadow-md rounded-sm mb-5 md:ml-2 items-center py-5 px-5 md:px-10 cursor-pointer">
                <div class=" space-y-2">
                    <div class="flex items-center">
                        <div class="text-2xl font-semibold mr-1">재무</div>
                        <div class="-mb-2">{{completeFinance.length}} / 4</div>
                    </div>
                    <div>자산을 알맞게 처리할 권리</div>
                    <button class="bg-light text-white px-5 py-2 rounded-full">시작하기</button>
                </div>
                <div class=" flex-1 flex justify-end">
                    <img src="/finance.png" class="w-20 h-20" alt="">
                </div>
            </router-link>
            </div>
            <div class="md:flex">
            <!-- testament -->
            <router-link to="/testament" class="flex w-full md:w-1/2 border border-gray-100 shadow-md rounded-sm mb-5 md:mr-2 items-center py-5 px-5 md:px-10 cursor-pointer">
                <div class=" space-y-2">
                    <div class="flex items-center">
                        <div class="text-2xl font-semibold mr-1">유언</div>
                        <div class="-mb-2">{{completeTestament.length}} / 4</div>
                    </div>
                    <div>마지막 말과 생각을 남길 권리</div>
                    <button class="bg-light text-white px-5 py-2 rounded-full">시작하기</button>
                </div>
                <div class=" flex-1 flex justify-end">
                    <img src="/testament.png" class="w-20 h-20" alt="">
                </div>
            </router-link>

            <!-- funeral -->
            <router-link to="/funeral" class="flex w-full md:w-1/2 border border-gray-100 shadow-md rounded-sm mb-5 md:ml-2 items-center py-5 px-5 md:px-10 cursor-pointer">
                <div class=" space-y-2">
                    <div class="flex items-center">
                        <div class="text-2xl font-semibold mr-1">장례식</div>
                        <div class="-mb-2">{{completeFuneral.length}} / 4</div>
                    </div>
                    <div>삶을 추모하고 유족을 위로할 권리</div>
                    <button class="bg-light text-white px-5 py-2 rounded-full">시작하기</button>
                </div>
                <div class=" flex-1 flex justify-end">
                    <img src="/funeral.png" class="w-20 h-20" alt="">
                </div>
            </router-link>
            </div>

            <div class="md:flex">
            <!-- digital -->
            <router-link to="/digital" class="flex w-full md:w-1/2 border border-gray-100 shadow-md rounded-sm mb-5 md:mr-2 items-center py-5 px-5 md:px-10 cursor-pointer">
                <div class=" space-y-2">
                    <div class="flex items-center">
                        <div class="text-2xl font-semibold mr-1">디지털</div>
                        <div class="-mb-2">{{completeDigital.length}} / 4</div>
                    </div>
                    <div>디지털 정보를 정리할 권리</div>
                    <button class="bg-light text-white px-5 py-2 rounded-full">시작하기</button>
                </div>
                <div class=" flex-1 flex justify-end">
                    <img src="/digital.png" class="w-20 h-20" alt="">
                </div>
            </router-link>

            <!-- pet -->
            <router-link to="/pet" class="flex w-full md:w-1/2 border border-gray-100 shadow-md rounded-sm mb-5 md:ml-2 items-center py-5 px-5 md:px-10 cursor-pointer">
                <div class=" space-y-2">
                    <div class="flex items-center">
                        <div class="text-2xl font-semibold mr-1">반려동물</div>
                        <div class="-mb-2">{{completePet.length}} / 1</div>
                    </div>
                    <div>반려동물과의 마지막 삶</div>
                    <button class="bg-light text-white px-5 py-2 rounded-full">시작하기</button>
                </div>
                <div class=" flex-1 flex justify-end">
                    <img src="/pet.png" class="w-20 h-20" alt="">
                </div>
            </router-link>
            </div>
            
            <div class="md:flex">
            <!-- bucketlist -->
            <router-link to="/bucketlist" class="flex w-full md:w-1/2 border border-gray-100 shadow-md rounded-sm mb-5 md:mr-2 items-center py-5 px-5 md:px-10 cursor-pointer">
                <div class=" space-y-2">
                    <div class="flex items-center">
                        <div class="text-2xl font-semibold mr-1">버킷리스트</div>
                        <div class="-mb-2">{{completeBucketlist.length}} / 1</div>
                    </div>
                    <div>삶을 충만하게 채울 권리</div>
                    <button class="bg-light text-white px-5 py-2 rounded-full">시작하기</button>
                </div>
                <div class=" flex-1 flex justify-end">
                    <img src="/bucketlist.png" class="w-20 h-20" alt="">
                </div>
            </router-link>

            <!-- will -->
            <router-link to="/will" class="flex w-full md:w-1/2 border border-gray-100 shadow-md rounded-sm mb-5 md:ml-2 items-center py-5 px-5 md:px-10 cursor-pointer">
                <div class=" space-y-2">
                    <div class="flex items-center">
                        <div class="text-2xl font-semibold mr-1">유언장 작성</div>
                    </div>
                    <div>답변을 통한 유언장 만들기</div>
                    <button class="bg-light text-white px-5 py-2 rounded-full">시작하기</button>
                </div>
                <div class=" flex-1 flex justify-end">
                    <img src="/will.png" class="w-20 h-20" alt="">
                </div>
            </router-link>
            </div>
            <div @click="onPrevStep3" class=" cursor-pointer underline text-blue-800">이름,주소 다시 입력하기</div>
            
        </div>




        <!-- button section -->
        <div v-if="stepState" class="flex  justify-center w-full">
            <div v-if="step1" class=" space-x-4 w-full flex justify-center"> 
                <button v-if="!userName" class="w-full bg-gray-100 py-3 md:w-96  rounded-lg">다음으로</button>    
                <button v-if="userName" @click="onSaveStep1" class=" bg-primary py-3 text-white w-full md:w-96 rounded-lg">다음으로</button>
            </div>
            <div v-if="step2" class=" w-full flex justify-center">
                <button @click="onPrevStep2" class=" bg-gray-100 w-1/2 md:w-44 mr-8 py-3 rounded-lg">이전으로</button>    
                <button v-if="!userAddress || !userDetailAddress" class=" bg-gray-100 w-1/2 py-3 md:w-44  rounded-lg">다음으로</button>  
                <button v-if="userAddress && userDetailAddress" @click="onSaveStep2" class="bg-primary text-white w-1/2 md:w-44 py-3  rounded-lg">다음으로</button>  
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