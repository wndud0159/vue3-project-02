<template>
    <!-- question section -->
    <div class=" mb-10 text-2xl md:text-4xl font-bold text-gray-700 w-7/8 md:w-4/6">
        <div v-if="step1" class="flex flex-col items-center space-y-1">
            <div>{{financeMainTitle[0]}}</div>
        </div>
        <div v-if="step2" class="flex flex-col items-center space-y-1">
            <div>{{financeMainTitle[1]}}</div>
        </div>
        <div v-if="step3" class="flex flex-col items-center space-y-1">
            <div>{{financeMainTitle[2]}}</div>
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox1" class="w-8 h-8" type="radio" value="네"><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox1" class="w-8 h-8" type="radio" value="아니요"><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox1" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox1" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="financeText1" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="2">
            </textarea>
        </div>
    </div>

    <!-- step2 -->
    <div v-if="step2" class="w-full">
        <!-- radio section -->
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox2" class="w-8 h-8" type="radio" value="네"><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox2" class="w-8 h-8" type="radio" value="아니요"><span>아니요</span>
            </div>
        </div>
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox2" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox2" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox2" class="w-8 h-8" type="checkbox" value="선택형3"><span>선택형3</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="financeText2" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
             rows="2">
            </textarea>
        </div>
    </div>

    <!-- step3 -->
    <div v-if="step3" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox3" class="w-8 h-8" type="radio" value="네"><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox3" class="w-8 h-8" type="radio" value="아니요"><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox3" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="financeBox3" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div>
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="financeText3" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="2">
            </textarea>
        </div>
    </div>

    
    <!-- button section -->
    <div class="flex  justify-center w-full">
        <div v-if="step1" class=" space-x-4">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="!financeText1 && !financeBox1.length" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>    
            <button v-if="financeText1 || financeBox1.length" @click="onSaveStep1" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>
        </div> 
        <div v-if="step2" class=" space-x-4"> 
            <button @click="onPrevStep2" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="!financeText2 && !financeBox2.length" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>    
            <button v-if="financeText2 || financeBox2.length" @click="onSaveStep2" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>
        </div>
        <div v-if="step3" class=" space-x-4">
            <button @click="onPrevStep3" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="!financeText3 && !financeBox3.length" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>  
            <button v-if="financeText3 || financeBox3.length" @click="onSaveStep3" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>  
        </div>  
    </div>
</template>

<script>
import {ref, onBeforeMount, computed} from 'vue'
import store from '../store'
import {FINANCE_COLLECTION} from '../firebase'
export default {
    emits: ["state-complete", 'state-incomplete'],
    setup(pops, {emit}) {


        const currentUser = computed(() => store.state.user)

        const step1 = ref(true)
        const step2 = ref(false)
        const step3 = ref(false)

        const finance = ref([
            {
                title: [],
                box: [],
                text: [],
            },
            {
                title: [],
                box: [],
                text: [],
            },
            {
                title: [],
                box: [],
                text: [],
            }
        ])
        
        const financeMainTitle = ref([
            '재무1',
            '재무2',
            '재무3',
        ])
        const financeSubTitle = ref([
        
        ])
        const financeBox1 = ref([])
        const financeText1 = ref('')
        const financeBox2 = ref([])
        const financeText2 = ref('')
        const financeBox3 = ref([])
        const financeText3 = ref('')

        onBeforeMount(() => {
            console.log(finance.value)
        })

        const onCreateFinance = async () => {
            try {
                const doc = FINANCE_COLLECTION.doc()
                await doc.set({
                    uid: currentUser.value.uid,
                    title: [],
                    box: [],
                    text: [],
                    create_at: Date.now(),
                })
            } catch(error) {
                console.log('create db error by finance : ', error.message)
            }
        }

        const onSaveStep1 = () => {
            finance.value[0].title.push(financeMainTitle.value[0])
            finance.value[0].box.push(financeBox1.value)
            finance.value[0].text.push(financeText1.value)
            console.log('첫번째',finance.value)
            step1.value = false
            step2.value = true
        }
        const onSaveStep2 = () => {
            finance.value[1].title.push(financeMainTitle.value[1])
            finance.value[1].box.push(financeBox2.value)
            finance.value[1].text.push(financeText2.value)
            console.log('두번째',finance.value)
            step2.value = false
            step3.value = true
        }
        const onSaveStep3 = () => {
            finance.value[2].title.push(financeMainTitle.value[2])
            finance.value[2].box.push(financeBox3.value)
            finance.value[2].text.push(financeText3.value)
            console.log('세번째',finance.value)
            emit('state-complete')
        }

        const onPrevStep1 = () => {
            emit('state-incomplete')
        }
        const onPrevStep2 = () => {
            step2.value = false
            step1.value = true
        }
        const onPrevStep3 = () => {
            step3.value = false
            step2.value = true
        }

        return {
            step1,
            step2,
            step3,


            onSaveStep1,
            onSaveStep2,
            onSaveStep3,

            onPrevStep1,
            onPrevStep2,
            onPrevStep3,

            financeMainTitle,

            financeBox1,
            financeText1,
            financeBox2,
            financeText2,
            financeBox3,
            financeText3,
            
        }

    }


}
</script>

<style>

</style>