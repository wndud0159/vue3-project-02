<template>
  <div class="flex flex-col h-screen overflow-y-scroll  bg-gray-200 items-center pt-28 lg:pt-40 pb-48 md:pb-10 px-3 md:px-20">

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
          <audio class="w-full md:pr-4" :src="currentUser.record_url" controls="true" type="audio/webm;codecs=opus"></audio>
        </div>
        <div class="md:w-1/2 w-full md:pl-2">
          <button @click="downloadSaveRecording"  class="bg-light rounded-md px-10 py-3 mr-2 hover:bg-dark">다운로드</button>
          <button @click="deleteSaveRecording" class="border-2 border-light rounded-md px-10 py-2.5 ">삭제</button>
        </div>
      </div>
    </div>

    
    
    
    <div class="text-xs md:text-lg flex cursor-pointer bg-white w-full py-4  px-6 shadow-md items-center justify-start  border-b border-gray-200 ">
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
    <div class= "pt-1 w-full text-xs md:text-base h-screen shadow-md bg-white px-6 transition-all mb-36 md:mb-0 "> 
      <div class="relative flex flex-col border-b py-5  border-gray-200">
                <div class="space-y-2 ">
                    <div class="md:flex flex-none">
                        <div class="md:w-1/2 w-full">
                            <div class="mb-2">
                                <textarea readonly class=" md:h-72 h-40 resize-none w-full outline-none py-2 px-2  border  rounded-md border-gray-300"
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

                        <div class=" mt-4 md:mt-0 md:w-1/2 w-full flex flex-col h-full md:ml-6 py-3 px-6 bg-green-100 opacity-80 border-l-8  border-green-900 border-opacity-30">
                          <div>
                            <div>예</div>
                            <ul class=" ml-5 list-disc mb-3">
                                <li>나는 ooo이다. 오늘은 0000년 00월 00일이다. 나는 사후를 대비하기 위해서 내가 보유하고 있는 서울시 00구 000대로 000번지 00 아파트 00동 00호와 경기도 00시 00동 000번지 땅 그리고 사망당시 일체의 금융재산을 아들 000에게 전부 상속한다.</li>
                            </ul>
                          </div>
                          <div class=" px-6 py-3 space-y-3 shadow-2xl bg-green-400 border-green-900 border-l-8">
                            <div class=" font-bold">* 아래의 리스트를 말해야합니다. 빠지지 않도록 체크하면서 유언장을 구술하십시오.</div>
                            <div class="flex items-center justify-center shadow-2xl  w-full py-4 rounded-xl bg-white">
                            <input v-if="checklist1" @click="closeChecklist1" class="willChecklist mr-2" type="radio" value=1><span v-if="checklist1">유언의 취지 및 내용</span>
                            <input v-if="checklist2" @click="closeChecklist2" class="willChecklist mr-2" type="radio" value=1><span v-if="checklist2">유언자 성명</span>
                            <input v-if="checklist3" @click="closeChecklist3" class="willChecklist mr-2" type="radio" value=1><span v-if="checklist3">유언자 유언한 날짜 연월일</span>
                            <input v-if="checklist4" @click="closeChecklist4" class="willChecklist mr-2" type="radio" value=1><span v-if="checklist4">증인 1명</span>
                            <input v-if="checklist5" @click="closeChecklist5" class="willChecklist mr-2" type="radio" value=1><span v-if="checklist5">증인 성명</span>
                            <input v-if="checklist6" @click="closeChecklist6" class="willChecklist mr-2" type="radio" value=1>
                            <div v-if="checklist6" class="flex flex-col">
                            <span>증인은 유언의 정확함</span>
                            <div class="flex flex-col">(예시 : 저는 증인 000익고, 유언자 000의 유언이 정확함을 확인한다. )</div>
                            </div>
                            <div v-if="checklist7">모두 체크 하셨습니다.</div>
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
import RecorderService from '../shared/RecorderService'
import {onBeforeMount, ref, computed} from 'vue'
import store from '../store'
import {USER_COLLECTION, storage} from '../firebase'


export default {
  setup() {
    const checklist1 = ref(true)
    const checklist2 = ref(false)
    const checklist3 = ref(false)
    const checklist4 = ref(false)
    const checklist5 = ref(false)
    const checklist6 = ref(false)
    const checklist7 = ref(false)

    const closeChecklist1 = () => {
      checklist1.value = false
      checklist2.value = true
    }
    const closeChecklist2 = () => {
      checklist2.value = false
      checklist3.value = true 
    }
    const closeChecklist3 = () => {
      checklist3.value = false
      checklist4.value = true
    }
    const closeChecklist4 = () => {
      checklist4.value = false
      checklist5.value = true
    }
    const closeChecklist5 = () => {
      checklist5.value = false
      checklist6.value = true
    }
    const closeChecklist6 = () => {
      checklist6.value = false
      checklist7.value = true
    }


    return {
      checklist1,
      checklist2,
      checklist3,
      checklist4,
      checklist5,
      checklist6,
      checklist7,
      closeChecklist1,
      closeChecklist2,
      closeChecklist3,
      closeChecklist4,
      closeChecklist5,
      closeChecklist6,
    }
  },
  data () {
    return {
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
    stopRecording () {
      this.recorderSrvc.stopRecording()
      this.recordingInProgress = false
    },
    onNewRecording (evt) {
      this.recordings.push(evt.detail.recording)
    },
    deleteRecording() {
      this.recordings = []
      this.recordingInProgress = false
    },
    async saveRecording()  {
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
        this.recordingInProgress = false
      } catch (error) {
        console.log('uproad error : ', error)
      }
    },

    async downloadSaveRecording() {
      // Create a reference to the file we want to download
        const starsRef = await storage.refFromURL(this.currentUser.record_url)
        console.log(starsRef)
        // Get the download URL
        starsRef.getDownloadURL().then(function(url) {
          // This can be downloaded directly:
          var xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function(event) {
            var blob = xhr.response;
          };
          xhr.open('GET', url);
          xhr.send();
          // Insert url into an <img> tag to "download"
        }).catch(function(error) {

          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
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