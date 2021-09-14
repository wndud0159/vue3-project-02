<template>
    <div class="flex flex-col h-screen overflow-y-scroll items-center pt-24 pb-48 md:pb-10 px-3 md:px-20">
        <div class="mb-10">
            <img class="object-cover border-4 border-gray-100 w-24 h-24 rounded-full" src="/maru_beta_image.png" alt="">
        </div>
        <!-- title section -->
        <div v-if="stepState" class="flex flex-col items-center text-2xl md:text-4xl mb-10 font-bold text-gray-700 w-7/8 md:w-4/6">
            <div v-if="step1">안녕하세요? 마루에요 이름을 입력해주세요.</div>
            <div v-if="step2">{{userName}}님 반갑습니다 주소를 적어주세요.</div>
            <div v-if="step3" @click="onPrevStep3">모두 완료 하셨습니다. 결과 확인하기</div>
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
import {ref, computed} from 'vue'
import store from '../store'
import {USER_COLLECTION} from '../firebase'
import {useRouter} from 'vue-router'
import {VueDaumPostcode} from 'vue-daum-postcode'

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

        const checklistState = ref(false)

        const userName = ref('')
        const userAddress = ref('')
        const userDetailAddress = ref('')
        const userInfoState = ref(true)
        
        const addressState = ref(false)

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
        }
        
    }

}
</script>

<style>

</style>