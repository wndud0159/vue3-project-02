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
                        <div>귀하를 대신하여 말할 수 있는 케어 선호 사항 등</div>
                    </div>
                </div>
            </div>
            <i :class="`fas fa-chevron-down ${heartLists ? 'animate-bounce ' : ''}`"></i>
        </div>
        
        <div :class="`h-full  transition-all`" >
        <div v-if="heartLists"  class= " pt-1 w-full text-xs md:text-base shadow-md bg-white px-6 transition-all ">
            <!-- heart 1 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">의사 소통이 불가능한 경우 의료 결정을 대신하여 누구를 신뢰합니까?</div>
                                    <div class="mb-2">귀하의 의료 대리인 또는 대리인 및/또는 귀하가 관련될 것으로 신뢰하는 다른 사람의 이름을 지정하십시오.</div>
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
                                <!-- <div class="space-y-2 pb-4">
                                
                                </div> -->
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
                                <li>제 남편 John은 제 건강 관리 대리인이고 제 동생 Carl은 제 백업입니다. 내 친구 Becky가 내 건강에 관한 결정을 내리는 데 관여하는 것도 괜찮습니다.</li>
                                <li>나는 내 여동생이 의료 결정에 관여하는 것을 원하지 않습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- heart2 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">다른 사람들이 귀하를 대신하여 의료 결정을 내려야 한다면 무엇을 알아야 합니까?</div>
                                    <div class="mb-2">삶을 가치 있게 만드는 것과 두려워하는 것이 무엇인지 생각해 보십시오.</div>
                                </div>
                                <span v-if="!heartResponse2 && !heartDetailLists2" class="text-gray-300">응답하지 않음</span>
                                <span v-if="heartResponse2" >{{heartBox2}}</span>
                                <div v-if="heartResponse2" class="pt-2">{{heartText2}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!heartResponse2 && !heartDetailLists2" @click="heartDetailLists2 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="heartResponse2" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="heartResponse2" @click="deleteHeartRequest2" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="heartDetailLists2" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                                
                                </div> -->
                                <div class="">
                                    <textarea name="heartText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="heartText2" rows="5"></textarea>
                                </div>
                                <button v-if="!heartText2 && !heartBox2" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="saveHeartRequest2" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelHeartRequest2" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="heartDetailLists2" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>아프고 싶지 않고, 사랑하는 사람과 소통할 수 없다면 인생은 살 가치가 없다고 생각합니다.</li>
                                <li>당신이 생각하는 최선의 결정을 내리고 당신이 선택한 것에 대해 결코 죄책감을 느끼지 마십시오. 나는 사랑하는 사람들에게 짐을 지우고 싶지 않습니다.</li>
                                <li>내가 가능한 한 오래 살 수 있도록 무슨 일이든 하십시오.</li>
                                <li>나에게 좋은 삶의 질은 좋은 음식을 먹고, 밖에 나가서, 재즈를 듣는 것입니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- heart3 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">어떤 의료 문서가 있습니까? </div>
                                </div>
                                <span v-if="!heartResponse3 && !heartDetailLists3" class="text-gray-300">응답하지 않음</span>
                                <span class="mr-1" v-if="heartResponse3" >{{heartBox3}}</span>
                                <div v-if="heartResponse3" class="pt-2">{{heartText3}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!heartResponse3 && !heartDetailLists3" @click="heartDetailLists3 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="heartResponse3" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="heartResponse3" @click="deleteHeartRequest3" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="heartDetailLists3" class="space-y-2 pt-2">
                                <div class="space-y-2 pb-4">
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="heartBox3" value="사전연명치료금지서"><span>사전연명치료금지서</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="heartBox3" value="의료대리인"><span>의료대리인</span><br>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="heartBox3" value="기타"><span>기타</span><br>
                                </div>
                                </div>
                                <div class="">
                                    <textarea name="heartText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="heartText3" rows="5"></textarea>
                                </div>
                                <button v-if="!heartText3 && !heartBox3.length" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="saveHeartRequest3" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelHeartRequest3" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="heartDetailLists3" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>내 사전 지시서 사본은 내 PCP Dr. Long에게 있고 디지털 사본은 내 케이크 프로필에 저장되어 있습니다.</li>
                                <li>서명한 의료 문서는 모두 제 홈 오피스의 검은색 서류 캐비닛에 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- heart4 -->
             <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">당신은 장기 기증자입니까? </div>
                                </div>
                                <span v-if="!heartResponse4 && !heartDetailLists4" class="text-gray-300">응답하지 않음</span>
                                <span v-if="heartResponse4" >{{heartBox4}}</span>
                                <div v-if="heartResponse4" class="pt-2">{{heartText4}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!heartResponse4 && !heartDetailLists4" @click="heartDetailLists4 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="heartResponse4" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="heartResponse4" @click="deleteHeartRequest4" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="heartDetailLists4" class="space-y-2 pt-2">
                                <div class="space-y-2 pb-4">
                                <div class="flex items-center space-x-1">
                                    <input type="radio" name="heartBox1" v-model="heartBox4" value="예"><span>예</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="radio" name="heartBox1" v-model="heartBox4" value="아니요"><span>아니요</span><br>
                                </div>
                                </div>
                                <div class="">
                                    <textarea name="heartText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="heartText4" rows="5"></textarea>
                                </div>
                                <button v-if="!heartText4 && !heartBox4" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="saveHeartRequest4" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelHeartRequest4" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="heartDetailLists4" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>내 사전 지시서 사본은 내 PCP Dr. Long에게 있고 디지털 사본은 내 케이크 프로필에 저장되어 있습니다.</li>
                                <li>서명한 의료 문서는 모두 제 홈 오피스의 검은색 서류 캐비닛에 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            
            
        </div>
        </div>


        </div>

<!-- 1 -->

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
        
        <div :class="`h-full  transition-all`" >
        <div v-if="financeLists"  class= " pt-1 w-full text-xs md:text-base shadow-md bg-white px-6 transition-all ">
            <!-- finance 1 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">생명 보험이 있습니까?</div>
                                    <div class="mb-2">생명 보험이 필요한지 또는 가입 방법이 궁금하시면 가이드를 확인하세요</div>
                                </div>
                                <span v-if="!financeResponse1 && !financeDetailLists1" class="text-gray-300">응답하지 않음</span>
                                <span v-if="financeResponse1" >{{financeBox1}}</span>
                                <div v-if="financeResponse1" class="pt-2">{{financeText1}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!financeResponse1 && !financeDetailLists1" @click="financeDetailLists1 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="financeResponse1" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="financeResponse1" @click="deletefinanceRequest1" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="financeDetailLists1" class="space-y-2 pt-2">
                                <div class="space-y-2 pb-4">
                                <div class="flex items-center space-x-1">
                                    <input type="radio" name="financeBox1" v-model="financeBox1" value="예"><span>예</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="radio" name="financeBox1" v-model="financeBox1" value="아니요"><span>아니요</span><br>
                                </div>
                                </div>
                                <div class="">
                                    <textarea name="financeText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="financeText1" rows="5"></textarea>
                                </div>
                                <button v-if="!financeText1 && !financeBox1" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savefinanceRequest1" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelfinanceRequest1" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="financeDetailLists1" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>직장을 통한 정책과 Mass Mutual을 통한 정책이 있습니다. 제 수혜자는 제 아이들인 Jane과 Michael입니다.</li>
                                <li>아니요, 하지만 해야 한다고 생각합니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- finance2 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">유언장이 있습니까?</div>
                                    <div class="mb-2">유언장을 작성하는 방법이 여러 개 있습니다. 본 사잍츠를 통해 음성 유언장을 바로 작성할 수 있습니다. (바로 가기)</div>
                                </div>
                                <span v-if="!financeResponse2 && !financeDetailLists2" class="text-gray-300">응답하지 않음</span>
                                <span v-if="financeResponse2" >{{financeBox2}}</span>
                                <div v-if="financeResponse2" class="pt-2">{{financeText2}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!financeResponse2 && !financeDetailLists2" @click="financeDetailLists2 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="financeResponse2" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="financeResponse2" @click="deletefinanceRequest2" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="financeDetailLists2" class="space-y-2 pt-2">
                                <div class="space-y-2 pb-4">
                                <div class="flex items-center space-x-1">
                                    <input type="radio" name="financeBox1" v-model="financeBox2" value="예"><span>예</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="radio" name="financeBox1" v-model="financeBox2" value="아니요"><span>아니요</span><br>
                                </div>
                                </div>
                                <div class="">
                                    <textarea name="financeText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="financeText2" rows="5"></textarea>
                                </div>
                                <button v-if="!financeText2 && !financeBox2" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savefinanceRequest2" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelfinanceRequest2" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="financeDetailLists2" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>제 파트너인 Cal은 유언장을 가지고 있으며 서명된 양식은 제 사무실 서류 캐비넷의 맨 위 서랍에서 찾을 수 있습니다. 나는 또한 iback에 디지털 사본을 저장했다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- finance3 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">재산을 관리할 때 유가족은 누구에게 연락해야 합니까? </div>
                                </div>
                                <span v-if="!financeResponse3 && !financeDetailLists3" class="text-gray-300">응답하지 않음</span>
                                <span class="mr-1" v-if="financeResponse3" >{{financeBox3}}</span>
                                <div v-if="financeResponse3" class="pt-2">{{financeText3}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!financeResponse3 && !financeDetailLists3" @click="financeDetailLists3 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="financeResponse3" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="financeResponse3" @click="deletefinanceRequest3" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="financeDetailLists3" class="space-y-2 pt-2">
                                <div class="space-y-2 pb-4">
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="financeBox3" value="부동산 변호사/개인 변호사"><span>부동산 변호사/개인 변호사</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="financeBox3" value="회계사"><span>회계사</span><br>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="financeBox3" value="금융설계사"><span>금융설계사</span><br>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="financeBox3" value="이름 및 연락처정보 추가"><span>이름 및 연락처정보 추가</span><br>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="financeBox3" value="기타"><span>기타</span><br>
                                </div>
                                </div>
                                <div class="">
                                    <textarea name="financeText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="financeText3" rows="5"></textarea>
                                </div>
                                <button v-if="!financeText3 && !financeBox3.length" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savefinanceRequest3" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelfinanceRequest3" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="financeDetailLists3" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>제 부동산 플래너는 Murphy & Murphy 법률 사무소의 Jane Murphy입니다. 그녀는 내가 의지와 신뢰를 형성하도록 도왔습니다.</li>
                                <li>제 회계사는 Andres Gonzalez(andres.gonzalez@cake.com)입니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- finance4 -->
             <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">유가족이 알아야 할 가장 중요한 자산과 부채는 무엇입니까? </div>
                                    <div class="mb-2">은행 계좌, 투자, 신용 카드, 대출, 귀중품 등 </div>
                                </div>
                                <span v-if="!financeResponse4 && !financeDetailLists4" class="text-gray-300">응답하지 않음</span>
                                <span v-if="financeResponse4" >{{financeBox4}}</span>
                                <div v-if="financeResponse4" class="pt-2">{{financeText4}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!financeResponse4 && !financeDetailLists4" @click="financeDetailLists4 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="financeResponse4" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="financeResponse4" @click="deletefinanceRequest4" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="financeDetailLists4" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                               
                                
                                </div> -->

                                <div class="">
                                    <textarea name="financeText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="financeText4" rows="5"></textarea>
                                </div>
                                <button v-if="!financeText4 && !financeBox4" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savefinanceRequest4" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelfinanceRequest4" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="financeDetailLists4" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>내 집 사무실 책상에 있는 노트북에 계정 목록이 있습니다.</li>
                                <li>학자금 대출이 없었으면 좋겠지만, 그렇습니다.</li>
                                <li>네바다주에 토지를 소유하고 있습니다. 내가 죽은 후에 가치가 있을지도 모릅니다. 내 침실에 있는 금고에서 자세한 내용을 찾아보세요(Casey는 액세스할 수 있음).</li>
                                <li>저는 Bank of America에 은행 계좌가 있고 Fidelity에 401k 플랜이 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            
            
        </div>
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
        
        <div :class="`h-full  transition-all`" >
        <div v-if="digitalLists"  class= " pt-1 w-full text-xs md:text-base shadow-md bg-white px-6 transition-all ">
            <!-- digital 1 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">당신은 당신이 죽으면 당신의 이메일 계정에 무슨 일이 일어나고 싶습니까?</div>
                                </div>
                                <span v-if="!digitalResponse1 && !digitalDetailLists1" class="text-gray-300">응답하지 않음</span>
                                <span v-if="digitalResponse1" >{{digitalBox1}}</span>
                                <div v-if="digitalResponse1" class="pt-2">{{digitalText1}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!digitalResponse1 && !digitalDetailLists1" @click="digitalDetailLists1 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="digitalResponse1" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="digitalResponse1" @click="deletedigitalRequest1" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="digitalDetailLists1" class="space-y-2 pt-2">
                                <div class="space-y-2 pb-4">
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="digitalBox1" value="그냥 놔두십시오"><span>그냥 놔두십시오</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="digitalBox1" value="모두 삭제하십시오"><span>모두 삭제하십시오</span><br>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="digitalBox1" value="내가 신뢰하는 사람에게 콘텐츠 액세스 권한 부여"><span>내가 신뢰하는 사람에게 콘텐츠 액세스 권한 부여</span><br>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <input type="checkbox" v-model="digitalBox1" value="기타"><span>기타</span><br>
                                </div>
                                </div>
                                <div class="">
                                    <textarea name="digitalText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="digitalText1" rows="5"></textarea>
                                </div>
                                <button v-if="!digitalText1 && !digitalBox1.length" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savedigitalRequest1" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="canceldigitalRequest1" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="digitalDetailLists1" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>내 파트너 Jesse는 내 계정에 대한 전체 액세스 권한을 가질 수 있습니다.</li>
                                <li>다른 사람이 내 계정에 액세스하는 것을 원하지 않습니다.</li>
                                <li>내 가장 친한 친구인 Kate는 내가 없을 때 업무를 처리하기 위해 필요한 경우 내 계정에 액세스할 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- digital2 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">당신이 죽으면 사랑하는 사람들이 당신의 계정과 기기에 어떻게 액세스할 것입니까?</div>
                                    <div class="mb-2">컴퓨터, 전화, ipad, 온라인 계정 등</div>
                                </div>
                                <span v-if="!digitalResponse2 && !digitalDetailLists2" class="text-gray-300">응답하지 않음</span>
                                <span v-if="digitalResponse2" >{{digitalBox2}}</span>
                                <div v-if="digitalResponse2" class="pt-2">{{digitalText2}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!digitalResponse2 && !digitalDetailLists2" @click="digitalDetailLists2 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="digitalResponse2" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="digitalResponse2" @click="deletedigitalRequest2" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="digitalDetailLists2" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                                
                                </div> -->
                                <div class="">
                                    <textarea name="digitalText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="digitalText2" rows="5"></textarea>
                                </div>
                                <button v-if="!digitalText2 && !digitalBox2" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savedigitalRequest2" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="canceldigitalRequest2" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="digitalDetailLists2" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>Evan이 액세스할 수 있는 암호 관리자가 있습니다.</li>
                                <li>내 금고에 비밀번호 목록이 있습니다. Charlie는 그 방법을 알고 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- digital3 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">당신이 죽으면 당신의 디지털 파일과 사진은 어떻게 되길 원하십니까?</div>
                                    <div class="mb-2">구글 드라이브, 드롭박스 등</div>
                                </div>
                                <span v-if="!digitalResponse3 && !digitalDetailLists3" class="text-gray-300">응답하지 않음</span>
                                <span class="mr-1" v-if="digitalResponse3" >{{digitalBox3}}</span>
                                <div v-if="digitalResponse3" class="pt-2">{{digitalText3}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!digitalResponse3 && !digitalDetailLists3" @click="digitalDetailLists3 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="digitalResponse3" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="digitalResponse3" @click="deletedigitalRequest3" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="digitalDetailLists3" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                                
                                </div> -->
                                <div class="">
                                    <textarea name="digitalText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="digitalText3" rows="5"></textarea>
                                </div>
                                <button v-if="!digitalText3 && !digitalBox3.length" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savedigitalRequest3" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="canceldigitalRequest3" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="digitalDetailLists3" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>내 친구 Bobby는 내 사진과 파일을 살펴보고 민감한 항목을 삭제한 다음 나머지 가족과 공유해야 합니다.</li>
                                <li>나는 내 아이들이 내 모든 사진과 파일에 완전히 접근할 수 있기를 바랍니다.</li>
                                <li>중요한 것은 내가 딸을 위해 녹음한 메시지뿐입니다. Google 폴더 "Anna"에 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- digital4 -->
             <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">당신이 죽으면 디지털 자산(돈 가치가 있는 것)은 어떻게 되기를 원하십니까?</div>
                                    <div class="mb-2">수익을 창출하는 암호화폐, 도메인 이름, 블로그 또는 소셜 미디어 등</div>
                                </div>
                                <span v-if="!digitalResponse4 && !digitalDetailLists4" class="text-gray-300">응답하지 않음</span>
                                <span v-if="digitalResponse4" >{{digitalBox4}}</span>
                                <div v-if="digitalResponse4" class="pt-2">{{digitalText4}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!digitalResponse4 && !digitalDetailLists4" @click="digitalDetailLists4 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="digitalResponse4" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="digitalResponse4" @click="deletedigitalRequest4" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="digitalDetailLists4" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                                
                                
                                </div> -->

                                <div class="">
                                    <textarea name="digitalText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="digitalText4" rows="5"></textarea>
                                </div>
                                <button v-if="!digitalText4 && !digitalBox4" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savedigitalRequest4" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="canceldigitalRequest4" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="digitalDetailLists4" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>내 파트너 Jamie는 내 가상 지갑을 통해 내 비트코인에 액세스하는 방법을 알고 있습니다(개인 키는 내 책상의 USB 드라이브에 있음).</li>
                                <li>Greg에게 내 GoDaddy 계정에 대한 액세스 권한을 부여해야 합니다. 판매할 수 있는 일부 URL이 있고 수익금이 가족에게 갈 수 있습니다</li>
                                
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>


             <!-- digital5 -->
             <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">당신이 죽으면 소셜 미디어 계정에 어떤 일이 일어나기를 원하십니까?</div>
                                    <div class="mb-2">페이스북, 트위터, 링크드인, 인스타그램, 틱톡 등</div>
                                </div>
                                <span v-if="!digitalResponse5 && !digitalDetailLists5" class="text-gray-300">응답하지 않음</span>
                                <span v-if="digitalResponse5" >{{digitalBox5}}</span>
                                <div v-if="digitalResponse5" class="pt-2">{{digitalText5}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!digitalResponse5 && !digitalDetailLists5" @click="digitalDetailLists5 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="digitalResponse5" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="digitalResponse5" @click="deletedigitalRequest5" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="digitalDetailLists5" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                                
                                
                                </div> -->

                                <div class="">
                                    <textarea name="digitalText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="digitalText5" rows="5"></textarea>
                                </div>
                                <button v-if="!digitalText5 && !digitalBox5" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savedigitalRequest5" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="canceldigitalRequest5" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="digitalDetailLists5" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>내 Facebook 계정을 기념합니다. 나는 James를 나의 레거시 연락처로 설정했습니다.</li>
                                <li>내 Facebook과 LinkedIn을 삭제하세요. 그렇지 않으면 소름이 돋습니다.</li>
                                <li>내 Dropbox에서 찾은 마지막 트윗을 "Tweet Ideas"라는 폴더에 게시하세요.</li>
                                <li>Sam이 액세스할 수 있는 Google 휴면 계정 관리자가 있습니다.</li>
                                <li>원하는 사진을 저장하고 내 인스타그램을 삭제하세요.</li>
                                
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            
            
        </div>
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
        
        <div :class="`h-full  transition-all`" >
        <div v-if="maintainLists"  class= " pt-1 w-full text-xs md:text-base shadow-md bg-white px-6 transition-all ">
            <!-- maintain 1 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">당신이 남기고 간 사람들에게 어떤 메시지, 이야기 또는 삶의 교훈을 전하고 싶습니까?</div>
                                    <div class="mb-2">가치관, 좋아하는 인용구, 가족력 등</div>
                                </div>
                                <span v-if="!maintainResponse1 && !maintainDetailLists1" class="text-gray-300">응답하지 않음</span>
                                <span v-if="maintainResponse1" >{{maintainBox1}}</span>
                                <div v-if="maintainResponse1" class="pt-2">{{maintainText1}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!maintainResponse1 && !maintainDetailLists1" @click="maintainDetailLists1 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="maintainResponse1" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="maintainResponse1" @click="deletemaintainRequest1" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="maintainDetailLists1" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                                
                                </div> -->
                                <div class="">
                                    <textarea name="maintainText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="maintainText1" rows="5"></textarea>
                                </div>
                                <button v-if="!maintainText1 && !maintainBox1" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savemaintainRequest1" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelmaintainRequest1" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="maintainDetailLists1" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>나는 내 인생의 교훈과 희망을 공유하는 사랑하는 사람들에게 편지를 썼습니다. Google 드라이브 폴더 - 사후 메시지에서 찾을 수 있습니다. 매기, 내가 죽을 때 이것을 각 사람에게 보내주십시오.</li>
                                <li>할아버지가 배달을 하시다가 실수로 문을 잘못 두드렸을 때 조부모님이 어떻게 만났는지에 대한 이야기를 꼭 전해 주세요.</li>
                                <li>행복의 열쇠는 사랑하는 사람들과 자신을 둘러싸고 세상을 더 나은 곳으로 만들기 위해 노력하는 것이라는 것을 손자들이 알았으면 합니다.</li>
                                <li>아버지가 돌아가신 후 관계에 상처를 준 형에게 사과하고 싶다. 마이크 죄송합니다.</li>
                                <li>부모님이 저를 위해 해주신 모든 것에 대해 얼마나 감사한지 말씀드리고 싶습니다. 너무 사랑 해요.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- maintain2 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">무엇으로 기억되고 싶은가요?</div>
                                    <div class="mb-2">특징, 역할, 업적, 스토리 등</div>
                                </div>
                                <span v-if="!maintainResponse2 && !maintainDetailLists2" class="text-gray-300">응답하지 않음</span>
                                <span v-if="maintainResponse2" >{{maintainBox2}}</span>
                                <div v-if="maintainResponse2" class="pt-2">{{maintainText2}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!maintainResponse2 && !maintainDetailLists2" @click="maintainDetailLists2 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="maintainResponse2" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="maintainResponse2" @click="deletemaintainRequest2" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="maintainDetailLists2" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                                
                                </div> -->
                                <div class="">
                                    <textarea name="maintainText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="maintainText2" rows="5"></textarea>
                                </div>
                                <button v-if="!maintainText2 && !maintainBox2" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savemaintainRequest2" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelmaintainRequest2" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="maintainDetailLists2" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>내 시간, 특히 친구들에게 관대하기 때문입니다.</li>
                                <li>내 유머 감각을 위해, 나는 꽤 웃기다 :)</li>
                                <li>훌륭한 교사가 되기 위해</li>
                                <li>우리 가족 중 처음으로 대학에 갔기 때문에</li>
                                <li>그동안 매운 닭날개 챌린지에서 우승한</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- maintain3 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">사람들이 당신의 기일을 기념하기 위해 무엇을 하기를 원하십니까?</div>
                                </div>
                                <span v-if="!maintainResponse3 && !maintainDetailLists3" class="text-gray-300">응답하지 않음</span>
                                <span class="mr-1" v-if="maintainResponse3" >{{maintainBox3}}</span>
                                <div v-if="maintainResponse3" class="pt-2">{{maintainText3}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!maintainResponse3 && !maintainDetailLists3" @click="maintainDetailLists3 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="maintainResponse3" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="maintainResponse3" @click="deletemaintainRequest3" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="maintainDetailLists3" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                                
                                </div> -->
                                <div class="">
                                    <textarea name="maintainText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="maintainText3" rows="5"></textarea>
                                </div>
                                <button v-if="!maintainText3 && !maintainBox3.length" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savemaintainRequest3" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelmaintainRequest3" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="maintainDetailLists3" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>가족들이 무덤을 찾아 자연산책을 했으면 좋겠다.</li>
                                <li>가족과 친구들이 내가 좋아하는 바에 모여 술을 마시며 추억을 나누었으면 합니다.</li>
                                <li>나는 내 죽음의 기념일에 아무 일도 일어나지 않기를 바랍니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- maintain4 -->
             <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">부양가족을 더 이상 돌볼 수 없다면 어떻게 해야 합니까?</div>
                                    <div class="mb-2">어린이, 장애인 가족, 연로하신 부모님 등</div>
                                </div>
                                <span v-if="!maintainResponse4 && !maintainDetailLists4" class="text-gray-300">응답하지 않음</span>
                                <span v-if="maintainResponse4" >{{maintainBox4}}</span>
                                <div v-if="maintainResponse4" class="pt-2">{{maintainText4}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!maintainResponse4 && !maintainDetailLists4" @click="maintainDetailLists4 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="maintainResponse4" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="maintainResponse4" @click="deletemaintainRequest4" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="maintainDetailLists4" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                                
                                
                                </div> -->

                                <div class="">
                                    <textarea name="maintainText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="maintainText4" rows="5"></textarea>
                                </div>
                                <button v-if="!maintainText4 && !maintainBox4" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savemaintainRequest4" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelmaintainRequest4" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="maintainDetailLists4" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>내 유언장에 명시된 대로 Laura와 Tom은 아이들을 돌볼 것입니다. 가능하면 같은 학교 시스템에 머물게 하고 예술과 운동에 노출시키십시오. 그들에게 다른 사람들에게 친절하도록 가르치고 항상 최선을 다하십시오.</li>
                                <li>내가 죽으면 내 동생 네이트가 우리 부모님을 대신할 것입니다.</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            
            
        </div>
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
        
        <div :class="`h-full  transition-all`" >
        <div v-if="petsLists"  class= " pt-1 w-full text-xs md:text-base shadow-md bg-white px-6 transition-all ">
            <!-- pets 1 -->
            <div v-for="lists in 1" :key="lists"  class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="">
                                <div>
                                    <div class="mb-2">애완동물을 더 이상 돌볼 수 없다면 어떻게 해야 합니까?</div>
                                    <div class="mb-2">누가 그들을 돌봐야 하는지, 관리 지침 등</div>
                                </div>
                                <span v-if="!petsResponse1 && !petsDetailLists1" class="text-gray-300">응답하지 않음</span>
                                <span v-if="petsResponse1" >{{petsBox1}}</span>
                                <div v-if="petsResponse1" class="pt-2">{{petsText1}}</div>
                                <div class="md:absolute md:top-5 md:right-0 mt-3 md:mt-0  ">
                                     <button v-if="!petsResponse1 && !petsDetailLists1" @click="petsDetailLists1 = true"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">답변</button>
                                     <button v-if="petsResponse1" class="bg-dark rounded-md px-8 py-3 mr-2 hover:bg-dark cursor-default">답변완료</button>
                                     <button v-if="petsResponse1" @click="deletepetsRequest1" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
                                </div>
                                
                            </div>
                            <div v-if="petsDetailLists1" class="space-y-2 pt-2">
                                <!-- <div class="space-y-2 pb-4">
                                
                                </div> -->
                                <div class="">
                                    <textarea name="petsText1"  class=" resize-none w-full outline-none py-2 px-2  focus:border-primary border focus:ring-4 focus:ring-primary focus:ring-opacity-25 ring-gray-300  rounded-md border-gray-300"
                                    v-model="petsText1" rows="5"></textarea>
                                </div>
                                <button v-if="!petsText1 && !petsBox1" class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                                <button v-else @click="savepetsRequest1" class="bg-primary py-3 px-10 rounded-md mr-2 hover:bg-dark">저장</button>
                                <button @click="cancelpetsRequest1" class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                            </div>
                        </div>

                        <div v-if="petsDetailLists1" class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                            <div>예</div>
                            <ul class=" ml-5 list-disc">
                                <li>내 동생은 그가 개(버디와 스파키)를 데려갈 거라고 말했다. 그들의 수의사는 Springfield의 Animal Care입니다. Buddy가 다른 개를 두려워한다는 것을 아는 것이 중요합니다. Sparky는 배를 문지르는 것을 좋아합니다.</li>
                                <li>애완동물을 잘 보호하는 방법에 대해 알아보세요.</li>
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
        const heartCount = ref(0)
        const heartDetailLists1 = ref(false)
        const heartBox1 = ref('')
        const heartText1 = ref('')
        const heartResponse1 = ref(false)

        const heartDetailLists2 = ref(false)
        const heartBox2 = ref('')
        const heartText2 = ref('')
        const heartResponse2 = ref(false)

        const heartDetailLists3 = ref(false)
        const heartBox3 = ref([])
        const heartText3 = ref('')
        const heartResponse3 = ref(false)

        const heartDetailLists4 = ref(false)
        const heartBox4 = ref('')
        const heartText4 = ref('')
        const heartResponse4 = ref(false)


        // finance
        const financeLists = ref(false)
        const financeCount = ref(0)
        const financeDetailLists1 = ref(false)
        const financeBox1 = ref('')
        const financeText1 = ref('')
        const financeResponse1 = ref(false)

        const financeDetailLists2 = ref(false)
        const financeBox2 = ref('')
        const financeText2 = ref('')
        const financeResponse2 = ref(false)

        const financeDetailLists3 = ref(false)
        const financeBox3 = ref([])
        const financeText3 = ref('')
        const financeResponse3 = ref(false)

        const financeDetailLists4 = ref(false)
        const financeBox4 = ref('')
        const financeText4 = ref('')
        const financeResponse4 = ref(false)


        // digital
        const digitalLists = ref(false)
        const digitalCount = ref(0)
        const digitalDetailLists1 = ref(false)
        const digitalBox1 = ref([])
        const digitalText1 = ref('')
        const digitalResponse1 = ref(false)

        const digitalDetailLists2 = ref(false)
        const digitalBox2 = ref('')
        const digitalText2 = ref('')
        const digitalResponse2 = ref(false)

        const digitalDetailLists3 = ref(false)
        const digitalBox3 = ref('')
        const digitalText3 = ref('')
        const digitalResponse3 = ref(false)

        const digitalDetailLists4 = ref(false)
        const digitalBox4 = ref('')
        const digitalText4 = ref('')
        const digitalResponse4 = ref(false)

        const digitalDetailLists5 = ref(false)
        const digitalBox5 = ref('')
        const digitalText5 = ref('')
        const digitalResponse5 = ref(false)


        // maintain
        const maintainLists = ref(false)
        const maintainCount = ref(0)
        const maintainDetailLists1 = ref(false)
        const maintainBox1 = ref('')
        const maintainText1 = ref('')
        const maintainResponse1 = ref(false)

        const maintainDetailLists2 = ref(false)
        const maintainBox2 = ref('')
        const maintainText2 = ref('')
        const maintainResponse2 = ref(false)

        const maintainDetailLists3 = ref(false)
        const maintainBox3 = ref('')
        const maintainText3 = ref('')
        const maintainResponse3 = ref(false)

        const maintainDetailLists4 = ref(false)
        const maintainBox4 = ref('')
        const maintainText4 = ref('')
        const maintainResponse4 = ref(false)


        // pets
        const petsLists = ref(false)
        const petsCount = ref(0)
        const petsDetailLists1 = ref(false)
        const petsBox1 = ref('')
        const petsText1 = ref('')
        const petsResponse1 = ref(false)

        const showHeartLists = () => {
            if(heartLists.value == true) {
                heartLists.value = false;
            } else {
                heartLists.value = true;
            }
        }

        // heart 1
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
        
        // heart2
        const showHeartDetailLists2 = () => {
            if(heartDetailLists2.value == true) {
                heartDetailLists2.value = false
            } else {
                heartDetailLists2.value = true 
            }
        }

        const cancelHeartRequest2 = () => {
            heartBox2.value = ''
            heartText2.value = ''
            heartDetailLists2.value = false
            heartResponse2.value =false
        }

        const saveHeartRequest2 = () => { 
                heartResponse2.value = true
                heartDetailLists2.value = false
                heartCount.value++
        }

        const deleteHeartRequest2 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            heartBox2.value = ''
            heartText2.value = ''
            heartResponse2.value =false
            heartCount.value--
            }
        }

        // heart3
        const showHeartDetailLists3 = () => {
            if(heartDetailLists3.value == true) {
                heartDetailLists3.value = false
            } else {
                heartDetailLists3.value = true 
            }
        }

        const cancelHeartRequest3 = () => {
            heartBox3.value = []
            heartText3.value = ''
            heartDetailLists3.value = false
            heartResponse3.value =false
        }

        const saveHeartRequest3 = () => { 
                heartResponse3.value = true
                heartDetailLists3.value = false
                heartCount.value++
        }

        const deleteHeartRequest3 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            heartBox3.value = []
            heartText3.value = ''
            heartResponse3.value =false
            heartCount.value--
            }
        }

        // heart4
        const showHeartDetailLists4 = () => {
            if(heartDetailLists4.value == true) {
                heartDetailLists4.value = false
            } else {
                heartDetailLists4.value = true 
            }
        }

        const cancelHeartRequest4 = () => {
            heartBox4.value = ''
            heartText4.value = ''
            heartDetailLists4.value = false
            heartResponse4.value =false
        }

        const saveHeartRequest4 = () => { 
                heartResponse4.value = true
                heartDetailLists4.value = false
                heartCount.value++
        }

        const deleteHeartRequest4 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            heartBox4.value = ''
            heartText4.value = ''
            heartResponse4.value =false
            heartCount.value--
            }
        }


        // finance
        const showfinanceLists = () => {
            if(financeLists.value == true) {
                financeLists.value = false;
            } else {
                financeLists.value = true;
            }
        }

        // finance 1
        const showfinanceDetailLists1 = () => {
            if(financeDetailLists1.value == true) {
                financeDetailLists1.value = false
            } else {
                financeDetailLists1.value = true 
            }
        }

        const cancelfinanceRequest1 = () => {
            financeBox1.value = ''
            financeText1.value = ''
            financeDetailLists1.value = false
            financeResponse1.value =false
        }

        const savefinanceRequest1 = () => { 
                financeResponse1.value = true
                financeDetailLists1.value = false
                financeCount.value++
        }

        const deletefinanceRequest1 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            financeBox1.value = ''
            financeText1.value = ''
            financeResponse1.value =false
            financeCount.value--
            }
        }
        
        // finance2
        const showfinanceDetailLists2 = () => {
            if(financeDetailLists2.value == true) {
                financeDetailLists2.value = false
            } else {
                financeDetailLists2.value = true 
            }
        }

        const cancelfinanceRequest2 = () => {
            financeBox2.value = ''
            financeText2.value = ''
            financeDetailLists2.value = false
            financeResponse2.value =false
        }

        const savefinanceRequest2 = () => { 
                financeResponse2.value = true
                financeDetailLists2.value = false
                financeCount.value++
        }

        const deletefinanceRequest2 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            financeBox2.value = ''
            financeText2.value = ''
            financeResponse2.value =false
            financeCount.value--
            }
        }

        // finance3
        const showfinanceDetailLists3 = () => {
            if(financeDetailLists3.value == true) {
                financeDetailLists3.value = false
            } else {
                financeDetailLists3.value = true 
            }
        }

        const cancelfinanceRequest3 = () => {
            financeBox3.value = []
            financeText3.value = ''
            financeDetailLists3.value = false
            financeResponse3.value =false
        }

        const savefinanceRequest3 = () => { 
                financeResponse3.value = true
                financeDetailLists3.value = false
                financeCount.value++
        }

        const deletefinanceRequest3 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            financeBox3.value = []
            financeText3.value = ''
            financeResponse3.value =false
            financeCount.value--
            }
        }

        // finance4
        const showfinanceDetailLists4 = () => {
            if(financeDetailLists4.value == true) {
                financeDetailLists4.value = false
            } else {
                financeDetailLists4.value = true 
            }
        }

        const cancelfinanceRequest4 = () => {
            financeBox4.value = ''
            financeText4.value = ''
            financeDetailLists4.value = false
            financeResponse4.value =false
        }

        const savefinanceRequest4 = () => { 
                financeResponse4.value = true
                financeDetailLists4.value = false
                financeCount.value++
        }

        const deletefinanceRequest4 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            financeBox4.value = ''
            financeText4.value = ''
            financeResponse4.value =false
            financeCount.value--
            }
        }



        // digital
        const showdigitalLists = () => {
            if(digitalLists.value == true) {
                digitalLists.value = false;
            } else {
                digitalLists.value = true;
            }
        }

        // digital 1
        const showdigitalDetailLists1 = () => {
            if(digitalDetailLists1.value == true) {
                digitalDetailLists1.value = false
            } else {
                digitalDetailLists1.value = true 
            }
        }

        const canceldigitalRequest1 = () => {
            digitalBox1.value = []
            digitalText1.value = ''
            digitalDetailLists1.value = false
            digitalResponse1.value =false
        }

        const savedigitalRequest1 = () => { 
                digitalResponse1.value = true
                digitalDetailLists1.value = false
                digitalCount.value++
        }

        const deletedigitalRequest1 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            digitalBox1.value = []
            digitalText1.value = ''
            digitalResponse1.value =false
            digitalCount.value--
            }
        }
        
        // digital2
        const showdigitalDetailLists2 = () => {
            if(digitalDetailLists2.value == true) {
                digitalDetailLists2.value = false
            } else {
                digitalDetailLists2.value = true 
            }
        }

        const canceldigitalRequest2 = () => {
            digitalBox2.value = ''
            digitalText2.value = ''
            digitalDetailLists2.value = false
            digitalResponse2.value =false
        }

        const savedigitalRequest2 = () => { 
                digitalResponse2.value = true
                digitalDetailLists2.value = false
                digitalCount.value++
        }

        const deletedigitalRequest2 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            digitalBox2.value = ''
            digitalText2.value = ''
            digitalResponse2.value =false
            digitalCount.value--
            }
        }

        // digital3
        const showdigitalDetailLists3 = () => {
            if(digitalDetailLists3.value == true) {
                digitalDetailLists3.value = false
            } else {
                digitalDetailLists3.value = true 
            }
        }

        const canceldigitalRequest3 = () => {
            digitalBox3.value = ''
            digitalText3.value = ''
            digitalDetailLists3.value = false
            digitalResponse3.value =false
        }

        const savedigitalRequest3 = () => { 
                digitalResponse3.value = true
                digitalDetailLists3.value = false
                digitalCount.value++
        }

        const deletedigitalRequest3 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            digitalBox3.value = ''
            digitalText3.value = ''
            digitalResponse3.value =false
            digitalCount.value--
            }
        }

        // digital4
        const showdigitalDetailLists4 = () => {
            if(digitalDetailLists4.value == true) {
                digitalDetailLists4.value = false
            } else {
                digitalDetailLists4.value = true 
            }
        }

        const canceldigitalRequest4 = () => {
            digitalBox4.value = ''
            digitalText4.value = ''
            digitalDetailLists4.value = false
            digitalResponse4.value =false
        }

        const savedigitalRequest4 = () => { 
                digitalResponse4.value = true
                digitalDetailLists4.value = false
                digitalCount.value++
        }

        const deletedigitalRequest4 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            digitalBox4.value = ''
            digitalText4.value = ''
            digitalResponse4.value =false
            digitalCount.value--
            }
        }

        // digital5
        const showdigitalDetailLists5 = () => {
            if(digitalDetailLists5.value == true) {
                digitalDetailLists5.value = false
            } else {
                digitalDetailLists5.value = true 
            }
        }

        const canceldigitalRequest5 = () => {
            digitalBox5.value = ''
            digitalText5.value = ''
            digitalDetailLists5.value = false
            digitalResponse5.value =false
        }

        const savedigitalRequest5 = () => { 
                digitalResponse5.value = true
                digitalDetailLists5.value = false
                digitalCount.value++
        }

        const deletedigitalRequest5 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            digitalBox5.value = ''
            digitalText5.value = ''
            digitalResponse5.value =false
            digitalCount.value--
            }
        }


        // maintain
        const showmaintainLists = () => {
            if(maintainLists.value == true) {
                maintainLists.value = false;
            } else {
                maintainLists.value = true;
            }
        }

        // maintain 1
        const showmaintainDetailLists1 = () => {
            if(maintainDetailLists1.value == true) {
                maintainDetailLists1.value = false
            } else {
                maintainDetailLists1.value = true 
            }
        }

        const cancelmaintainRequest1 = () => {
            maintainBox1.value = ''
            maintainText1.value = ''
            maintainDetailLists1.value = false
            maintainResponse1.value =false
        }

        const savemaintainRequest1 = () => { 
                maintainResponse1.value = true
                maintainDetailLists1.value = false
                maintainCount.value++
        }

        const deletemaintainRequest1 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            maintainBox1.value = ''
            maintainText1.value = ''
            maintainResponse1.value =false
            maintainCount.value--
            }
        }
        
        // maintain2
        const showmaintainDetailLists2 = () => {
            if(maintainDetailLists2.value == true) {
                maintainDetailLists2.value = false
            } else {
                maintainDetailLists2.value = true 
            }
        }

        const cancelmaintainRequest2 = () => {
            maintainBox2.value = ''
            maintainText2.value = ''
            maintainDetailLists2.value = false
            maintainResponse2.value =false
        }

        const savemaintainRequest2 = () => { 
                maintainResponse2.value = true
                maintainDetailLists2.value = false
                maintainCount.value++
        }

        const deletemaintainRequest2 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            maintainBox2.value = ''
            maintainText2.value = ''
            maintainResponse2.value =false
            maintainCount.value--
            }
        }

        // maintain3
        const showmaintainDetailLists3 = () => {
            if(maintainDetailLists3.value == true) {
                maintainDetailLists3.value = false
            } else {
                maintainDetailLists3.value = true 
            }
        }

        const cancelmaintainRequest3 = () => {
            maintainBox3.value = ''
            maintainText3.value = ''
            maintainDetailLists3.value = false
            maintainResponse3.value =false
        }

        const savemaintainRequest3 = () => { 
                maintainResponse3.value = true
                maintainDetailLists3.value = false
                maintainCount.value++
        }

        const deletemaintainRequest3 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            maintainBox3.value = ''
            maintainText3.value = ''
            maintainResponse3.value =false
            maintainCount.value--
            }
        }

        // maintain4
        const showmaintainDetailLists4 = () => {
            if(maintainDetailLists4.value == true) {
                maintainDetailLists4.value = false
            } else {
                maintainDetailLists4.value = true 
            }
        }

        const cancelmaintainRequest4 = () => {
            maintainBox4.value = ''
            maintainText4.value = ''
            maintainDetailLists4.value = false
            maintainResponse4.value =false
        }

        const savemaintainRequest4 = () => { 
                maintainResponse4.value = true
                maintainDetailLists4.value = false
                maintainCount.value++
        }

        const deletemaintainRequest4 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            maintainBox4.value = ''
            maintainText4.value = ''
            maintainResponse4.value =false
            maintainCount.value--
            }
        }


        // pets
        const showpetsLists = () => {
            if(petsLists.value == true) {
                petsLists.value = false;
            } else {
                petsLists.value = true;
            }
        }

        // pets 1
        const showpetsDetailLists1 = () => {
            if(petsDetailLists1.value == true) {
                petsDetailLists1.value = false
            } else {
                petsDetailLists1.value = true 
            }
        }

        const cancelpetsRequest1 = () => {
            petsBox1.value = ''
            petsText1.value = ''
            petsDetailLists1.value = false
            petsResponse1.value =false
        }

        const savepetsRequest1 = () => { 
                petsResponse1.value = true
                petsDetailLists1.value = false
                petsCount.value++
        }

        const deletepetsRequest1 = () => {
            if(confirm('삭제 하시겠습니까?')) {
            petsBox1.value = ''
            petsText1.value = ''
            petsResponse1.value =false
            petsCount.value--
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
            deleteHeartRequest1,

            heartDetailLists2, 
            showHeartDetailLists2, 
            heartBox2, 
            heartText2, 
            heartResponse2, 
            cancelHeartRequest2, 
            saveHeartRequest2, 
            deleteHeartRequest2,

            heartDetailLists3, 
            showHeartDetailLists3, 
            heartBox3, 
            heartText3, 
            heartResponse3, 
            cancelHeartRequest3, 
            saveHeartRequest3, 
            deleteHeartRequest3,

            heartDetailLists4, 
            showHeartDetailLists4, 
            heartBox4, 
            heartText4, 
            heartResponse4, 
            cancelHeartRequest4, 
            saveHeartRequest4, 
            deleteHeartRequest4,


            financeLists,
            showfinanceLists, 
            financeCount, 
            financeDetailLists1, 
            showfinanceDetailLists1, 
            financeBox1, 
            financeText1, 
            financeResponse1, 
            cancelfinanceRequest1, 
            savefinanceRequest1, 
            deletefinanceRequest1,

            financeDetailLists2, 
            showfinanceDetailLists2, 
            financeBox2, 
            financeText2, 
            financeResponse2, 
            cancelfinanceRequest2, 
            savefinanceRequest2, 
            deletefinanceRequest2,

            financeDetailLists3, 
            showfinanceDetailLists3, 
            financeBox3, 
            financeText3, 
            financeResponse3, 
            cancelfinanceRequest3, 
            savefinanceRequest3, 
            deletefinanceRequest3,

            financeDetailLists4, 
            showfinanceDetailLists4, 
            financeBox4, 
            financeText4, 
            financeResponse4, 
            cancelfinanceRequest4, 
            savefinanceRequest4, 
            deletefinanceRequest4,


            digitalLists,
            showdigitalLists, 
            digitalCount, 
            digitalDetailLists1, 
            showdigitalDetailLists1, 
            digitalBox1, 
            digitalText1, 
            digitalResponse1, 
            canceldigitalRequest1, 
            savedigitalRequest1, 
            deletedigitalRequest1,

            digitalDetailLists2, 
            showdigitalDetailLists2, 
            digitalBox2, 
            digitalText2, 
            digitalResponse2, 
            canceldigitalRequest2, 
            savedigitalRequest2, 
            deletedigitalRequest2,

            digitalDetailLists3, 
            showdigitalDetailLists3, 
            digitalBox3, 
            digitalText3, 
            digitalResponse3, 
            canceldigitalRequest3, 
            savedigitalRequest3, 
            deletedigitalRequest3,

            digitalDetailLists4, 
            showdigitalDetailLists4, 
            digitalBox4, 
            digitalText4, 
            digitalResponse4, 
            canceldigitalRequest4, 
            savedigitalRequest4, 
            deletedigitalRequest4,

            digitalDetailLists5, 
            showdigitalDetailLists5, 
            digitalBox5, 
            digitalText5, 
            digitalResponse5, 
            canceldigitalRequest5, 
            savedigitalRequest5, 
            deletedigitalRequest5,



            maintainLists,
            showmaintainLists, 
            maintainCount, 
            maintainDetailLists1, 
            showmaintainDetailLists1, 
            maintainBox1, 
            maintainText1, 
            maintainResponse1, 
            cancelmaintainRequest1, 
            savemaintainRequest1, 
            deletemaintainRequest1,

            maintainDetailLists2, 
            showmaintainDetailLists2, 
            maintainBox2, 
            maintainText2, 
            maintainResponse2, 
            cancelmaintainRequest2, 
            savemaintainRequest2, 
            deletemaintainRequest2,

            maintainDetailLists3, 
            showmaintainDetailLists3, 
            maintainBox3, 
            maintainText3, 
            maintainResponse3, 
            cancelmaintainRequest3, 
            savemaintainRequest3, 
            deletemaintainRequest3,

            maintainDetailLists4, 
            showmaintainDetailLists4, 
            maintainBox4, 
            maintainText4, 
            maintainResponse4, 
            cancelmaintainRequest4, 
            savemaintainRequest4, 
            deletemaintainRequest4,


            petsLists,
            showpetsLists, 
            petsCount, 
            petsDetailLists1, 
            showpetsDetailLists1, 
            petsBox1, 
            petsText1, 
            petsResponse1, 
            cancelpetsRequest1, 
            savepetsRequest1, 
            deletepetsRequest1,
        }
    }
}
</script>

<style>

</style>