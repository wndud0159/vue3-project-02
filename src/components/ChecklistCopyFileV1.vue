<template>
    <!-- question section -->
    <div class=" mb-10 text-2xl md:text-4xl font-bold text-gray-700 w-7/8 md:w-4/6">
        <div v-if="step1" class="flex flex-col items-center space-y-1">
            <div>{{heartMainTitle[0]}}</div>
        </div>
        <div v-if="step2" class="flex flex-col items-center space-y-1">
            <div>{{heartMainTitle[1]}}</div>
        </div>
        <div v-if="step3" class="flex flex-col items-center space-y-1">
            <div>{{heartMainTitle[2]}}</div>
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1" class="w-full">
        <!-- radio section -->
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox1" class="w-8 h-8" type="radio" value=true><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox1" class="w-8 h-8" type="radio" value=false><span>아니요</span>
            </div>
        </div>
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox1" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox1" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="heartText1" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="2">
            </textarea>
        </div>
    </div>

    <!-- step2 -->
    <div v-if="step2" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox2" class="w-8 h-8" type="radio" value="네"><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox2" class="w-8 h-8" type="radio" value="아니요"><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox2" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox2" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox2" class="w-8 h-8" type="checkbox" value="선택형3"><span>선택형3</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="heartText2" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
             rows="2">
            </textarea>
        </div>
    </div>

    <!-- step3 -->
    <div v-if="step3" class="w-full">
        <!-- radio section -->
        <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox3" class="w-8 h-8" type="radio" value=true><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox3" class="w-8 h-8" type="radio" value=false><span>아니요</span>
            </div>
        </div>
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox3" class="w-8 h-8" type="checkbox" value="사전연명치료금지서"><span>사전연명치료금지서</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="heartBox3" class="w-8 h-8" type="checkbox" value="의료대리인"><span>의료대리인</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="heartText3" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="2">
            </textarea>
        </div>
    </div>

    
    <!-- button section -->
    <div class="flex  justify-center w-full">
        <div v-if="step1" class=" space-x-4">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="!heartText1 && !heartBox1.length" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>    
            <button v-if="heartText1 || heartBox1.length" @click="onSaveStep1" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>
        </div> 
        <div v-if="step2" class=" space-x-4"> 
            <button @click="onPrevStep2" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="!heartText2 && !heartBox2.length" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>    
            <button v-if="heartText2 || heartBox2.length" @click="onSaveStep2" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>
        </div>
        <div v-if="step3" class=" space-x-4">
            <button @click="onPrevStep3" class=" bg-gray-100 py-3 px-10 rounded-lg">이전으로</button>    
            <button v-if="!heartText3 && !heartBox3.length" class=" bg-gray-100 py-3 px-10 rounded-lg">다음으로</button>  
            <button v-if="heartText3 || heartBox3.length" @click="onSaveStep3" class=" bg-yellow-300 py-3 px-10 rounded-lg">다음으로</button>  
        </div>  
    </div>
</template>

<script>
import {ref, onBeforeMount, computed} from 'vue'
import store from '../store'
import {CHECKLISTS_COLLECTION, USER_COLLECTION} from '../firebase'
export default {
    emits: ["state-complete", 'state-incomplete'],
    setup(pops, {emit}) {


        const currentUser = computed(() => store.state.user)

        const step1 = ref(true)
        const step2 = ref(false)
        const step3 = ref(false)

        const heart = ref([])
        
        const heartMainTitle = ref([
            '1. 당신은 장기 기증자 입니까?',
            '2. 의사 소통이 불가능한 경우 의료 결정을 대신하여 누구를 신뢰합니까?',
            '3. 중요한 의료 문서나 정보가 있습니까? 있다면 입력해주세요.',
        ])
        const heartSubTitle = ref([
        
        ])
        const heartBox1 = ref([])
        const heartText1 = ref('')
        const heartBox2 = ref([])
        const heartText2 = ref('')
        const heartBox3 = ref([])
        const heartText3 = ref('')

        onBeforeMount(async() => {
             try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    if(querySnapshot.docs.length > 0) {
                        const documentSnapshot = querySnapshot.docs[0]
                        console.log('documentSnapshot length : ', documentSnapshot.data().heart.length)
                        if(documentSnapshot.data().heart.length == 0) {
                            console.log('new checklist')
                        }else if(documentSnapshot.data().heart.length == 1) {
                            heart.value = documentSnapshot.data().heart
                            step1.value = false
                            step2.value = false
                            step2.value = true
                        }else if(documentSnapshot.data().heart.length == 2) {
                            heart.value = documentSnapshot.data().heart
                            step1.value = false
                            step3.value = false
                            step3.value = true
                        }
                    } else {
                        console.log('not found firebase db checklists collection by else')
                    }
                })
            } catch(error) {
                console.log('not found firebase db checklists collection by catch', error.message)
            }
        })

        const onAddHeart = async () => {
            await heart.value.push(
                {
                    title: [],
                    box: [],
                    text: [],
                }
            )
        }

        const onDeleteHeart = () => {
            heart.value.pop()
        }

        const onCreateChecklists = async () => {
            try {
                const doc = CHECKLISTS_COLLECTION.doc()
                await doc.set({
                    uid: currentUser.value.uid,
                    hearts: heart.value,
                    finance: [],
                    digital: [],
                    maintain: [],
                    pets: [],
                    create_at: Date.now(),
                })
            } catch(error) {
                console.log('create db error by heart : ', error.message)
            }
        }

        const onSaveStep1 = async () => {
            onAddHeart()
            heart.value[0].box.push(heartBox1.value)
            heart.value[0].text.push(heartText1.value)
            heartBox1.value = []
            heartText1.value = ''
            step1.value = false
            step2.value = true

            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    if(querySnapshot.docs.length > 0) {
                        querySnapshot.docs[0].ref.update({
                            heart: heart.value,
                            create_at: Date.now(),
                        })                 
                    } else {
                        console.log('not found firebase db checklists collection')
                        onCreateChecklists()
                    }
                })
            } catch(error) {
                console.log('heart step1 error : ', error.message)
            }
        }
        const onSaveStep2 = async () => {
            onAddHeart()
            heart.value[1].text.push(heartText2.value)
            heartBox2.value = []
            heartText2.value = ''
            step2.value = false
            step3.value = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            heart: heart.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('heart step2 error : ', error.message)
            }
        }
        const onSaveStep3 = async () => {
            onAddHeart()
            for(let index = 0; index < heart.value.length; index++) {
                heart.value[index].title.push(heartMainTitle.value[index])
            }
            heart.value[2].box.push(heartBox3.value)
            heart.value[2].text.push(heartText3.value)
            heartBox3.value = []
            heartText3.value = ''
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            heart: heart.value,
                            create_at : Date.now(),
                        })
                    })
                })
            } catch(error) {
                console.log('heart step3 error : ', error.message)
            }
            emit('state-complete')
        }

        const onPrevStep1 = () => {
            emit('state-incomplete')
        }
        const onPrevStep2 = () => {
            step2.value = false
            step1.value = true
            onDeleteHeart()
        }
        const onPrevStep3 = () => {
            step3.value = false
            step2.value = true
            onDeleteHeart()
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

            heartMainTitle,

            heartBox1,
            heartText1,
            heartBox2,
            heartText2,
            heartBox3,
            heartText3,
            
        }

    }


}
</script>

<style>

</style>