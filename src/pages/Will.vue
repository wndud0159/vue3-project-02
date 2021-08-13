<template>
  <div class="flex flex-col h-screen overflow-y-scroll  bg-gray-200 items-center pt-28 lg:pt-40 pb-48 md:pb-10 px-3 md:px-20">
    <div>
    <button @click="recordState ? onRecord() : offRecord()">녹음</button>
    <audio v-if="audioState" :src="createAudioUrl.value" controls true width='400' >dd</audio>
    </div>
    <div>
      <textarea name="" id="speech_result" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue';

export default {
setup() {

  const audioStream = ref()
  const audioMedia = ref()
  const audioSource = ref()
  const audioAnalyser = ref()
  const audioUrl = ref([])
  const createAudioUrl = ref()
  const recordState = ref(true)
  const audioState = ref(false)

  const onRecord = () => {
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.audioCtx.createScriptProcessor(0, 1, 1);
    audioAnalyser.value = analyser

  const makeSound = (stream) => {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      audioSource.value = audioCtx.createMediaStreamSource(stream);
      // AudioBufferSourceNode 연결
      audioSource.value.connect(audioAnalyser.value);
      audioAnalyser.value.connect(audioCtx.destination);
    }

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      audioStream.value = stream
      audioMedia.value = mediaRecorder
      makeSound(stream);
	// 음성 녹음이 시작됐을 때 onRec state값을 false로 변경
      analyser.onaudioprocess = function (e) {
          recordState.value = false
          console.log('음성녹음중')
      }
    })
  }


  const offRecord = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    audioMedia.value.ondataavailable = function (e) {
      audioUrl.value = e.data
      recordState.value = true
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    audioStream.value.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    audioMedia.value.stop();
    
    // 메서드가 호출 된 노드 연결 해제
    audioAnalyser.value.disconnect();
    audioSource.value.disconnect();
    console.log('음성녹음 중지')


      const blob = new Blob(audioUrl.value, {
        'type': 'audio/ogg codecs=opus'
      })
      createAudioUrl.value = URL.createObjectURL(blob) // 출력된 링크에서 녹음된 오디오 확인 가능
      console.log(createAudioUrl.value)
      audioState.value = true
      console.log('녹음파일 출력')
 


  };

  
  


  return {
    onRecord, recordState, offRecord, createAudioUrl, audioState    
  }
}
}

        // const record = document.getElementById("record")
        // const stop = document.getElementById("stop")
        // const soundClips = document.getElementById("sound-clips")
        // const chkHearMic = document.getElementById("chk-hear-mic")

        // const audioCtx = new(window.AudioContext || window.webkitAudioContext)() // 오디오 컨텍스트 정의

        // const analyser = audioCtx.createAnalyser()
        // //        const distortion = audioCtx.createWaveShaper()
        // //        const gainNode = audioCtx.createGain()
        // //        const biquadFilter = audioCtx.createBiquadFilter()

        // function makeSound(stream) {
        //     const source = audioCtx.createMediaStreamSource(stream)

        //     source.connect(analyser)
        //     //            analyser.connect(distortion)
        //     //            distortion.connect(biquadFilter)
        //     //            biquadFilter.connect(gainNode)
        //     //            gainNode.connect(audioCtx.destination) // connecting the different audio graph nodes together
        //     analyser.connect(audioCtx.destination)

        // }

        // if (navigator.mediaDevices) {
        //     console.log('getUserMedia supported.')

        //     const constraints = {
        //         audio: true
        //     }
        //     let chunks = []

        //     navigator.mediaDevices.getUserMedia(constraints)
        //         .then(stream => {

        //             const mediaRecorder = new MediaRecorder(stream)
                    
        //             chkHearMic.onchange = e => {
        //                 if(e.target.checked == true) {
        //                     audioCtx.resume()
        //                     makeSound(stream)
        //                 } else {
        //                     audioCtx.suspend()
        //                 }
        //             }
                    
        //             record.onclick = () => {
        //                 mediaRecorder.start()
        //                 console.log(mediaRecorder.state)
        //                 console.log("recorder started")
        //                 record.style.background = "red"
        //                 record.style.color = "black"
        //             }

        //             stop.onclick = () => {
        //                 mediaRecorder.stop()
        //                 console.log(mediaRecorder.state)
        //                 console.log("recorder stopped")
        //                 record.style.background = ""
        //                 record.style.color = ""
        //             }

        //             mediaRecorder.onstop = e => {
        //                 console.log("data available after MediaRecorder.stop() called.")

        //                 const clipName = prompt("오디오 파일 제목을 입력하세요.", new Date())

        //                 const clipContainer = document.createElement('article')
        //                 const clipLabel = document.createElement('p')
        //                 const audio = document.createElement('audio')
        //                 const deleteButton = document.createElement('button')

        //                 clipContainer.classList.add('clip')
        //                 audio.setAttribute('controls', '')
        //                 deleteButton.innerHTML = "삭제"
        //                 clipLabel.innerHTML = clipName

        //                 clipContainer.appendChild(audio)
        //                 clipContainer.appendChild(clipLabel)
        //                 clipContainer.appendChild(deleteButton)
        //                 soundClips.appendChild(clipContainer)

        //                 audio.controls = true
        //                 const blob = new Blob(chunks, {
        //                     'type': 'audio/ogg codecs=opus'
        //                 })
        //                 chunks = []
        //                 const audioURL = URL.createObjectURL(blob)
        //                 audio.src = audioURL
        //                 console.log("recorder stopped")

        //                 deleteButton.onclick = e => {
        //                     evtTgt = e.target
        //                     evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode)
        //                 }
        //             }

        //             mediaRecorder.ondataavailable = e => {
        //                 chunks.push(e.data)
        //             }
        //         })
        //         .catch(err => {
        //             console.log('The following error occurred: ' + err)
        //         })
        // }



</script>

<style>

</style>