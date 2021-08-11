<template>
  
  <div class="flex flex-col mt-44 md:mt-80 lg:mt-56 items-center justify-center mr-10 ml-10 ">
    <div class=" mb-10 flex flex-col w-full md:w-1/2 items-start">
      <div class="text-4xl font-bold text-primary mb-4">로그인</div>
      <div class="text-gray-500">아이백에 오신 걸 환영합니다. 기존에 사용하시는 계정으로 간편하게 로그인하세요.</div>
    </div>
    <div @click="loginWithKakao" class="flex bg-kakao items-center space-x-1 w-full md:w-1/2 justify-center  py-2 rounded-md  shadow mb-3 hover:opacity-30">
      <i class="fas fa-comment px-px"></i>
      <button class="">카카오로 로그인</button>
    </div>
    <div class="flex items-center space-x-1 bg-naver w-full md:w-1/2 justify-center  py-2 rounded-md shadow mb-3 hover:opacity-30">
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
import {onBeforeMount, ref} from 'vue'
import store from '../store'
import {USER_COLLECTION,} from '../firebase'


export default {
  setup() {
    const router = useRouter()
    const token = ref('')
    const userName = ref('')
    const profile_image_url = ref('')
    const email = ref('')
    const introduce_myself = ref('')

    onBeforeMount(() => {
        // console.log('유저상태', store.state.user)              
    })
  
    const loginWithKakao = async () => {
       window.Kakao.Auth.login({
         scope: 'profile_nickname, profile_image, account_email',
         success: function(response) {
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
        success: response => {
          //토큰 할당
          token.value = Kakao.Auth.getAccessToken();
          //토큰 셋업
          Kakao.Auth.setAccessToken(token.value);
          //정보 셋업
          const kakao_account = response.kakao_account
          userName.value = kakao_account.profile.nickname
          profile_image_url.value  = kakao_account.profile.profile_image_url
          email.value = kakao_account.email
          // console.log('email : ', email.value)

        // 데이터 확인 절차
        try {
            USER_COLLECTION.where("email", "==", email.value).get()
              .then((querySnapshot) => {
                if (querySnapshot.docs.length > 0) {
                  const documentSnapshot = querySnapshot.docs[0];
                  // console.log(documentSnapshot.data());
                  // console.log('database : ',documentSnapshot.data())
                  store.commit("SET_USER", documentSnapshot.data())      
                }
                else {
                  // decide what you want to do if the query resulted in no documents.
                  console.log('유저정보 없음')
                  onCreateUsers()
                }
                router.replace('/')
              })
              .catch((error) => { console.log('firebase store error : ',error) })
            
            
           } catch(e) {
            //  console.log('유저 정보 없음 : ', e.message)
            //  onCreateUsers()
           }

        }
        ,fail: function(error) {
          console.log('getKakaoProfile error', error.message)  
        }
      })
    }

    const onCreateUsers = async ()  => {
        // console.log('데이터등록')
        // 새로운 유저 데이터 등록
        try{
          const doc = USER_COLLECTION.doc(token.value)
          await doc.set({
            uid: token.value,
            email: email.value,
            nickname: userName.value,
            profile_image_url: profile_image_url.value,
            introduce_myself: '',
            social_type : '카카오',
            create_at: Date.now(),
          })
          router.replace('/')
        } catch(e) {
            console.log('firebase db error : ', e.message)
        }
    }

    


    return {
      loginWithKakao
    }
  }

}
</script>

<style>

</style>