<template>
    <div class="w-full mb-10 md:px-60">
        <div @click="onPrev" class="px-2 md:px-0 flex cursor-pointer  text-primary pt-6 items-center">
          <i class="flex-1 fas fa-angle-left -mt-1 text-4xl mr-24"></i>
          <div class="flex  w-full -ml-40 justify-center text-xl font-semibold">공지사항</div>
        </div>


        <div class="text-sm text-gray-500 border-b border-gray-200">
            <div class="px-2 md:px-0">
                <div class="px-2 md:px-0  space-y-5 py-6 ">
                    <div class="text-base text-black font-semibold">2021년 9월 27일</div>
                    <div>아이백 서비스에 오신 걸 환영합니다. 더욱 좋은 서비스를 만들도록 노력하겠습니다.</div>
                    <div>현재 아이백 서비스는 Beta버전 입니다. 서비스에 대해 궁금하신 점은 좌측 하단 아이콘을 눌러서 문의해주세요.</div>
                    <div>
                        <div>감사합니다.</div>
                        <div>빅웨이브 팀</div>
                    </div>
                </div>
            </div>
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