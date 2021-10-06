<template>
<div class="fixed z-50 inset-0 overflow-y-auto" @click="$emit('close-modal')">
  <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>



    <!-- content -->
    <div @click.stop class="inline-block  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
        <div class="bg-white">
            <div class="border-b border-gray-100 p-2 flex items-center justify-between">
                <div class="flex items-center">
                    <button @click="$emit('close-modal')" class="flex items-center justify-center fas fa-times text-primary text-lg w-10 h-10 p-2 hover:bg-blue-50 rounded-full"></button>
                    <span class="font-bold text-lg">프로필 수정</span>
                </div>
                <div class="text-right mr-2">
                    <button @click="onSaveProfile" class="hover:bg-dark bg-primary text-white font-bold px-3 py-1 rounded-full">저장</button>
                </div>
            </div>
            <!-- image section -->
            <div  class="h-60">
                <!-- background image -->
                <div class=" h-40 relative flex-none flex items-center justify-center">
                    <img ref="backgroundImage" 
                    src="/background.png"
                    class=" object-cover absolute h-full w-full">
                    <!-- <button class="absolute h-10 w-10 hover:text-gray-200 rounded-full fas fa-camera text-white text-lg"></button> -->
                    <input  type="file" accept="image/*" id="backgroundImageInput" class="hidden">
                
                
                    <!-- profile image -->
                    <img ref="profileImage"
                    :src="currentUser.profile_image_url"
                    class="border-4 border-white w-28 h-28 absolute rounded-full -bottom-14 left-2">
                    <button @click="onChangeProfileImage" class=" absolute -bottom-5 left-11 h-10 w-10 hover:text-gray-200 rounded-full fas fa-camera text-white text-lg"></button>
                    <input @change="previewProfileImage" type="file" accept="image/*" id="profileImageInput" class="hidden">
                </div>


                
            </div>
            <!-- info section -->
            <div class="flex flex-col p-2">
                <div class="mx-2 my-1 px-2 py-1 border text-gray-500 border-gray-200 reound hover:border-primary hover:text-primary">
                    <div class="text-sm">이름</div>
                    <input type="text" v-model="profileUserName" :placeholder="currentUser.nickname" class="text-black focus:outline-none">
                </div>
                <div class="mx-2 my-1 px-2 py-1 border text-gray-500 border-gray-200 reound hover:border-primary hover:text-primary">
                    <div class="text-sm">자기소개</div>
                    <textarea v-model="profileAboutMe" :placeholder="currentUser.introduce_myself" class=" text-black w-full resize-none outline-none" rows="6"></textarea>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import {ref, computed} from 'vue'
import {storage, USER_COLLECTION} from '../firebase'
import store from '../store'

export default {
    emits: ["close-modal"],
    setup(props, {emit}) {
        const currentUser = computed(() => store.state.user)
        const profileImage = ref(null)
        const profileImageData = ref(null)
        const profileUserName = ref(null)
        const profileAboutMe = ref(null)

        const onChangeProfileImage = () => {
            document.getElementById('profileImageInput').click()
        }


        const previewProfileImage = (event) => {
            const file = event.target.files[0]
            profileImageData.value = file
            let reader = new FileReader()
            reader.onload = function (event) {
                profileImage.value.src = event.target.result
            }
            reader.readAsDataURL(file)
        }


        const onSaveProfile = async () => {
            if(!profileImageData.value && !profileUserName.value && !profileAboutMe.value) {
                return
            }

            if(profileImageData.value) {
                try {
                    const uploadTask = await storage.ref(`prifle/${currentUser.value.uid}/profile`).put(profileImageData.value)
                    const url = await uploadTask.ref.getDownloadURL();
                    await USER_COLLECTION.doc(currentUser.value.uid).update({
                        profile_image_url: url,
                    })
                    store.commit("SET_PROFILE_IMAGE", url)
                } catch (error) {
                    console.log(`profile image data error:${error}`)
                }
            }

            if(profileUserName.value) {
                try {
                    await USER_COLLECTION.doc(currentUser.value.uid).update({
                        nickname: profileUserName.value,
                    })
                    store.commit("SET_NICKNAME", profileUserName.value)
                } catch (error) {
                    console.log(`profile image data error:${error}`)
                }
            }

            if(profileAboutMe.value) {
                try {
                    await USER_COLLECTION.doc(currentUser.value.uid).update({
                        introduce_myself: profileAboutMe.value,
                    })
                    store.commit("SET_INTRODUCE_MYSELF", profileAboutMe.value)
                } catch (error) {
                    console.log(`profile image data error:${error}`)
                }
            }

            
            emit('close-modal')
        }


        return {
            currentUser,profileUserName,previewProfileImage, onSaveProfile, onChangeProfileImage, profileAboutMe, profileImage
        }

    }

}
</script>

<style>

</style>