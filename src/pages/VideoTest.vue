<template>
  <div class="flex flex-col h-screen overflow-y-scroll items-center pt-24 pb-48 md:pb-10 px-3 md:px-20">
      <div class="mt-20">
          <button @click="onClick" class="bg-green-300 hover:bg-green-700 text-white py-3 px-10 rounded-full shadow-xl">클릭하세요</button>
          <button>클릭2</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'

export default {
    setup() {
        const welcomeMessage = "안녕하세요 저는 최주영입니다."

        const onClick = () => { 
            alert(welcomeMessage);
        }
        // const access_token = ref('')
        // const data = {
        //     'apiKey': 'oMvfrWAicBxXM4ppMsNqZERJ62XP8f7DmJQflqClXCk'
        // }
        // const name = {
        //     'name': 'ju Young'
        // }
        //apikey: oMvfrWAicBxXM4ppMsNqZERJ62XP8f7DmJQflqClXCk
        const testLiveStreaming = async () => {
            // await axios.post('https://sandbox.api.video/auth/api-key', data,{
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // }).then((response) => {
            //     console.log('SUCCESS!', response)
            //     access_token.value = response.data.access_token
            // }).catch((error) => {
            //     console.log('FAILED...', error.message)
            // })
            
            // await axios.post('https://sandbox.api.video/live-streams', name, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${access_token.value}`
            //     }
            // }).then((response) => {
            //     console.log('SUCCESS2!', response)
            //     console.log(response.iframe)
            // }).catch((error) => {
            //     console.log('FAILED2...', error.message)
            // })

        }

        return {
          testLiveStreaming, onClick
        }
    }
}
</script>

<style>

</style>