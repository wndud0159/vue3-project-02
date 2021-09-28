<template>
  <div class="w-full px-2 mb-10 md:px-60">
    <div @click="onPrev" class="flex cursor-pointer  text-primary py-6 items-center">
      <i class="flex-1 fas fa-angle-left -mt-1 text-4xl mr-24"></i>
      <div class="flex  w-full -ml-40 justify-center text-xl font-semibold">고객센터</div>
    </div>
    <div class=" flex flex-col items-start w-full">
      <router-link to="/businessalliance"  @click="sideToggleMenu = false" class="py-5 flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
        사업제휴 <i class="fas fa-angle-right text-gray-400 "></i></router-link>
      <router-link to="/notice"  @click="sideToggleMenu = false" class="py-5 flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
        공지사항 <i class="fas fa-angle-right text-gray-400 "></i></router-link>
      <router-link to="/termsofuse"  @click="sideToggleMenu = false" class="py-5 flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
        서비스 이용약관 <i class="fas fa-angle-right text-gray-400 "></i></router-link>
      <router-link to="/privacypolicy" @click="sideToggleMenu = false" class="py-5 flex items-center  w-full md:px-6 px-3 justify-between border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
        개인정보 보호정책 <i class="fas fa-angle-right text-gray-400 "></i></router-link>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import {onBeforeMount} from 'vue'

export default {
    setup() {
        const router = useRouter()

        onBeforeMount(() => {
            window.scrollTo(0, 0)
        })

        const onPrev = () => {
            router.go(-1)
        }

        return {
            onPrev,
        }
    }

}
</script>

<style>

</style>