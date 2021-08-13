<template>
  <div class="flex flex-col h-screen overflow-y-scroll  bg-gray-200 items-center pt-28 lg:pt-40 pb-48 md:pb-10 px-3 md:px-20">
    <div>
    <button  @click="startRecording" :disabled="recordingInProgress">Start Recording</button>
    <button @click="stopRecording" :disabled="!recordingInProgress">Stop Recording</button>
    <button @click="checkRecording">valueCheck</button>
    <div v-if="recordings.length > 0">
      <div v-for="(recording,idx) in recordings" :key="recording.ts">
        <div>
          <h3>Recording #{{ idx + 1 }}</h3>
        </div>
        <div>
          <audio :src="recording.blobUrl" :type="recording.mimeType" controls="true"/>
        </div>
      </div>
    </div>
    </div>
    <div>
      <textarea name="" id="speech_result" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
import RecorderService from '../shared/RecorderService'
import {onBeforeMount, ref} from 'vue'


export default {
  setup() {
    onBeforeMount(() => {
      
    })
  },
  data () {

    return {
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
    checkRecording() {
      console.log(this.recordings[0].blobUrl)
    }
    
    

  }



}


</script>

<style>

</style>