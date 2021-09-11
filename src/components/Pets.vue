<template>
    <!-- question section -->
    <div class=" mb-10 text-2xl md:text-4xl font-bold text-gray-700 w-7/8 md:w-4/6">
        <div v-if="step1" class="flex flex-col items-center space-y-1">
            <div>{{petsMainTitle[0]}}</div>
        </div>
        <div v-if="step2" class="flex flex-col items-center space-y-1">
            <div>{{petsMainTitle[1]}}</div>
        </div>
        <div v-if="step3" class="flex flex-col items-center space-y-1">
            <div>{{petsMainTitle[2]}}</div>
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox1" class="w-8 h-8" type="radio" value="네"><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox1" class="w-8 h-8" type="radio" value="아니요"><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox1" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox1" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="petsText1" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="2">
            </textarea>
        </div>
    </div>

    <!-- step2 -->
    <div v-if="step2" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox2" class="w-8 h-8" type="radio" value="네"><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox2" class="w-8 h-8" type="radio" value="아니요"><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox2" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox2" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox2" class="w-8 h-8" type="checkbox" value="선택형3"><span>선택형3</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="petsText2" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
             rows="2">
            </textarea>
        </div>
    </div>

    <!-- step3 -->
    <div v-if="step3" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox3" class="w-8 h-8" type="radio" value="네"><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox3" class="w-8 h-8" type="radio" value="아니요"><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox3" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="petsBox3" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="petsText3" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="2">
            </textarea>
        </div>
    </div>

    
    <!-- button section -->
    <div class="flex  justify-center w-full">
        <div v-if="step1" class=" space-x-4">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="!petsText1 && !petsBox1.length" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>    
            <button v-if="petsText1 || petsBox1.length" @click="onSaveStep1" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>
        </div> 
        <div v-if="step2" class=" space-x-4"> 
            <button @click="onPrevStep2" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="!petsText2 && !petsBox2.length" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>    
            <button v-if="petsText2 || petsBox2.length" @click="onSaveStep2" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>
        </div>
        <div v-if="step3" class=" space-x-4">
            <button @click="onPrevStep3" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="!petsText3 && !petsBox3.length" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>  
            <button v-if="petsText3 || petsBox3.length" @click="onSaveStep3" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>  
        </div>  
    </div>
</template>

<script>
import {ref, onBeforeMount, computed} from 'vue'
import store from '../store'
import {PETS_COLLECTION} from '../firebase'
export default {
    emits: ["state-complete", 'state-incomplete'],
    setup(pops, {emit}) {


        const currentUser = computed(() => store.state.user)

        const step1 = ref(true)
        const step2 = ref(false)
        const step3 = ref(false)

        const pets = ref([
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
        
        const petsMainTitle = ref([
            '펫1',
            '펫2',
            '펫3',
        ])
        const petsSubTitle = ref([
        
        ])
        const petsBox1 = ref([])
        const petsText1 = ref('')
        const petsBox2 = ref([])
        const petsText2 = ref('')
        const petsBox3 = ref([])
        const petsText3 = ref('')

        onBeforeMount(() => {
            console.log(pets.value)
        })

        const onCreatePets = async () => {
            try {
                const doc = PETS_COLLECTION.doc()
                await doc.set({
                    uid: currentUser.value.uid,
                    title: [],
                    box: [],
                    text: [],
                    create_at: Date.now(),
                })
            } catch(error) {
                console.log('create db error by pets : ', error.message)
            }
        }

        const onSaveStep1 = () => {
            pets.value[0].title.push(petsMainTitle.value[0])
            pets.value[0].box.push(petsBox1.value)
            pets.value[0].text.push(petsText1.value)
            console.log('첫번째',pets.value)
            step1.value = false
            step2.value = true
        }
        const onSaveStep2 = () => {
            pets.value[1].title.push(petsMainTitle.value[1])
            pets.value[1].box.push(petsBox2.value)
            pets.value[1].text.push(petsText2.value)
            console.log('두번째',pets.value)
            step2.value = false
            step3.value = true
        }
        const onSaveStep3 = () => {
            pets.value[2].title.push(petsMainTitle.value[2])
            pets.value[2].box.push(petsBox3.value)
            pets.value[2].text.push(petsText3.value)
            console.log('세번째',pets.value)
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

            petsMainTitle,

            petsBox1,
            petsText1,
            petsBox2,
            petsText2,
            petsBox3,
            petsText3,
            
        }

    }


}
</script>

<style>

</style>