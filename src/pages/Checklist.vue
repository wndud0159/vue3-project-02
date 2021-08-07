<template>
    <div class="flex flex-col h-screen overflow-y-scroll  bg-gray-200 items-center pt-28 pb-48 md:pb-10 px-3 md:px-20">




        <div v-for="list in 1" :key="list" class="w-full mb-5">
        <div @click="showHeartLists" class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
            <div class="flex items-center">
                <div class=" relative">
                    <i class="fas fa-heart text-white bg-red-300 px-3 py-2 rounded-full text-3xl"></i>
                    <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{heartCount}}/5</div>
                </div>
                <div class="flex ml-5">
                    <div class=" space-y-2 md:space-y-1">
                        <div class="-mb-1">건강</div>
                        <div>귀하를 대신하여 말할 수 있는 케어 선호 사항 등</div>
                    </div>
                </div>
            </div>
            <i :class="`fas fa-chevron-down ${heartLists ? 'animate-bounce ' : ''}`"></i>
        </div>
        
        <div :class="`h-full  transition-all`" >
        <div v-if="heartLists"  class= " pt-1 w-full text-xs md:text-base shadow-md bg-white px-6 transition-all ">
            
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">당신은 장기 기증자 입니까?</div>
                                </div>
                                <span v-if="!heartResponse1 && !heartDetailLists1" class="text-gray-300">응답하지 않음</span>
                                <span v-if="heartResponse1" >{{heartBox1}}</span>
                                <div v-if="heartResponse1" class="pt-2">{{heartText1}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!heartResponse1 && !heartDetailLists1" @click="heartDetailLists1 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="heartResponse1" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="heartResponse1" @click="deleteHeartRequest1" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="heartDetailLists1" class="space-y-2 pt-2">
                                <div class="space-y-2 pb-4">
                                <div class="flex items-center space-x-1">
                                    <input type="radio" name="heartBox1" v-model="heartBox1" value="예"><span>예</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="radio" name="heartBox1" v-model="heartBox1" value="아니요"><span>아니요</span><br>
                                </div>
                                </div>
                                <div class="">
                                    <textarea name="heartText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="heartText1" rows="5"></textarea>
                                </div>
                                <button v-if="!heartText1 && !heartBox1" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="saveHeartRequest1" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelHeartRequest1" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="heartDetailLists1" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>dd</li>
                                <li>dd</li>
                                <li>dd</li>
                                <li>dd</li>
                            </ul>
                        </div>
                    </div>

                </div> 
            </div>
            
        </div>
        </div>


        </div>

    


    </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue'
export default {
    
    setup() {
        // onBeforeMount(() => {
        //    for (let index = 0; index < hearts.value.length; index++) {
        //        console.log(hearts.value[index])
               
        //    }
        //  hearts.value.forEach(element => {
        //        console.log(element.length)
        //    });
        // })
        // const hearts = ref(
        //     [
        //     'text'
        //     ],
        // )

        const heartLists = ref(false)
        const heartDetailLists1 = ref(false)
        const heartBox1 = ref('')
        const heartText1 = ref('')
        const heartCount = ref(0)
        const heartResponse1 = ref(false)

        const showHeartLists = () => {
            if(heartLists.value == true) {
                heartLists.value = false;
            } else {
                heartLists.value = true;
            }
        }

        const showHeartDetailLists1 = () => {
            if(heartDetailLists1.value == true) {
                heartDetailLists1.value = false
            } else {
                heartDetailLists1.value = true 
            }
        }

        const cancelHeartRequest1 = () => {
            heartBox1.value = ''
            heartText1.value = ''
            heartDetailLists1.value = false
            heartResponse1.value =false
        }

        const saveHeartRequest1 = () => { 
                heartResponse1.value = true
                heartDetailLists1.value = false
                heartCount.value++
        }

        const deleteHeartRequest1 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            heartBox1.value = ''
            heartText1.value = ''
            heartResponse1.value =false
            heartCount.value--
            }
        }

      

        

        return {
            heartLists,
            showHeartLists, 
            heartCount, 
            heartDetailLists1, 
            showHeartDetailLists1, 
            heartBox1, 
            heartText1, 
            heartResponse1, 
            cancelHeartRequest1, 
            saveHeartRequest1, 
            deleteHeartRequest1
        }
    }
}
</script>

<style>

</style>