<template>
<div class="flex flex-col h-screen overflow-y-scroll items-center pt-24 pb-48 md:pb-10 px-3 md:px-20">
    <!-- image section by maru -->
    <div class="mb-10">
            <img class="object-cover border-4 border-gray-100 w-24 h-24 rounded-full" src="/maru_beta_image.png" alt="">
    </div>
    <!-- question section -->
    <div v-if="bucketlist.length" class=" mb-10 text-2xl md:text-4xl font-bold text-gray-700 w-7/8 md:w-4/6">
        <div v-if="step1" class="flex flex-col items-center space-y-1">
            <div>1. {{bucketlist[0].question}}</div>
        </div>
    </div>


    <!-- step1 -->
    <div v-if="step1 && bucketlist.length" class="w-full">
        <!-- radio section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="bucketlist[0].answer_box" class="w-8 h-8" type="radio" value='네'><span>네</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="bucketlist[0].answer_box" class="w-8 h-8" type="radio" value='아니요'><span>아니요</span>
            </div>
        </div> -->
        <!-- checkbox section -->
        <!-- <div class="text-xl mb-10 flex flex-col items-center w-full space-y-3">
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="bucketlist[0].answer_box" class="w-8 h-8" type="checkbox" value="선택형1"><span>선택형1</span>
            </div>
            <div class="bg-gray-100 px-3 md:w-1/2 py-3 flex items-center space-x-2 w-full">
                <input v-model="bucketlist[0].answer_box" class="w-8 h-8" type="checkbox" value="선택형2"><span>선택형2</span>
            </div>
        </div> -->
        <!-- text section -->
        <div class="w-full flex justify-center mb-10">
            <textarea v-model="bucketlist[0].answer_text" placeholder="희망사항" class=" w-full resize-none md:w-1/2 outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
            rows="4">
            </textarea>
        </div>
    </div>

    
    <!-- button section -->
    <div v-if="bucketlist.length" class="flex  justify-center w-full">
        <div v-if="step1" class="">
            <button @click="onPrevStep1" class=" bg-gray-100 py-3 px-10 rounded-lg mr-5">이전으로</button>    
            <button v-if="!bucketlist[0].answer_text && !bucketlist[0].answer_box.length" class=" bg-gray-100 py-3 px-10 rounded-lg">저장 / 다음</button>    
            <button v-if="bucketlist[0].answer_text || bucketlist[0].answer_box.length" @click="onSaveStep1" class=" bg-yellow-300 py-3 px-10 rounded-lg">저장 / 다음</button>
            <div>
                <button @click="onLaterStep1" class="bg-green-400 py-3 px-10 rounded-lg mt-5 w-full">나중에 적겠습니다</button>
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

        const bucketlist = ref([])
              

        onBeforeMount(async() => {
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                    .then(async(querySnapshot) => {
                            const documentSnapshot = querySnapshot.docs[0]
                            bucketlist.value = await documentSnapshot.data().bucketlist
                    })
            } catch(error) {
                console.log('not found firebase db checklists collection by catch', error.message)
            }
            window.scrollTo(0,0)
        })




        const onSaveStep1 = async () => {
            bucketlist.value[0].iscomplete = true
            try {
                await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
                .then((querySnapshot) => {
                    if(querySnapshot.docs.length > 0) {
                        querySnapshot.docs[0].ref.update({
                            bucketlist: bucketlist.value,
                            create_at: Date.now(),
                        })                 
                    } else {
                        console.log('not found firebase db checklists collection')
                        onCreateChecklists()
                    }
                })
            } catch(error) {
                console.log('bucketlist step1 error : ', error.message)
            }
            router.push('/welldyingchecklist')
        }

        const onPrevStep1 = () => {
            router.push('/welldyingchecklist')
        }

        const onLaterStep1 = () => {
            router.push('/welldyingchecklist')
        }
        

        return {
            step1,
            


            onSaveStep1,
           

            onPrevStep1,
            

            onLaterStep1,
            


            bucketlist,
            
        }

    }


}
</script>

<style>

</style>