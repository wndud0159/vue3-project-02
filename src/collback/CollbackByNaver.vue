<template>
    <div class="flex flex-col justify-center items-center text-4xl mt-40">잠시만 기다려 주세요 로그인 중 입니다.</div>
</template>

<script>
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'
import store from '../store'
import {USER_COLLECTION, auth} from '../firebase'
export default {
    
setup() {
    const userData = ref([])
    const router = useRouter()

    onMounted( async() => {
     
        const naverState = router.currentRoute.value.query.state
        const state = window.localStorage.getItem('naverState')
        const naverAuthCode = router.currentRoute.value.query.code
       
        window.localStorage.removeItem('naverState')

        if(naverState !== state) {
            alert("잘못된 방법으로 접근하셨습니다. 로그인 페이지로 이동합니다.");
        router.push("/login");
        return;
        }
       
        let code = {
            code : naverAuthCode
        }

        await axios.post('https://us-central1-iback-project.cloudfunctions.net/authWithNaver', code, {
            }).then(response => {
                console.log('authWithNaver Success');
            getProfileNaver(response.data.access_token)
        }).catch(error => {
            console.log('naver request error : ', error)
        })
        
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

    const getProfileNaver = async (accesstoken) => {
        let code = {
            code : accesstoken
        }

        await axios.post('https://us-central1-iback-project.cloudfunctions.net/getProfileNaver', code, {
        }).then( async response => {
            console.log('get userInfo by naver');

          //info set
          const naver_account = response.data.response
          userData.value.push({
              userId: 'naver:'+naver_account.id,
              nickname: naver_account.name,
              profile_image_url: naver_account.profile_image,
              provider: 'NAVER'
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



        }).catch(error => {
            console.log('naver request error : ', error)
        })
    }

    return {
        
    }
}
}
</script>

<style>

</style>