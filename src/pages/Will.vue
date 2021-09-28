<template>
  <div class="flex flex-col items-center pt-8 pb-8 px-3">
    <!-- step1 -->
    <div v-if="step1" class="flex flex-col w-full items-center space-y-7">
      <div class="text-4xl font-semibold mb-3">유언장 작성하기</div>
      <div class="w-full flex flex-col items-center text-xl">
        <div>이제 사랑하는 사람들에게</div>
        <div>{{currentUser.username}}의 삶을 전해볼까요?</div>
      </div>

      <div class="w-full flex flex-col items-center text-xl">
        <div>{{currentUser.username}}님이 적어둔 내용을 바탕으로</div>
        <div>유언장을 작성해봤어요.</div>
      </div>

      <div class="w-full flex flex-col items-center text-xl">
        <div>유언장을 미리 작성해두면</div>
        <div class="flex">
          <div class="highlight">{{currentUser.username}}님의 마지막 이야기</div><span class="">를</span>
        </div>
        <div class="flex">
          <div class="highlight">사랑하는 사람들에게 남길 수 있고,</div>
        </div>
      </div>

      <div class="w-full flex flex-col items-center text-xl">
        <div class="flex">
          <div class="highlight">남은 사람이 {{currentUser.username}}님의 삶을</div>
        </div>
        <div class="flex">
          <div class="highlight">정리하는데 큰 도움이 돼요,</div>
        </div>
      </div>

      <div class="w-full flex flex-col items-center text-xl">
        <div>법적 효력이 있는 유언장을</div>
        <div>작성하는 방법은 5가지가 있어요.</div>
      </div>

      <div class="w-full flex flex-col items-center text-xl">
        <div>마루가 소개할 방법은</div>
        <div class="mb-3">음성 유언장이에요.</div>
      </div>

      <div class="w-full flex flex-col items-center text-xl">
        <div>{{currentUser.username}}님의 유언 취지, 이름,</div>
        <div>오늘 날짜 연/원/일을 말하고</div>
      </div>

      <div class="w-full flex flex-col items-center text-xl">
        <div>참여하는 증인이</div>
        <div>{{currentUser.username}}님 이름과 유언이</div>
        <div>정확하다고 말해야</div>
        <div>법적 효력있는</div>
        <div>유언장이 완성돼요</div>
      </div>

      <div class="w-full flex flex-col items-center text-xl">
        <div>다른 4가지 방법은</div>
        <div>변호사, 공증인이 필요하지만,</div>
        <div>아이백은 증인만 있다면</div>
        <div>바로 유언장 작성이 가능해요.</div>
      </div>

      <div class="w-full flex flex-col items-center text-xl">
        <div>{{currentUser.username}}님의 중요한 정보가</div>
        <div>한 눈에 다 정리되었어요.</div>
        <div>유언장에 포함할 내용을</div>
        <div>체크해보세요.</div>
      </div>

      <button @click="showChecklistByComplete" class="bg-light hover:bg-primary cursor-pointer w-full md:w-96 text-white py-2 rounded-md">시작하기</button>
    </div>

    <!-- step2 -->
    <div v-if="step2" class="flex flex-col w-full items-center space-y-7">
      <div class="flex flex-col w-full items-center text-lg font-semibold">
        <div @click="showChecklistByComplete" ><span class="text-light">원하시는 질문</span>을 선택하시고</div>
        <div>확인을 눌러주세요</div>
      </div>
      <div class="space-y-7">
        <div class="flex flex-col space-y-4 w-full md:items-start">
          <div class="flex items-center">
            <img class="h-7 w-7 mr-3" src="/health.png" alt="">
            <div class="text-lg font-semibold">건강</div>            
          </div>
          <div class="space-y-2">
            <div v-if="checklist.health[3].iscomplete" class="flex ">
              <div>
              <input class="w-6 h-6 mr-3"  type="checkbox" v-model="userSelection" :value="`${checklist.health[3].question}`">
              </div>
              <div>{{checklist.health[3].question}}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <div class="flex items-center">
            <img class="h-7 w-7 mr-3" src="/finance.png" alt="">
            <div class="text-lg font-semibold">재무</div>            
          </div>
          <div  class="space-y-2">
            <div v-if="checklist.finance[0].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.finance[0].question}`">
              </div>
              <div>{{checklist.finance[0].question}}</div>
            </div>
            <div v-if="checklist.finance[2].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.finance[2].question}`">
              </div>
              <div>{{checklist.finance[2].question}}</div>
            </div>
            <div v-if="checklist.finance[3].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.finance[3].question}`">
              </div>
              <div>{{checklist.finance[3].question}}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <div class="flex items-center">
            <img class="h-7 w-7 mr-3" src="/testament.png" alt="">
            <div class="text-lg font-semibold">유언</div>            
          </div>
          <div  class="space-y-3">
            <div v-if="checklist.testament[0].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.testament[0].question}`">
              </div>
              <div>{{checklist.testament[0].question}}</div>
            </div>
            <div v-if="checklist.testament[1].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.testament[1].question}`">
              </div>
              <div>{{checklist.testament[1].question}}</div>
            </div>
            <div v-if="checklist.testament[2].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.testament[2].question}`">
              </div>
              <div>{{checklist.testament[2].question}}</div>
            </div>
            <div v-if="checklist.testament[3].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.testament[3].question}`">
              </div>
              <div>{{checklist.testament[3].question}}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <div class="flex items-center">
            <img class="h-7 w-7 mr-3" src="/funeral.png" alt="">
            <div class="text-lg font-semibold">장례식</div>            
          </div>
          <div  class="space-y-3">
            <div v-if="checklist.funeral[0].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.funeral[0].question}`">
              </div>
              <div>{{checklist.funeral[0].question}}</div>
            </div>
            <div v-if="checklist.funeral[1].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.funeral[1].question}`">
              </div>
              <div>{{checklist.funeral[1].question}}</div>
            </div>
            <div v-if="checklist.funeral[2].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.funeral[2].question}`">
              </div>
              <div>{{checklist.funeral[2].question}}</div>
            </div>
            <div v-if="checklist.funeral[3].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.funeral[3].question}`">
              </div>
              <div>{{checklist.funeral[3].question}}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <div class="flex items-center">
            <img class="h-7 w-7 mr-3" src="/digital.png" alt="">
            <div class="text-lg font-semibold">디지털</div>            
          </div>
          <div  class="space-y-2">
            <div v-if="checklist.digital[0].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.digital[0].question}`">
              </div>
              <div>{{checklist.digital[0].question}}</div>
            </div>
            <div v-if="checklist.digital[1].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.digital[1].question}`">
              </div>
              <div>{{checklist.digital[1].question}}</div>
            </div>
            <div v-if="checklist.digital[2].iscomplete" class="flex ">
              <div>
              <input  class="w-6 h-6 mr-3" type="checkbox" v-model="userSelection" :value="`${checklist.digital[2].question}`">
              </div>
              <div>{{checklist.digital[2].question}}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <div class="flex items-center">
            <img class="h-7 w-7 mr-3" src="/pet.png" alt="">
            <div class="text-lg font-semibold">반려동물</div>            
          </div>
          <div class="space-y-2">
            <div v-if="checklist.pet[0].iscomplete" class="flex ">
              <div>
              <input class="w-6 h-6 mr-3"  type="checkbox" v-model="userSelection" :value="`${checklist.pet[0].question}`">
              </div>
              <div>{{checklist.pet[0].question}}</div>
            </div>
          </div>
        </div>

      </div>
      <button @click="onAnswerToText" class="py-2 w-full md:w-96 hover:bg-primary cursor-pointer  text-white bg-light rounded-md">확인</button>
    </div>

    <!-- step3 -->
    <div v-if="step3" class="flex flex-col w-full items-center space-y-7">
      <div class="w-full flex flex-col items-center text-xl">
        <div>잘 했어요!</div>
        <div>이제 법적효력이 있는</div>
        <div>유언장이 완성됐어요.</div>
        <div>완성된 유언장을 다운받으세요.</div>
      </div>
      <div class="w-full flex flex-col items-center text-xl">
        <div>안심하세요.</div>
        <div>당신의 유언장은 당신만 볼 수 있어요.</div>
        <div>마루는 물론 아이백 서버에도</div>
        <div>저장되지 않아요.</div>
      </div>
      <div class="w-full flex flex-col items-center text-xl">
        <div>다운로드 버튼을 눌러볼까요?</div>
      </div>
      <div @click="startRecording" v-if="!recordingInProgress && !recordings.length" class="w-full flex flex-col items-center text-sm space-y-2">
        <i class="fas fa-microphone text-lighter bg-gray-200 text-6xl px-5 py-3 rounded-full"></i>
        <div>[마이크를 눌러주세요]</div>
      </div>
      <div @click="stopRecording" v-if="recordingInProgress" class="w-full flex flex-col items-center text-sm space-y-2">
        <i class="fas fa-microphone bg-gray-200 animate-pulse text-red-500  text-6xl px-5 py-3 rounded-full"></i>
        <div class="flex">[ 음성녹음 진행중 /<div class="text-primary"> 녹음을 종료하시려면 마이크를 눌러주세요.</div> ]</div>
      </div>
      <div  v-if="recordings.length" class="w-full flex flex-col items-center text-sm space-y-2">
        <i class="fas fa-microphone bg-gray-200 animate-pulse text-white  text-6xl px-5 py-3 rounded-full"></i>
        <div class="flex">[ 녹음불가 /<div class="text-primary ">취소 후 마이크 이용가능</div> ]</div>
      </div>

      <div id="userWill" class="w-full md:w-96 flex flex-col items-center text-xl bg-green-100 opacity-80 px-7 py-7 space-y-1">
        <div v-for="item in userWill" :key="item">{{item}}</div>
      </div>

      <div class="w-full flex justify-center text-xl md:w-96">
        <button @click="onTextToPdfDownload" class="w-full bg-lighter text-white py-2 -mt-7 hover:bg-primary">유언장 PDF 다운로드</button>       
      </div>

      <div class="w-full flex flex-col items-center text-xl" v-if="recordings.length > 0">
        <div v-for="(recording) in recordings" :key="recording.ts" class="w-full mb-7 flex justify-center">
          <audio class="w-full md:w-96" :src="recording.blobUrl" :type="recording.mimeType" controls="true"/>
        </div>
        <div class="w-full flex justify-center">
          <button  class=" bg-lighter py-3 w-1/2 hover:bg-primary text-white md:w-44 mr-8 rounded-lg">녹음파일 다운로드</button>    
            <button @click="deleteRecording" class="bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">취소</button>  
        </div>
      </div>
    </div>

    <!-- step4 -->
    <div v-if="step4" class="flex flex-col w-full items-center space-y-7">
      <div class="w-full flex flex-col items-center text-xl">
        <div>안녕하세요,</div>
        <div>변호사와 공증인 없이 쉽고 간단하게</div>
        <div>유언장을 작성할 수 있는 아이백입니다.</div>
        <div>음성 녹음이 가능한 폰만 있다면,</div>
        <div>지금 당장 유언장을 완성해볼까요?</div>
      </div>
      <div class="w-full flex flex-col items-center text-xl">
        <div class="highlight">단, 효력이 있는 유언장은</div>
        <div class="highlight">의사결정이 가능한 만 17세 이상</div>
        <div class="highlight">유언장 작성자와 증인 한 명이 필요해요.</div>
        <div>작성자가 유언의 취지, 성명, 오늘 날짜 연/월/일을 말하고,</div>
        <div>증인이 증인 이름과 유언 작성자 유언이</div>
        <div>정확하다고 말해야 법적 효력있는 유언장이 완성돼요. </div>
        <div class="text-primary">(「민법」 제1061조)</div>
      </div>
      <div class="w-full flex flex-col items-center text-xl">
        <div>유언장을 어떻게 쓸지</div>
        <div>모르겠다고요?</div>
        <div>아이백이 제공하는 예시를 살펴볼까요?</div>
      </div>
      <div @click="startRecording" v-if="!recordingInProgress && !recordings.length" class="w-full flex flex-col items-center text-sm space-y-2">
        <i class="fas fa-microphone text-lighter bg-gray-200 text-6xl px-5 py-3 rounded-full"></i>
        <div>[마이크를 눌러주세요]</div>
      </div>
      <div @click="stopRecording" v-if="recordingInProgress" class="w-full flex flex-col items-center text-sm space-y-2">
        <i class="fas fa-microphone bg-gray-200 animate-pulse text-red-500  text-6xl px-5 py-3 rounded-full"></i>
        <div class="flex">[ 음성녹음 진행중 /<div class="text-primary"> 녹음을 종료하시려면 마이크를 눌러주세요.</div> ]</div>
      </div>
      <div  v-if="recordings.length" class="w-full flex flex-col items-center text-sm space-y-2">
        <i class="fas fa-microphone bg-gray-200 animate-pulse text-white  text-6xl px-5 py-3 rounded-full"></i>
        <div class="flex">[ 녹음불가 /<div class="text-primary ">취소 후 마이크 이용가능</div> ]</div>
      </div>

      <div id="userWill" class="w-full md:w-96 flex flex-col items-center text-xl bg-green-100 opacity-80 px-2 py-7  space-y-7">
        <div class="bg-light text-white px-8 py-2 rounded-3xl">유언장예시</div>
        <div class="w-full">
          <div>나는 김영수이다.</div>
          <div>오늘은 2021년 1월 1일이다.</div>
          <div>내가 보유하고 있는 </div>
          <div>서울시 종로구 테헤란대로 101번지 아파트 </div>
          <div>101동 204호와 땅 경기도 남양주 보문동 </div>
          <div>21번지 13, 사망 당시 일체의 계좌 </div>
          <div>(신한은행 110-423-000001)는 </div>
          <div>딸 김은영에게 전부 상속한다. </div>
        </div>
        <div class="w-full">
          <div>나는 증인 박민수이고,</div>
          <div>유언자 김영수의 유언이 정확함을 확인한다. </div>
          <div>유언내용은 사망 당시 전체 재산을 </div>
          <div>딸 김은영에게 상속한다는 내용이다. </div>
        </div>
      </div>

      

      <div class="w-full flex flex-col items-center text-xl" v-if="recordings.length > 0">
        <div v-for="(recording) in recordings" :key="recording.ts" class="w-full mb-7 flex justify-center">
          <audio class="w-full md:w-96" :src="recording.blobUrl" :type="recording.mimeType" controls="true"/>
        </div>
        <div class="w-full flex justify-center">
          <button  @click="onRecordingDownload" class=" bg-lighter py-3 w-1/2 hover:bg-primary text-white md:w-44 mr-8 rounded-lg">녹음파일 다운로드</button>    
            <button @click="deleteRecording" class="bg-gray-100 py-3 w-1/2 md:w-44 rounded-lg">취소</button>  
        </div>
      </div>
    </div>

<!-- 1 -->
    <!-- <div v-if="currentUser.record_url" class=" md:text-lg text-xs  flex cursor-pointer bg-white w-full py-6  px-6 shadow-md items-center  border-b border-gray-200 ">
      <div class=" relative w-full flex  items-center">
          <i class="far fa-save text-white bg-green-600 opacity-80 px-3 py-2 rounded-full text-4xl"></i>
          <div class=" absolute bg-light  :left-0 text-sm rounded-full -bottom-2 ml-8 opacity-90 px-2 border-2 border-white ">1/1</div>
          <div class="ml-3">{{currentUser.nickname}}의 저장공간</div>
      </div>
    </div>
    <div v-if="currentUser.record_url" class= " w-full text-xs md:text-base shadow-md bg-white px-6 transition-all mb-5"> 
      <div class="relative flex md:flex-row flex-col border-b py-5  border-gray-200">
        <div class="md:w-1/2 w-full mb-3 md:mb-0">
          <audio class="w-full md:pr-4" :src="currentUser.record_url" controls="true"></audio>
        </div>
        <div class="md:w-1/2 w-full md:pl-2">
          <button @click="downloadSaveRecording"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">다운로드</button>
          <button @click="deleteSaveRecording" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
        </div>
      </div>
    </div> -->

    
    
    
    <!-- <div class="text-xs md:text-lg flex cursor-pointer bg-white w-full py-4 px-6 shadow-md items-center justify-start  border-b border-gray-200 ">
        <div v-if="!recordings.length" class="flex items-center">
        <i @click="startRecording" v-if="!recordingInProgress" class="fas hover:opacity-70 fa-microphone rounded-full text-4xl py-2 px-4 bg-gray-200"></i>
        <div v-if="!recordingInProgress" class=" ml-2">[ 마이크를 눌러주세요. ]</div>
        <i @click="stopRecording" v-if="recordingInProgress" class="fas hover:opacity-70 fa-microphone animate-pulse text-red-500 rounded-full text-4xl py-2 px-4 bg-gray-200"></i>
        <div v-if="recordingInProgress" class=" ml-2 flex">[ 음성녹음 진행중 /<div class="text-primary"> 녹음을 종료하시려면 마이크를 눌러주세요.</div> ]</div>
        </div>
        <div v-if="recordings.length" class="flex items-center">
        <i class="fas  fa-microphone text-white rounded-full text-4xl py-2 px-4 bg-gray-200"></i>
        <div  class=" ml-2 flex">[ 녹음불가 /<div class="text-primary ">취소 후 마이크 이용가능</div> ]</div>
        </div>
    </div> -->
    <!-- <div class= " w-full text-xs md:text-base shadow-md bg-white md:px-6 transition-all pb-40 md:pb-0  "> 
      <div class="relative flex flex-col md:py-5  border-gray-200">
        <div class="space-y-2 ">
          <div class="md:flex flex-none">
                  <div class="md:w-1/2 w-full md:ml-6">
                      <div class="mb-2">
                          <textarea placeholder="음성을 녹음하면 텍스트로 변환되는곳입니다" readonly v-model="speechToText" class=" md:h-72 h-28 resize-none w-full outline-none py-2 px-2  border  rounded-md border-gray-300"
                            ></textarea>
                      </div>
                      <div  class="space-y-3" v-if="recordings.length > 0">
                          <div v-for="(recording) in recordings" :key="recording.ts" class="">
                                <audio class="w-full" :src="recording.blobUrl" :type="recording.mimeType" controls="true"/>
                          </div>
                          <button  @click="saveRecording"  class="bg-light py-3 px-10 rounded-md mr-2 cursor-default ">저장</button>
                          <button @click="deleteRecording"  class="border-2 border-light py-2.5 px-10 rounded-md">취소</button>
                      </div>
                  </div>

          </div>
        </div> 
      </div>
    </div> -->
  
  </div>
</template>

<script>
import RecorderService from '../shared/RecorderService'
import {onBeforeMount, ref, computed} from 'vue'
import store from '../store'
import {USER_COLLECTION, CHECKLISTS_COLLECTION, storage} from '../firebase'
import {useRouter} from 'vue-router'
import axios from 'axios'
import moment from 'moment'
import html2pdf from 'html2pdf.js'

export default {
  emits: ["open-modal", 'state-incomplete'],
  components: {
  },
  setup(pops, {emit}) {
    const step1 = ref(true)
    const step2 = ref(false)
    const step3 = ref(false)
    const step4 = ref(false)


    const router = useRouter()
    const currentUser = computed(() => store.state.user)
    const isChecklist = ref(false)
    const isPdfButton = ref(false)
    const isChecklistButton = ref(true)
    const isUserWill = ref(false)
    const checklist = ref([])
    const userSelection = ref([])
    const userWill = ref([])


    onBeforeMount(async() => {
      if(currentUser.value === null) {
          router.push('/login')
      }
      window.scrollTo(0,0)
    })

    const onNextStep1 = () => {
      step1.value = false

    }

    const onNextStep2 = () => {
      
    }

    const showChecklistByComplete =  async() => {
       await CHECKLISTS_COLLECTION.where('uid', '==', currentUser.value.uid).get()
        .then((querySnapshot) => {
          if(querySnapshot.docs.length > 0) {
            const documentSnapshot = querySnapshot.docs[0]
            checklist.value = documentSnapshot.data()
          } else {
            alert('현재 리스트가 존재하지 않습니다 나만의 계획을 세워보세요')
            router.push('/welldyingchecklist')
          }
        })
        step1.value = false
        step2.value = true
        window.scrollTo(0,0)
    }

    const onAnswerToText = async () => {
      if(userSelection.value.length < 1) {
        step2.value = false 
        step4.value = true
        window.scrollTo(0,0)
        return
      }
      userWill.value.push('오늘은 '+moment(Date.now()).format('YYYY년 MM월 DD일')+'입니다.')
      userWill.value.push('저는 ' + currentUser.value.username + '입니다.')
      userWill.value.push('집주소는 ' + currentUser.value.address + '입니다.')
      userWill.value.push('지금부터 나의 유언을 남기도록 하겠습니다.')
      userSelection.value.forEach(element => {
        // 건강
        if(element === checklist.value.health[3].question){
          if(checklist.value.health[3].answer_box !== 'false') {
            userWill.value.push(checklist.value.health[3].answer_box)
          }
        }
        // 재무
        if(element === checklist.value.finance[0].question) {
          userWill.value.push(checklist.value.finance[0].answer_text)
        }
        if(element === checklist.value.finance[2].question) {
          userWill.value.push(checklist.value.finance[2].answer_text)
        }
        if(element === checklist.value.finance[3].question) {
          if(checklist.value.finance[3].answer_box === '기타') {
            userWill.value.push(checklist.value.finance[3].answer_text)
          } else {
            userWill.value.push('나의 자산과 관련해서는 ' + checklist.value.finance[3].answer_box + ' ' + checklist.value.finance[3].box_name1 + checklist.value.finance[3].box_name2 + '에게 연락하세요. ' + '연락처는 ' + checklist.value.finance[3].box_number1 + checklist.value.finance[3].box_number2 + '입니다.')
          }
          
        }
        // 유언
        if(element === checklist.value.testament[0].question) {
          userWill.value.push(checklist.value.testament[0].answer_text)
        }
        if(element === checklist.value.testament[1].question) {
          userWill.value.push(checklist.value.testament[1].answer_text)
        }
        if(element === checklist.value.testament[2].question) {
          userWill.value.push(checklist.value.testament[2].answer_text)
        }
        if(element === checklist.value.testament[3].question) {
          userWill.value.push(checklist.value.testament[3].answer_text)
        }
        // 장례식
        if(element === checklist.value.funeral[0].question) {
          userWill.value.push(checklist.value.funeral[0].answer_text)
        }
        if(element === checklist.value.funeral[1].question) {
          if(checklist.value.funeral[1].answer_box === '기타') {
            userWill.value.push(checklist.value.funeral[1].answer_text)
          } else {
            userWill.value.push(checklist.value.funeral[1].answer_box)
          }
        }
        if(element === checklist.value.funeral[2].question) {
          if(checklist.value.funeral[2].answer_box === '기타') {
            userWill.value.push(checklist.value.funeral[2].answer_text)
          } else {
            userWill.value.push(checklist.value.funeral[2].answer_box)
          }
        }
        if(element === checklist.value.funeral[3].question) {
          if(checklist.value.funeral[3].answer_box === '기타') {
            userWill.value.push(checklist.value.funeral[3].answer_text)
          } else {
            userWill.value.push(checklist.value.funeral[3].answer_box)
          }
        }
        // 디지털
        if(element === checklist.value.digital[0].question) {
          if(checklist.value.digital[0].answer_check === '기타') {
            userWill.value.push(checklist.value.digital[0].answer_text)
          } else {
            checklist.value.digital[0].answer_box.forEach((element) => {
              userWill.value.push(element.box_type + '의 계정은' + element.box_state + ' 관리자는 ' + element.box_name + '입니다.')
            })
          }
        }
        if(element === checklist.value.digital[1].question) {
          if(checklist.value.digital[1].answer_check === '기타') {
            userWill.value.push(checklist.value.digital[1].answer_text)
          } else {
            checklist.value.digital[1].answer_box.forEach((element) => {
              userWill.value.push(element.box_type + '의 계정' + element.box_state + ' 관리자는 ' + element.box_name + '입니다.')
            })
          }
        }
        if(element === checklist.value.digital[2].question) {
          userWill.value.push(checklist.value.digital[2].answer_text)
        }
        // if(element === checklist.value.digital[3].question) {
        //   userWill.value.push(checklist.value.digital[3].answer_text)
        // }
        // 반려동물
        if(element === checklist.value.pet[0].question) {
          userWill.value.push(checklist.value.pet[0].answer_text)
        }
      })
      userWill.value.push('나의 유언은 여기까지 입니다.')
      // userWill.value.forEach(element => {
      //   console.log(element)
      // })
      // isChecklist.value = false
      // isChecklistButton.value = false
      // isPdfButton.value = true
      // isUserWill.value = true
      step2.value =false
      step3.value =true
      window.scrollTo(0,0)
    }

    const onRecordingDownload = () => {
      console.log('dd')
      emit('open-modal')
    }

    const onTextToPdfDownload = () => {
           
            let data = document.getElementById('userWill')
            console.log('check : ', data)
           
            const options = {
                filename: `invoice-#003.pdf`,
                margin: 0,
                image: {type: 'jpeg', quality: 0.95 },
                html2canvas: { scrollY: 0, scale: 1, dpi: 400, letterRendering: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compressPDF: true }
            }

            try {

              html2pdf().set(options).from(data).toPdf().output('bloburl').then(async (result) => {
                  console.log('blob check : ', result)
                  // console.log('url check : ', blobUrl)
                  const pdf = await fetch(result).then(r=> r.blob()).then(blobFile=> new File([blobFile], "pdffile", {
                      type: 'application/pdf'
                  }));
                  const blobUrl = window.URL.createObjectURL(pdf)
                  console.log(typeof blobUrl)
                  axios({
                      url: blobUrl,
                      method: 'GET',
                      responseType: 'blob',
                      // headers : {
                      //     'Content-Type': 'application/pdf'
                      // }
                  }).then(response => {
                      console.log('success', response)
                      const url = window.URL.createObjectURL(new Blob([response.data]));
                      const link = document.createElement('a');
                      link.href = url;
                      link.setAttribute('download', `'from_iback_${Date.now()}.pdf`);
                      document.body.appendChild(link);
                      link.click();
                  }).catch(error => {
                      console.log('fail', error.message)
                      alert('axios error', error.message)
                  })
              })
            } catch (error) {
                alert('html2pdf error : ', error.message)
            }
        }
    


    return {
      step1,
      step2,
      step3,
      step4,

      onAnswerToText,
      showChecklistByComplete,
      checklist,
      isChecklist,
      isChecklistButton,
      isPdfButton,
      isUserWill,
      userSelection,
      userWill,
      onTextToPdfDownload,
      onRecordingDownload,
    }
  },
  data () {
    return {
      speechToText: '',
      currentUser: [],
      saveRecord : [],
      recordSate : false,
      enableEchoCancellation: true,
      recordingInProgress: false,
      supportedMimeTypes: [],
      recordings: [],
      micGainSlider: 100,
      micGain: 1.0,
      cleanupWhenFinished: true,
      addDynamicsCompressor: false
    }
  },
  created () {
    this.currentUser = computed(()=>store.state.user)
    this.recorderSrvc = new RecorderService()
    this.recorderSrvc.em.addEventListener('recording', (evt) => this.onNewRecording(evt))
  },
  watch: {
    cleanupWhenFinished (val) {
      this.recorderSrvc.config.stopTracksAndCloseCtxWhenFinished = this.cleanupWhenFinished
    },
    micGainSlider () {
      this.micGain = (this.micGainSlider * 0.01).toFixed(2)
      this.recorderSrvc.setMicGain(this.micGain)
    }
  },
  methods: {
    startRecording () {
      this.recorderSrvc.config.stopTracksAndCloseCtxWhenFinished = this.cleanupWhenFinished
      this.recorderSrvc.config.createDynamicsCompressorNode = this.addDynamicsCompressor
      this.recorderSrvc.config.enableEchoCancellation = this.enableEchoCancellation
      this.recorderSrvc.startRecording()
        .then(() => {
          this.recordingInProgress = true
        })
        .catch((error) => {
          console.error('Exception while start recording: ' + error)
          alert('Exception while start recording: ' + error.message)
        })
    },
    async stopRecording () {
      await this.recorderSrvc.stopRecording()
      this.recordingInProgress = false
    },
    async onNewRecording (evt) {
      this.recordings.push(evt.detail.recording)

      // await axios.post('https://us-central1-iback-project.cloudfunctions.net/apiSpeechToText', await fetch(this.recordings[0].blobUrl).then(r=> r.blob()).then(blobFile=> new File([blobFile], "audio", {
      //   type: this.recordings[0].mimeType
      // })),{
      //   headers: {
      //     'Content-Type': 'application/octet-stream'
      //   },
      // }).then((response) => {
      //   console.log(response)
      //   this.speechToText = response.data.text;
      // }).catch((error) => {
      //   console.log(error.message)
      // })

      
    },
    deleteRecording() {
      this.recordings = []
      this.speechToText = ''
      this.recordingInProgress = false
    },
    async saveRecording()  {
      // this.deleteSaveRecording();
      const sound = await fetch(this.recordings[0].blobUrl).then(r=> r.blob()).then(blobFile=> new File([blobFile], "audio", {
        type: this.recordings[0].mimeType
      }));
      try {
        const uploadTask = await storage.ref(`record/${this.currentUser.uid}/record`).put(sound)
        this.saveRecord = await uploadTask.ref.getDownloadURL();
        await USER_COLLECTION.doc(this.currentUser.uid).update({
          record_url: this.saveRecord,
        })
        store.commit("SET_RECORD_URL", this.saveRecord)
        this.recordings = []
        this.speechToText = ''
        this.recordingInProgress = false
      } catch (error) {
        console.log('uproad error : ', error)
      }
    },

    async downloadSaveRecording() {
      // Create a reference to the file we want to download
        const starsRef = await storage.ref(`record/${this.currentUser.uid}/record`)
        //Get the download URL
        starsRef.getDownloadURL().then(function(url) {
          
          // This can be downloaded directly:
          var xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function() {
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(xhr.response);
            const fileName = new Date()
            a.download = fileName; 
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            // delete a
            // var blob = xhr.response;
          };
          xhr.open('GET', url);
          xhr.send();
          // Insert url into an <img> tag to "download"
        }).catch(function(error) {

          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist`
              break;

            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;

            case 'storage/canceled':
              // User canceled the upload
              break;
            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              break;
          }
        });
    },
    async deleteSaveRecording() {
      // Create a reference to the file to delete
      var desertRef = await storage.ref(`record/${this.currentUser.uid}/record`)
        await USER_COLLECTION.doc(this.currentUser.uid).update({
          record_url: ''
        })
        store.commit("SET_RECORD_URL", '')      

      // Delete the file
      desertRef.delete().then(function() {
        // File deleted successfully
      }).catch(function(error) {
        // Uh-oh, an error occurred!
      });
    }
  }

  



}


</script>

<style>

</style>