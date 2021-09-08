<template>
  <div class="flex flex-col h-screen overflow-y-scroll items-center pt-20 pb-48 md:pb-10 px-3 md:px-20">
        <div class="mb-10">
            <img class="object-cover w-20 h-20 rounded-full" src="/profile.jpeg" alt="">
        </div>
        <!-- title section -->
        <div v-if="stepState" class="mb-10 text-2xl md:text-4xl font-bold text-gray-500">
            <div v-if="step1">안녕하세요 원하시는걸 선택해주세요</div>
            <div v-if="step2">당신의 이름은 무엇입니까?</div>
            <div v-if="step3">{{}}님 안녕하세요 주소를 적어주세요</div>
            <div v-if="step4">모두 완료 하셨습니다. 결과 확인하기</div>
        </div>

        <!-- checklist section -->
        <div v-if="checklistState">
        <div class="w-full mb-5">
            <div class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-heart text-white bg-red-300 px-3 py-2 rounded-full text-3xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">/4</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">건강</div>
                            <div>건강에 대한 결정권</div>
                        </div>
                    </div>
                </div>
                <input v-model="checklistSelection" value="heart" class="w-6 h-6" type="checkbox">
            </div>
            </div>

            <div class="w-full mb-5">
            <div @click="showfinanceLists" class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-briefcase text-white bg-green-600 opacity-70 px-3 py-2 rounded-full text-3xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">/4</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">재무/법률</div>
                            <div>법률 문서, 자산 정보, 피부양자 계획 등을 찾을 수 있는 곳</div>
                        </div>
                    </div>
                </div>
                <input v-model="checklistSelection" value="finance" class="w-6 h-6" type="checkbox">
            </div>
            </div>

            <div  class="w-full mb-5">
            <div class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-chalkboard text-white bg-yellow-500 opacity-70 px-3 py-2.5 rounded-full text-2xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">/5</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">디지털</div>
                            <div>소셜 미디어, 이메일, 디지털 파일 등으로 해야 할 일</div>
                        </div>
                    </div>
                </div>
                <input v-model="checklistSelection" value="digital" class="w-6 h-6" type="checkbox">
            </div>
            </div>
            
            <div class="w-full mb-5">
            <div class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-infinity text-white bg-purple-400 opacity-70 px-3 py-2.5 rounded-full text-2xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">/4</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">유지/유가족</div>
                            <div>당신을 기억하는 방법, 전할 메세지 등</div>
                        </div>
                    </div>
                </div>
                <input v-model="checklistSelection" value="maintain" class="w-6 h-6" type="checkbox">
            </div>
            </div>

            <div  class="w-full mb-5">
            <div  class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
                <div class="flex items-center">
                    <div class=" relative">
                        <i class="fas fa-paw text-white bg-blue-300 opacity-70 px-3 py-2 rounded-full text-3xl"></i>
                        <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">/1</div>
                    </div>
                    <div class="flex ml-5">
                        <div class=" space-y-2 md:space-y-1">
                            <div class="-mb-1">애완동물</div>
                            <div>당신의 애완동물에 대해서</div>
                        </div>
                    </div>
                </div>
                <input v-model="checklistSelection" value="pets" class="w-6 h-6" type="checkbox">
            </div>
            </div>

        </div>

        <!-- button section -->
        <div v-if="stepState" class="flex  justify-center w-full mt-10 space-x-4">
            <button v-if="step1" @click="onSaveStep1" class=" bg-yellow-300 py-3 px-10 rounded-lg">시작하기</button>    
            <button v-if="step2" @click="onPrevStep2" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="step2" @click="onSaveStep2" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>    
            <button v-if="step3" @click="onPrevStep3" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="step3" @click="onSaveStep3" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>    
        </div>

            
            
        <Heart v-if="heartState" @state-incomplete="onPrev()" @state-complete="onNext()"/>
        <Finance v-if="financeState" @state-incomplete="onPrev()" @state-complete="onNext()"/>
        <Digital v-if="digitalState" @state-incomplete="onPrev()" @state-complete="onNext()"/>
        <Maintain v-if="maintainState" @state-incomplete="onPrev()" @state-complete="onNext()"/>
        <Pets v-if="petsState" @state-incomplete="onPrev()" @state-complete="onNext()"/>


        

  </div>
</template>

<script>
import {ref, computed, onBeforeMount} from 'vue'
import {USER_COLLECTION} from '../firebase'
import firebase from 'firebase'
import store from '../store'
import Heart from '../components/Heart.vue'
import Finance from '../components/Finance.vue'
import Digital from '../components/Digital.vue'
import Maintain from '../components/Maintain.vue'
import Pets from '../components/Pets.vue'

export default {

    components: {
        Heart,
        Finance,
        Digital,
        Maintain,
        Pets
    },
    setup() {

        const currentUser = computed(() => store.state.user)

        const orderCount = ref(0)

        const nextOrPrev = ref(true)

        const step1 = ref(true)
        const step2 = ref(false)
        const step3 = ref(false)
        const step4 = ref(false)
        const stepState = ref(true)
        const checklistState = ref(true)

        const checklistSelection = ref([])

        const heartState = ref(false)
        const financeState = ref(false)
        const digitalState = ref(false)
        const maintainState = ref(false)
        const petsState = ref(false)


        onBeforeMount(() => {
        })

        const onSaveStep1 = async () => {
            try {
                await USER_COLLECTION.doc(currentUser.value.uid).update({
                    mychecklist_count: orderCount.value,
                    mychecklist_selection: checklistSelection.value
                })
                await store.commit("SET_MYCHECKLIST_COUNT", orderCount.value)
                await store.commit("SET_MYCHECKLIST_SELECTION", checklistSelection.value)
                checklistSelection.value = []
            } catch (error) {
                console.log(`error:${error}`)
            }
            if(currentUser.value.address === '') {
                step1.value = false
                checklistState.value = false
                step2.value = true
            } else {
                step1.value = false
                checklistState.value = false
                stepState.value = false
                onCheckOrderCount()  
            }
        }
        const onSaveStep2 = async () => {
            step2.value = false
            step3.value = true
        }
        const onSaveStep3 = async () => {
            step3.value = false
            stepState.value = false
            checklistState.value = false
            onCheckOrderCount()
        }
        

        const onPrevStep2 = () => {
            step2.value = false
            step1.value = true
            checklistState.value = true
        }
        const onPrevStep3 = () => {
            step3.value = false
            step2.value = true
        }

        const onPrev = () => {
            nextOrPrev.value = false
            if(currentUser.value.mychecklist_count == 1) {
                heartState.value = false
                financeState.value = false
                digitalState.value = false
                maintainState.value = false
                petsState.value = false
                step1.value = true
                stepState.value = true
                checklistState.value = true
                return
            }
            onCheckOrderCount()
        }

        const onNext = () => {
            nextOrPrev.value = true
            if(currentUser.value.mychecklist_count == currentUser.value.mychecklist_selection.length) {
                heartState.value = false
                financeState.value = false
                digitalState.value = false
                maintainState.value = false
                petsState.value = false
                stepState.value = true
                step4.value = true
                return
            }
            onCheckOrderCount()
        }

        const onCheckOrderCount = async () => {
            if(currentUser.value.mychecklist_count < currentUser.value.mychecklist_selection.length) {
                if(currentUser.value.mychecklist_count >= 0) {
                    if(nextOrPrev.value) {
                        await USER_COLLECTION.doc(currentUser.value.uid).update({
                            mychecklist_count: firebase.firestore.FieldValue.increment(1),
                        })
                        store.commit("SET_MYCHECKLIST_COUNT", currentUser.value.mychecklist_count+1)
                    } else {
                        await USER_COLLECTION.doc(currentUser.value.uid).update({
                            mychecklist_count: firebase.firestore.FieldValue.increment(-1),
                        })
                        store.commit("SET_MYCHECKLIST_COUNT", currentUser.value.mychecklist_count-1)
                    }
                showChecklist()
                }
            }
        }

        const showChecklist = () => {
            if(currentUser.value.mychecklist_selection[currentUser.value.mychecklist_count-1] === 'heart') {
                heartState.value = true
                financeState.value = false
                digitalState.value = false
                maintainState.value = false
                petsState.value = false
                return
            }
            if(currentUser.value.mychecklist_selection[currentUser.value.mychecklist_count-1] === 'finance') {
                financeState.value = true
                heartState.value = false
                digitalState.value = false
                maintainState.value = false
                petsState.value = false
                return
            }
            if(currentUser.value.mychecklist_selection[currentUser.value.mychecklist_count-1] === 'digital') {
                digitalState.value = true
                financeState.value = false
                heartState.value = false
                maintainState.value = false
                petsState.value = false
                return
            }
            if(currentUser.value.mychecklist_selection[currentUser.value.mychecklist_count-1] === 'maintain') {
                maintainState.value = true
                digitalState.value = false
                financeState.value = false
                heartState.value = false
                petsState.value = false
                return
            }
            if(currentUser.value.mychecklist_selection[currentUser.value.mychecklist_count-1] === 'pets') {
                petsState.value = true
                maintainState.value = false
                digitalState.value = false
                financeState.value = false
                heartState.value = false
                return
            }           
        }
        
        return {
            step1,
            step2,
            step3,
            step4,
            stepState,

            onSaveStep1,
            onSaveStep2,
            onSaveStep3,

            onPrevStep2,
            onPrevStep3,

            onNext,
            onPrev,

            checklistSelection,
            checklistState,
            onCheckOrderCount,
            showChecklist,

            heartState,
            financeState,
            digitalState,
            maintainState,
            petsState,
        }
    }

}
</script>

<style>

</style>