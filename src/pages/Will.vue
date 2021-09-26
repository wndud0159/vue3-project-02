<template>
  <div class="flex flex-col h-screen overflow-y-scroll  bg-gray-200 items-center pt-28 lg:pt-40 pb-48 md:pb-10 px-3 md:px-20">
<!-- 1 -->
    <div v-if="currentUser.record_url" class=" md:text-lg text-xs  flex cursor-pointer bg-white w-full py-6  px-6 shadow-md items-center  border-b border-gray-200 ">
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
    </div>

    
    
    
    <div class="text-xs md:text-lg flex cursor-pointer bg-white w-full py-4 px-6 shadow-md items-center justify-start  border-b border-gray-200 ">
        <div v-if="!recordings.length" class="flex items-center">
        <i @click="startRecording" v-if="!recordingInProgress" class="fas hover:opacity-70 fa-microphone rounded-full text-4xl py-2 px-4 bg-gray-200"></i>
        <div v-if="!recordingInProgress" class=" ml-2">[ 마이크를 눌러주세요. ]</div>
        <i @click="stopRecording" v-if="recordingInProgress" class="fas hover:opacity-70 fa-microphone animate-pulse text-red-500 rounded-full text-4xl py-2 px-4 bg-gray-200"></i>
        <div v-if="recordingInProgress" class=" ml-2 flex">[ 음성녹음 진행중 /<div class="text-primary"> 녹음을 종료하시려면 마이크를 눌러주세요.</div> ]</div>
        </div>
        <div v-if="recordings.length" class="flex items-center">
        <i class="fas  fa-microphone text-white rounded-full text-4xl py-2 px-4 bg-gray-200"></i>
        <div  class=" ml-2 flex">[ 녹음불가 /<div class="text-primary "> 저장 혹은 취소 후 마이크 이용가능</div> ]</div>
        </div>
    </div>
    <div class= " w-full text-xs md:text-base shadow-md bg-white md:px-6 transition-all pb-40 md:pb-0  "> 
      <div class="relative flex flex-col md:py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class=" h-auto  md:w-1/2 w-full flex flex-col py-3 px-1 md:px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                          <button v-if="isChecklistButton" @click="showChecklistByComplete" class="bg-green-600 rounded-lg  text-white py-2 shadow-2xl border-4 border-green-600 text-lg mb-4 hover:bg-green-400 hover:border-green-400">답변했던 질문으로 유언장 만들기</button>
                          <button v-if="isPdfButton" @click="onTextToPdfDownload" class="bg-green-600 rounded-lg  text-white py-2 shadow-2xl border-4 border-green-600 text-lg mb-4 hover:bg-green-400 hover:border-green-400">나만의 유언장 PDF 다운로드</button>
                          <!-- will checklist section-->
                          <div v-if="checklist.length || isChecklist" class="flex flex-col text-lg space-y-4">
                            <div class="text-xl font-bold mb-3">원하시는 질문을 선택하시고 확인을 눌러주세요<router-link to="welldyingchecklist" class="text-blue-700">(계획을 세우면 선택할 수 있습니다 이동하기)</router-link></div>
                            <div>건강</div>
                            <div v-if="checklist.health[3].iscomplete" class="flex items-center relative "><input  v-model="userSelection" :value="`${checklist.health[3].question}`" class="w-10 h-10 mr-3" type="checkbox"><span>{{checklist.health[3].question}}</span></div>
                            <div>재무</div>
                            <div v-if="checklist.finance[0].iscomplete"  class="flex items-center "><input  v-model="userSelection" :value="`${checklist.finance[0].question}`" class="w-12 h-12 mr-3" type="checkbox"><span>{{checklist.finance[0].question}}</span></div>
                            <div v-if="checklist.finance[2].iscomplete"  class="flex items-center "><input  v-model="userSelection" :value="`${checklist.finance[2].question}`" class="w-10 h-10 mr-3" type="checkbox"><span>{{checklist.finance[2].question}}</span></div>
                            <div v-if="checklist.finance[3].iscomplete"  class="flex "><input  v-model="userSelection" :value="`${checklist.finance[3].question}`" class="w-12 h-12 mr-3" type="checkbox"><span>{{checklist.finance[3].question}}</span></div>
                            <div>유지</div>
                            <div v-if="checklist.testament[0].iscomplete"  class="flex  items-center"><input  v-model="userSelection" :value="`${checklist.testament[0].question}`" class="w-11 h-11 mr-3" type="checkbox"><span>{{checklist.testament[0].question}}</span></div>
                            <div v-if="checklist.testament[1].iscomplete"  class="flex items-center "><input  v-model="userSelection" :value="`${checklist.testament[1].question}`" class="w-12 h-12 mr-3" type="checkbox"><span>{{checklist.testament[1].question}}</span></div>
                            <div v-if="checklist.testament[2].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.testament[2].question}`" class="w-14 h-14 mr-3" type="checkbox"><span>{{checklist.testament[2].question}}</span></div>
                            <div v-if="checklist.testament[3].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.testament[3].question}`" class="w-16 h-16 mr-3" type="checkbox"><span>{{checklist.testament[3].question}}</span></div>
                            <div>장례식</div>
                            <div v-if="checklist.funeral[0].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.funeral[0].question}`" class="w-20 h-20 mr-3" type="checkbox"><span>{{checklist.funeral[0].question}}</span></div>
                            <div v-if="checklist.funeral[1].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.funeral[1].question}`" class="w-4 h-4 mr-3" type="checkbox"><span>{{checklist.funeral[1].question}}</span></div>
                            <div v-if="checklist.funeral[2].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.funeral[2].question}`" class="w-7 h-7 mr-3" type="checkbox"><span>{{checklist.funeral[2].question}}</span></div>
                            <div v-if="checklist.funeral[3].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.funeral[3].question}`" class="w-10 h-10 mr-3" type="checkbox"><span>{{checklist.funeral[3].question}}</span></div>
                            <div>디지털</div>
                            <div v-if="checklist.digital[0].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.digital[0].question}`" class="w-16 h-16 mr-3" type="checkbox"><span>{{checklist.digital[0].question}}</span></div>
                            <div v-if="checklist.digital[1].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.digital[1].question}`" class="w-10 h-10 mr-3" type="checkbox"><span>{{checklist.digital[1].question}}</span></div>
                            <div v-if="checklist.digital[2].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.digital[2].question}`" class="w-8 h-8 mr-3" type="checkbox"><span>{{checklist.digital[2].question}}</span></div>
                            <!-- <div v-if="checklist.digital[3].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.digital[3].question}`" class="w-8 h-8 mr-3" type="checkbox"><span>{{checklist.digital[3].question}}</span></div> -->
                            <div>반려동물</div>
                            <div v-if="checklist.pet[0].iscomplete"  class="flex items-center"><input  v-model="userSelection" :value="`${checklist.pet[0].question}`" class="w-10 h-10 mr-3" type="checkbox"><span>{{checklist.pet[0].question}}</span></div>
                            <button @click="onAnswerToText" class="bg-green-600 rounded-lg  text-white py-2 shadow-2xl border-4 border-green-600 text-lg mb-4 hover:bg-green-400 hover:border-green-400">확인</button>
                          </div>
                          <!-- will text seciton -->
                          <div v-if="isUserWill" id="userWill" class=" space-x-4 text-xl">
                            <span v-for="item in userWill" :key="item">{{item}}</span>
                          </div>
                        </div>
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
    </div>
  
  
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
  setup() {
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
    })

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
      isChecklist.value = true
    }

    const onAnswerToText = async () => {
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
      isChecklist.value = false
      isChecklistButton.value = false
      isPdfButton.value = true
      isUserWill.value = true
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

      await axios.post('https://us-central1-iback-project.cloudfunctions.net/apiSpeechToText', await fetch(this.recordings[0].blobUrl).then(r=> r.blob()).then(blobFile=> new File([blobFile], "audio", {
        type: this.recordings[0].mimeType
      })),{
        headers: {
          'Content-Type': 'application/octet-stream'
        },
      }).then((response) => {
        console.log(response)
        this.speechToText = response.data.text;
      }).catch((error) => {
        console.log(error.message)
      })

      
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