<template>
  
  <div class="flex flex-col mt-44 md:mt-80 lg:mt-56 items-center justify-center mr-10 ml-10 ">
    <div class=" mb-10 flex flex-col w-full md:w-1/2 items-center">
      <div class="text-4xl font-bold text-primary mb-4 text-center">로그인</div>
      <div class="text-gray-500">아이백에 오신 걸 환영합니다. 기존에 사용하시는 계정으로 간편하게 로그인하세요.</div>
    </div>
    <div @click="loginWithKakao" class="flex bg-kakao items-center space-x-1 w-full md:w-1/2 justify-center  py-2 rounded-md  shadow mb-3 hover:opacity-30">
      <i class="fas fa-comment px-px"></i>
      <button class="">카카오로 로그인</button>
    </div>
    <div @click="loginWithNaver" class="flex items-center space-x-1 bg-naver w-full md:w-1/2 justify-center  py-2 rounded-md shadow mb-3 hover:opacity-30">
      <img src="/naver.ico" class="w-5 h-5" alt="">
      <button class="text-white">네이버로 로그인</button>
    </div>
    <div class=" bg-white flex items-center space-x-1 w-full md:w-1/2 justify-center    py-2 rounded-md shadow hover:opacity-30">
      <img src="/google.ico" class="w-5 h-5" alt="">
      <button class="">구글로 로그인</button>
    </div>
    
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import {onBeforeMount, ref, computed, onMounted} from 'vue'
import store from '../store'
import {USER_COLLECTION, auth} from '../firebase'
import axios from 'axios'


export default {
  setup() {
    const router = useRouter()
    const userData = ref([])
    

    onBeforeMount(() => {
        // console.log('유저상태', store.state.user)  
    })


    const onCreateUsers = async ()  => {
        // 새로운 유저 데이터 등록
        try{
          const doc = await USER_COLLECTION.doc(userData.value[0].userId)
          await doc.set({
            uid: userData.value[0].userId,
            nickname: userData.value[0].nickname,
            profile_image_url: userData.value[0].profile_image_url,
            record_url: '',
            introduce_myself: '',
            provider : userData.value[0].provider,
            create_at: Date.now(),
          })
          const user = await USER_COLLECTION.doc(userData.value[0].userId).get()
          store.commit("SET_USER", user.data()) 
        } catch(e) {
            console.log('firebase db error : ', e.message)
        }
    }


  
    const loginWithKakao = async () => {
       window.Kakao.Auth.login({
         scope: 'profile_nickname, profile_image, account_email',
         success: async function(response) {
           getKakaoProfile(response)
         },
         fail : function(error) {
           console.log('kakao Login error : ',error.message)
         }
       })
    }

    const getKakaoProfile = async (request) => {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: async response => {
          
          //info set
          const kakao_account = response.kakao_account
          userData.value.push({
            userId: 'kakao:'+response.id,
            nickname: kakao_account.profile.nickname,
            profile_image_url: kakao_account.profile.profile_image_url,
            provider: 'KAKAO'
          })

          // data checked
          try {
            await axios.post('https://us-central1-iback-project.cloudfunctions.net/authWithFirebase', userData.value[0], {
            }).then( async response => {
              console.log('get firebase token')
              await auth.signInWithCustomToken(response.data)
                .then(response => {
                  console.log('custom token success')
                })
            // decide what you want to do if the query resulted in no documents.
            }).catch(error => {
              console.log('error : ', error)
            })  
            await USER_COLLECTION.where('uid', '==' ,userData.value[0].userId).get()
              .then(async(querySnapshot) => {
                if (querySnapshot.docs.length > 0) {
                  const documentSnapshot = querySnapshot.docs[0];
                  store.commit("SET_USER", documentSnapshot.data())      
                }
                else {
                  console.log('new user')
                  await onCreateUsers()
                }
                router.replace('/')
            })
          } catch(e) {
            console.log('error : ', e)
          }

        }
        ,fail: function(error) {
          console.log('getKakaoProfile error', error.message)  
        }
      })
    }

    const loginWithNaver = async () => {
      const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log(state);
        window.localStorage.setItem('naverState', state);

        const protocol = location.protocol;
        const hostName = location.hostname;
        const port = location.port;

        let url = protocol + '//' + hostName + (port ? ':' + port : '');
        url += '/collback/naver';

        const authUrl = 'https://nid.naver.com/oauth2.0/authorize';
        const params = [];
        params.push('response_type=code');
        params.push('client_id=' + import.meta.env.VITE_NAVER_APP_CLIENT_ID);
        params.push('redirect_uri=' + url);
        params.push('state=' + state);

        const authCodeUrl = authUrl + "?" + params.join('&');
        // console.log(authCodeUrl);
        location.href = authCodeUrl;
       
    }

    
    

    

  


    return {
      loginWithKakao, loginWithNaver,
    }
  }

}
</script>

<style>

</style>