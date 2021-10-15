<template>
    <div v-if="currentUser" class="w-full px-2 mb-10 md:px-60">
        <div @click="onPrev" class="flex cursor-pointer text-primary py-6 items-center">
            <i class="flex-1 fas fa-angle-left -mt-1 text-4xl mr-24"></i>
            <div class="flex w-full -ml-40 justify-center text-xl font-semibold">내정보</div>
        </div>
        <div class="w-full px-2 md:px-0 space-y-7">
            <div class="w-full flex flex-col items-center space-y-4 mb-16">
                <img :src="`${currentUser.profile_image_url}`" class="w-24 h-24 rounded-full" alt="" />
                <div class="w-full flex flex-col items-center">
                    <div class="text-3xl">{{ currentUser.nickname }} <span class="text-xl">님</span></div>
                    <div @click="showProfileModal" class="text-primary cursor-pointer hover:text-dark pt-3 text-xl">프로필 수정</div>
                </div>
            </div>
            <!-- <div class="w-full flex flex-col items-center text-lg font-semibold space-y-2">
                <div>{{currentUser.nickname}}님, 안녕하세요?</div>
                <div>마루와 함께 작성하신 웰다잉</div>
                <div>매뉴얼 리스트를 볼 수 있어요.</div>
                <div>아래 아이콘을 하나하나씩 클릭하면, </div>
                <div>질문과 답변을 확인할 수 있습니다.</div>
            </div> -->
            <div class="flex flex-col w-full space-y-16">
                <!-- checklist section -->
                <div class="flex flex-col w-full space-y-3">
                    <div class="text-xl font-semibold">내가 작성한 웰다잉 매뉴얼 리스트</div>
                    <div class="w-full">
                        <div v-if="!isHealth" @click="downHealth" class="flex w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/health.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">건강</div>
                            </div>
                            <i class="fas fa-sort-up text-3xl -mb-2.5"></i>
                        </div>
                        <div v-if="isHealth" @click="upHealth" class="flex mb-3 w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/health.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">건강</div>
                            </div>
                            <i class="fas fa-sort-down text-3xl animate-bounce -mt-2.5"></i>
                        </div>
                        <div v-if="isHealth">
                            <div class="px-6">
                                <div class="mb-3">
                                    <div>1. {{ checklist.health[0].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.health[0].answer_text }}</div>
                                </div>
                                <div class="mb-3">
                                    <div>2. {{ checklist.health[1].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.health[1].answer_text }}</div>
                                </div>
                                <div class="mb-3">
                                    <div>3. {{ checklist.health[2].question }}</div>
                                    <div class="text-light font-semibold">
                                        답변 : <span v-for="item in checklist.health[2].answer_box" :key="item">{{ item }}, </span> {{ checklist.health[2].answer_text }}
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div>4. {{ checklist.health[3].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.health[3].answer_box }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div v-if="!isFinance" @click="downFinance" class="flex w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/finance.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">재무</div>
                            </div>
                            <i class="fas fa-sort-up text-3xl -mb-2.5"></i>
                        </div>
                        <div v-if="isFinance" @click="upFinance" class="flex mb-3 w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/finance.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">재무</div>
                            </div>
                            <i class="fas fa-sort-down text-3xl animate-bounce -mt-2.5"></i>
                        </div>
                        <div v-if="isFinance">
                            <div class="px-6">
                                <div class="mb-3">
                                    <div>1. {{ checklist.finance[0].question }}</div>
                                    <div class="text-light font-semibold">
                                        답변 : <span v-for="item in checklist.finance[0].answer_box" :key="item">{{ item.box_type }}/{{ item.box_name }}&nbsp;&nbsp;</span>
                                        {{ checklist.finance[0].answer_text }}
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div>2. {{ checklist.finance[1].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.finance[1].answer_text }}</div>
                                </div>
                                <div class="mb-3">
                                    <div>3. {{ checklist.finance[2].question }}</div>
                                    <div class="text-light font-semibold">
                                        답변 : <span v-for="item in checklist.finance[2].answer_box" :key="item">{{ item.box_name }}/{{ item.box_type }}/{{ item.box_number }}&nbsp;&nbsp;</span>
                                        {{ checklist.finance[2].answer_text }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div v-if="!isTestament" @click="downTestament" class="flex w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/testament.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">유언</div>
                            </div>
                            <i class="fas fa-sort-up text-3xl -mb-2.5"></i>
                        </div>
                        <div v-if="isTestament" @click="upTestament" class="flex mb-3 w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/testament.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">유언</div>
                            </div>
                            <i class="fas fa-sort-down text-3xl animate-bounce -mt-2.5"></i>
                        </div>
                        <div v-if="isTestament">
                            <div class="px-6">
                                <div class="mb-3">
                                    <div>1. {{ checklist.testament[0].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.testament[0].answer_text }}</div>
                                </div>
                                <div class="mb-3">
                                    <div>2. {{ checklist.testament[1].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.testament[1].answer_text }}</div>
                                </div>
                                <div class="mb-3">
                                    <div>3. {{ checklist.testament[2].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.testament[2].answer_text }}</div>
                                </div>
                                <div class="mb-3">
                                    <div>4. {{ checklist.testament[3].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.testament[3].answer_text }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div v-if="!isFuneral" @click="downFuneral" class="flex w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/funeral.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">장례식</div>
                            </div>
                            <i class="fas fa-sort-up text-3xl -mb-2.5"></i>
                        </div>
                        <div v-if="isFuneral" @click="upFuneral" class="flex mb-3 w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/funeral.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">장례식</div>
                            </div>
                            <i class="fas fa-sort-down text-3xl animate-bounce -mt-2.5"></i>
                        </div>
                        <div v-if="isFuneral">
                            <div class="px-6">
                                <div class="mb-3">
                                    <div>1. {{ checklist.funeral[0].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.funeral[0].answer_text }}</div>
                                </div>
                                <div class="mb-3">
                                    <div>2. {{ checklist.funeral[1].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.funeral[1].answer_box }}&nbsp;&nbsp;{{ checklist.funeral[1].answer_text }}</div>
                                </div>
                                <div class="mb-3">
                                    <div>3. {{ checklist.funeral[2].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.funeral[2].answer_box }}&nbsp;&nbsp;{{ checklist.funeral[2].answer_text }}</div>
                                </div>
                                <div class="mb-3">
                                    <div>4. {{ checklist.funeral[3].question }}</div>
                                    <div class="text-light font-semibold">
                                        답변 : {{ checklist.funeral[3].answer_box[0].box_type1 }}/{{ checklist.funeral[3].answer_box[0].box_type2 }} {{ checklist.funeral[3].answer_text }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div v-if="!isDigital" @click="downDigital" class="flex w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/digital.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">디지털</div>
                            </div>
                            <i class="fas fa-sort-up text-3xl -mb-2.5"></i>
                        </div>
                        <div v-if="isDigital" @click="upDigital" class="flex mb-3 w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/digital.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">디지털</div>
                            </div>
                            <i class="fas fa-sort-down text-3xl animate-bounce -mt-2.5"></i>
                        </div>
                        <div v-if="isDigital">
                            <div class="px-6">
                                <div class="mb-3">
                                    <div>1. {{ checklist.digital[0].question }}</div>
                                    <div class="text-light font-semibold">
                                        답변 : <span v-for="item in checklist.digital[0].answer_box" :key="item">{{ item.box_type }}/{{ item.box_state }}/{{ item.box_name }}&nbsp;&nbsp;</span>
                                        {{ checklist.digital[0].answer_text }}
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div>2. {{ checklist.digital[0].question }}</div>
                                    <div class="text-light font-semibold">
                                        답변 : <span v-for="item in checklist.digital[0].answer_box" :key="item">{{ item.box_type }}/{{ item.box_state }}/{{ item.box_name }}&nbsp;&nbsp;</span>
                                        {{ checklist.digital[0].answer_text }}
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div>3. {{ checklist.digital[0].question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ checklist.digital[0].answer_text }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div v-if="!isPet" @click="downPet" class="flex w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/pet.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">반려동물</div>
                            </div>
                            <i class="fas fa-sort-up text-3xl -mb-2.5"></i>
                        </div>
                        <div v-if="isPet" @click="upPet" class="flex mb-3 w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/pet.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">반려동물</div>
                            </div>
                            <i class="fas fa-sort-down text-3xl animate-bounce -mt-2.5"></i>
                        </div>
                        <div v-if="isPet">
                            <div class="px-6" v-for="(item, index) in checklist.pet" :key="index">
                                <div class="mb-3">
                                    <div>{{ item.question }}</div>
                                    <div class="text-light font-semibold">답변 : {{ item.answer_text }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div v-if="!isBucketlist" @click="downBucketlist" class="flex w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/bucketlist.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">버킷리스트</div>
                            </div>
                            <i class="fas fa-sort-up text-3xl -mb-2.5"></i>
                        </div>
                        <div v-if="isBucketlist" @click="upBucketlist" class="flex mb-3 w-full justify-between items-center">
                            <div class="flex items-center">
                                <img src="/bucketlist.png" class="w-8 h-8 mr-2" alt="" />
                                <div class="text-lg font-semibold">버킷리스트</div>
                            </div>
                            <i class="fas fa-sort-down text-3xl animate-bounce -mt-2.5"></i>
                        </div>
                        <div v-if="isBucketlist">
                            <div class="px-6">
                                <div class="mb-3">
                                    <div>{{ checklist.bucketlist[0].question }}</div>
                                    <div class="px-3 text-light font-semibold" v-for="(item, index) in checklist.bucketlist[0].answer_box" :key="index">
                                        {{ index + 1 }}. 나는 {{ item.box_who }} {{ item.box_when }} {{ item.box_what }} 싶어요.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- will section -->
                <div class="flex flex-col w-full space-y-3">
                    <div class="text-xl font-semibold">유언장 작성기록</div>
                    <div class="">
                        <div v-for="item in currentUser.record_at" :key="item" class="">
                            ㆍ {{ currentUser.nickname }}님은 {{ moment(item).format("YYYY년 MM월 DD일 HH시 mm분") }} 에 유언장을 다운로드 받았습니다.
                        </div>
                    </div>
                </div>

                <!-- will section -->
                <div class="flex flex-col w-full space-y-3">
                    <div class="text-xl font-semibold">대리인 설정<span class="text-primary text-sm">(서비스 오픈 준비중)</span></div>
                    <div class="space-y-2">
                        <div>
                            <div class="">{{ currentUser.nickname }}님의 계정에 접근할 수 있는</div>
                            <div>‘대리인’ 기능을 지원할 예정이에요!</div>
                        </div>
                        <div>
                            <div class="">작성한 답변을 가족이나 친구</div>
                            <div>혹은 변호사 등에게 공유해보세요</div>
                        </div>
                        <div>
                            <div>삶을 어떻게 마무리하고 싶은지,</div>
                            <div>세상과 이별한 뒤 어떤 식으로 정리되길 원하는지,</div>
                            <div>{{ currentUser.nickname }}님의 대리인이 알 수 있도록 말이에요.</div>
                        </div>
                    </div>
                </div>

                <!-- logout -->
                <button @click="logout" class="py-4 text-left border-b text-gray-500 w-full">로그아웃</button>
            </div>
        </div>
    </div>
    <ProfileEditModal v-if="isProfile" @close-modal="isProfile = false" />
</template>

<script>
import router from "../router";
import { onBeforeMount, computed, ref } from "vue";
import store from "../store";
import { CHECKLISTS_COLLECTION } from "../firebase";
import axios from "axios";
import { auth } from "../firebase";
import moment from "moment";
import ProfileEditModal from "../components/ProfileEditModal.vue";

export default {
    components: {
        ProfileEditModal,
    },
    setup() {
        const currentUser = computed(() => store.state.user);
        const checklist = ref([]);
        const isChecklist = ref(false);
        const isHealth = ref(false);
        const isFinance = ref(false);
        const isTestament = ref(false);
        const isFuneral = ref(false);
        const isDigital = ref(false);
        const isPet = ref(false);
        const isBucketlist = ref(false);
        const isProfile = ref(false);

        onBeforeMount(async () => {
            try {
                await CHECKLISTS_COLLECTION.where("uid", "==", currentUser.value.uid)
                    .get()
                    .then((querySnapshot) => {
                        if (querySnapshot.docs.length > 0) {
                            const documentSnapshot = querySnapshot.docs[0];
                            checklist.value = documentSnapshot.data();
                            isChecklist.value = true;
                        } else {
                            alert("현재 리스트가 존재하지 않습니다 나만의 계획을 세워보세요");
                            router.push("/welldyingchecklist");
                        }
                    })
                    .catch((error) => {
                        console.log("myinfo error : ", error);
                    });
            } catch (error) {
                console.log("myinfo try error : ", error);
            }
            window.scrollTo(0, 0);
        });

        const showProfileModal = () => {
            isProfile.value = true;
        };

        // runs after firebase is initialized
        auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log("사용자 true", user);
                // isLoggedIn.value = true // if we have a user
            } else {
                console.log("사용자 false");
                // isLoggedIn.value = false // if we do not
            }
        });

        const logout = async () => {
            // if (Kakao.Auth.getAccessToken()) {
            //   Kakao.Auth.logout(function() {
            //   store.commit("SET_USER", null)
            //   router.replace('/login')
            //   console.log('logout success by kakao')
            //   });
            // } else {
            try {
                store.commit("SET_USER", null);
                auth.signOut();
                console.log("logout success");
                router.push("/login");
            } catch (error) {
                console.log("logout error : ", error.message);
            }
            // }
        };

        const downHealth = () => {
            isHealth.value = true;
        };
        const upHealth = () => {
            isHealth.value = false;
        };

        const downFinance = () => {
            isFinance.value = true;
        };
        const upFinance = () => {
            isFinance.value = false;
        };

        const downTestament = () => {
            isTestament.value = true;
        };
        const upTestament = () => {
            isTestament.value = false;
        };

        const downFuneral = () => {
            isFuneral.value = true;
        };
        const upFuneral = () => {
            isFuneral.value = false;
        };

        const downDigital = () => {
            isDigital.value = true;
        };
        const upDigital = () => {
            isDigital.value = false;
        };

        const downPet = () => {
            isPet.value = true;
        };
        const upPet = () => {
            isPet.value = false;
        };

        const downBucketlist = () => {
            isBucketlist.value = true;
        };
        const upBucketlist = () => {
            isBucketlist.value = false;
        };

        const onPrev = () => {
            router.go(-1);
        };

        return {
            onPrev,
            currentUser,
            checklist,
            isChecklist,

            isHealth,
            upHealth,
            downHealth,

            isFinance,
            upFinance,
            downFinance,

            isTestament,
            upTestament,
            downTestament,

            isFuneral,
            upFuneral,
            downFuneral,

            isDigital,
            upDigital,
            downDigital,

            isPet,
            upPet,
            downPet,

            isBucketlist,
            upBucketlist,
            downBucketlist,

            logout,
            moment,
            isProfile,
            showProfileModal,
        };
    },
};
</script>

<style></style>
