<template>
  <div class="flex flex-col h-screen overflow-y-scroll  bg-gray-200 items-center pt-28 lg:pt-40 pb-48 md:pb-10 px-3 md:px-20">
    <div>
    <i class="fas fa-microphone text-4xl py-2 px-4 bg-white rounded-full text-gray-400 hover:text-black"></i>
    <div @click="startSpeechRecognition">녹음하기</div>
    <div @click="endSpeechRecognition">멈추기</div>
    </div>
    <div>
      <textarea name="" id="speech_result" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue';

export default {
setup() {
  let recognition = null;

  onBeforeMount(() => {
    recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ko';
    recognition.maxAlternatives = 5;
    if(!recognition) {
      alert('음성기능을 지원하지 않는 브라우저 입니다.');
    }
  })
  

  const startSpeechRecognition = () => {
    console.log('Start')
    recognition.addEventListener("speechStart", ()=> {
      console.log('speech start');
    });
    recognition.addEventListener('speechEnd', () => {
      console.log('speech end');
    });
    recognition.addEventListener('result', (event) => {
      console.log('speech result', event.results);
      const text = event.results[0][0].transcript;
      document.getElementById('speech_result').value = text;
    });

    recognition.start();

  }

  const endSpeechRecognition = () => {
    recognition.stop();
  }

  return {
    startSpeechRecognition, endSpeechRecognition
  }
  // window.addEventListener('load', checkCompatibility)
}
}
</script>

<style>

</style>