<template>
    
    <div class="flex flex-col h-screen overflow-y-scroll  bg-gray-200 items-center pt-28 lg:pt-40 pb-48 md:pb-10 px-3 md:px-20">



        <!-- heart -->
        <div v-for="list in 1" :key="list" class="w-full mb-5">
        <div @click="showHeartLists" class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
            <div class="flex items-center">
                <div class=" relative">
                    <i class="fas fa-heart text-white bg-red-300 px-3 py-2 rounded-full text-3xl"></i>
                    <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{heartCount}}/4</div>
                </div>
                <div class="flex ml-5">
                    <div class=" space-y-2 md:space-y-1">
                        <div class="-mb-1">건강</div>
                        <div>건강에 대한 결정권</div>
                    </div>
                </div>
            </div>
            <i :class="`fas fa-chevron-down ${heartLists ? 'animate-bounce ' : ''}`"></i>
        </div>
        </div>



        <!-- finance -->
        <div v-for="list in 1" :key="list" class="w-full mb-5">
        <div @click="showfinanceLists" class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
            <div class="flex items-center">
                <div class=" relative">
                    <i class="fas fa-briefcase text-white bg-green-600 opacity-70 px-3 py-2 rounded-full text-3xl"></i>
                    <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{financeCount}}/4</div>
                </div>
                <div class="flex ml-5">
                    <div class=" space-y-2 md:space-y-1">
                        <div class="-mb-1">재무/법률</div>
                        <div>법률 문서, 자산 정보, 피부양자 계획 등을 찾을 수 있는 곳</div>
                    </div>
                </div>
            </div>
            <i :class="`fas fa-chevron-down ${financeLists ? 'animate-bounce ' : ''}`"></i>
        </div>     
        </div>



        <!-- digital -->
        <div v-for="list in 1" :key="list" class="w-full mb-5">
        <div @click="showdigitalLists" class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
            <div class="flex items-center">
                <div class=" relative">
                    <i class="fas fa-chalkboard text-white bg-yellow-500 opacity-70 px-3 py-2.5 rounded-full text-2xl"></i>
                    <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{digitalCount}}/5</div>
                </div>
                <div class="flex ml-5">
                    <div class=" space-y-2 md:space-y-1">
                        <div class="-mb-1">디지털</div>
                        <div>소셜 미디어, 이메일, 디지털 파일 등으로 해야 할 일</div>
                    </div>
                </div>
            </div>
            <i :class="`fas fa-chevron-down ${digitalLists ? 'animate-bounce ' : ''}`"></i>
        </div>      
        </div>


        <!-- maintain -->
        <div v-for="list in 1" :key="list" class="w-full mb-5">
        <div @click="showmaintainLists" class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
            <div class="flex items-center">
                <div class=" relative">
                    <i class="fas fa-infinity text-white bg-purple-400 opacity-70 px-3 py-2.5 rounded-full text-2xl"></i>
                    <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{maintainCount}}/4</div>
                </div>
                <div class="flex ml-5">
                    <div class=" space-y-2 md:space-y-1">
                        <div class="-mb-1">유지/유가족</div>
                        <div>당신을 기억하는 방법, 전할 메세지 등</div>
                    </div>
                </div>
            </div>
            <i :class="`fas fa-chevron-down ${maintainLists ? 'animate-bounce ' : ''}`"></i>
        </div>
        </div>


        <!-- pets -->
        <div v-for="list in 1" :key="list" class="w-full mb-5">
        <div @click="showpetsLists" class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
            <div class="flex items-center">
                <div class=" relative">
                    <i class="fas fa-paw text-white bg-blue-300 opacity-70 px-3 py-2 rounded-full text-3xl"></i>
                    <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{petsCount}}/1</div>
                </div>
                <div class="flex ml-5">
                    <div class=" space-y-2 md:space-y-1">
                        <div class="-mb-1">애완동물</div>
                        <div>당신의 애완동물에 대해서</div>
                    </div>
                </div>
            </div>
            <i :class="`fas fa-chevron-down ${petsLists ? 'animate-bounce ' : ''}`"></i>
        </div>
        </div>

        <!-- pets -->
        <div v-for="list in 1" :key="list" class="w-full mb-5">
        <div @click="showpetsLists" class="text-xs md:text-base flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-between border-b border-gray-200 ">
            <div class="flex items-center">
                <div class=" relative">
                    <i class="fas fa-fill text-white bg-primary opacity-70 px-3 py-2 rounded-full text-3xl"></i>
                    <div class=" absolute bg-light text-sm rounded-full -bottom-3 ml-8 opacity-90 px-2 border-2 border-white">{{petsCount}}/1</div>
                </div>
                <div class="flex ml-5">
                    <div class=" space-y-2 md:space-y-1">
                        <div class="-mb-1">유언장 작성 및 상속 설계</div>
                        <div>자산을 입력하고 상속을 설계해 보세요</div>
                    </div>
                </div>
            </div>
            <i :class="`fas fa-chevron-down ${petsLists ? 'animate-bounce ' : ''}`"></i>
        </div>
        </div>
    


    </div>
</template>

<script>
import {ref, onBeforeMount, computed} from 'vue'
import store from '../store'
import {useRouter} from 'vue-router'
export default {
    
    setup() {
        const router = useRouter()
        const currentUser = computed(() => store.state.user)
        onBeforeMount(() => {
            if(currentUser.value === null) {
                router.push('/login')
            }
        })
               

        return {

        }
    }
}
</script>

<style>

</style>