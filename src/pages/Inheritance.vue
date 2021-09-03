<template>
  <div class="flex flex-col h-screen overflow-y-scroll   items-start pt-40 pb-48 md:pb-10 px-3 xl:px-80">
      <!-- title -->
      <div class=" text-2xl font-semibold mb-2">유언장 작성 및 상속 설계</div>
      <!-- subtitle -->
      <div class=" text-sm text-gray-400 mb-10">자산을 입력하고 상속을 설계해 보세요</div>
      <!-- step sequence -->
      <div class=" flex w-full  justify-center items-center sm:space-x-10 space-x-2 mb-20">
          <div :class="`${step1 ? 'bg-blue-900 text-yellow-300' : 'text-gray-400 bg-gray-100'} py-4 px-7 rounded-full text-2xl`">1</div>
          <i class=" fas fa-chevron-right text-gray-400"></i>
          <div :class="`${step2 ? 'bg-blue-900 text-yellow-300' : 'text-gray-400 bg-gray-100'}  py-3.5 px-6  rounded-full text-2xl`">2</div>
          <i class=" fas fa-chevron-right text-gray-400"></i>
          <div :class="`${step3 ? 'bg-blue-900 text-yellow-300' : 'text-gray-400 bg-gray-100'}  py-3.5 px-6 rounded-full text-2xl`">3</div>
          <i class=" fas fa-chevron-right text-gray-400"></i>
          <div :class="`${step4 ? 'bg-blue-900 text-yellow-300' : 'text-gray-400 bg-gray-100'} py-3.5 px-6  rounded-full text-2xl`">4</div>
      </div>
        <!-- step 1 -->
        <div v-if="step1" class=" w-full">
            <div class="flex flex-col bg-gray-100 w-full px-5 rounded-xl mb-20">
            <div class="py-5">이름을 입력해주세요.</div>
            <input type="text"
            v-model="name"
            class="w-full focus:ring-2 focus:outline-none rounded-lg px-4 py-2 mb-5">
            </div>
            <div class="flex justify-center w-full space-x-2">
                <button @click="onSaveStep1" class=" bg-yellow-300 px-14 py-3 rounded-lg">다음으로</button>
            </div>
        </div>

        <!-- step2 -->
        <div v-if="step2" class=" w-full">
            <div class="flex flex-col bg-gray-100 w-full px-5 rounded-xl mb-20">
            <div class="py-5">주소를 입력해주세요.</div>
            <input type="text"
            v-model="address"
            class="w-full focus:ring-2 focus:outline-none rounded-lg px-4 py-2 mb-5">
            </div>
            <div class="flex justify-center w-full space-x-2">
                <button @click="onPrevStep2" class=" bg-gray-200 px-14 py-3 rounded-lg">이전으로</button>
                <button @click="onSaveStep2" class=" bg-yellow-300 px-14 py-3 rounded-lg">다음으로</button>
            </div>
        </div>

        <!-- step3 -->
        <div v-if="step3" class=" w-full">
            <div v-for="(item, index1) in deposit" :key="index1" class="flex relative flex-col bg-gray-100 w-full px-5 rounded-xl mb-20 pb-5">
            <div class="pt-5 pb-1">은행명</div>
            <input type="text"
            v-model="item.type"
            class="w-full focus:ring-2 focus:outline-none rounded-lg px-4 py-2">
            <div class="pt-5 pb-1">계좌번호</div>
            <input type="text"
            v-model="item.account_number"
            class="w-full focus:ring-2 focus:outline-none rounded-lg px-4 py-2">
            <div class="pt-5 pb-1">예상금액</div>
            <input type="text"
            v-model="item.estimated_amount"
            class="w-full focus:ring-2 focus:outline-none rounded-lg px-4 py-2">
            <div class="pt-5 pb-1">피상속인</div>
            <input type="text"
            v-model="item.inheritor[0]"
            class="w-full focus:ring-2 focus:outline-none rounded-lg px-4 py-2">
            <div class="pt-5 pb-1">관계</div>
            <input type="text"
            v-model="item.relationship[0]"
            class="w-full focus:ring-2 focus:outline-none rounded-lg px-4 py-2">
            <div class="pt-5 pb-1">비율</div>
            <select name="" id="" v-model="item.proportion[0]"
            :class="`${item.state ? 'border-2 border-blue-300' : 'border-2 border-red-300'} w-full focus:outline-none px-4 py-2.5 rounded-lg`"
            @change="onChangeDeposit(index1)">
                <option value=10>10%</option>
                <option value=20>20%</option>
                <option value=30>30%</option>
                <option value=40>40%</option>
                <option value=50>50%</option>
                <option value=60>60%</option>
                <option value=70>70%</option>
                <option value=80>80%</option>
                <option value=90>90%</option>
                <option value=100>100%</option>
            </select>
            <div @click="onFollowAddDeposit(index1)" class=" mt-5 space-x-2">
                <i class="fas fa-plus"></i> 
                <span>이어서 추가하기</span>
            </div>
            <div class="pt-5 mt-5 border-t border-gray-300"
                v-if="item.proportion.length > 1">
                <div class=" relative"
                v-for="count in item.proportion.length-1" :key="count" >
                    <div class="pt-5 pb-1">피상속인</div>
                    <input type="text"
                    v-model="item.inheritor[count]"
                    class="w-full focus:ring-2 focus:outline-none rounded-lg px-4 py-2">
                    <div class="pt-5 pb-1">관계</div>
                    <input type="text"
                    v-model="item.relationship[count]"
                    class="w-full focus:ring-2 focus:outline-none rounded-lg px-4 py-2">
                    <div class="pt-5 pb-1">비율</div>
                    <select name="" id="" v-model="item.proportion[count]"
                    :class="`${item.state ? 'border-2 border-blue-300' : 'border-2 border-red-300'} w-full focus:outline-none px-4 py-2.5 rounded-lg`"
                    @change="onChangeDeposit(index1)">
                        <option value=10>10%</option>
                        <option value=20>20%</option>
                        <option value=30>30%</option>
                        <option value=40>40%</option>
                        <option value=50>50%</option>
                        <option value=60>60%</option>
                        <option value=70>70%</option>
                        <option value=80>80%</option>
                        <option value=90>90%</option>
                        <option value=100>100%</option>
                    </select>
                    <div @click="onDeleteDetailDeposit(index1, count)" class=" absolute top-3 right-5">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            </div>
            <div 
             class=" absolute flex right-5 top-3 space-x-3">
                <div v-if="index1 == 0" class=" space-x-1" @click="onAddDeposit()"> 
                    <i class="fas fa-plus"></i>
                    <span>새로 추가하기</span>
                </div>
                <div v-if="index1 > 0" @click="onDeleteDeposit(index1)" class=" space-x-1">
                        <i class="fas fa-times"></i>
                        <span>삭제</span>
                </div>
            </div>
            </div>
            <div class="flex justify-center w-full space-x-2">
                <button @click="onPrevStep3" class=" bg-gray-200 px-14 py-3 rounded-lg">이전으로</button>
                <button @click="onSaveStep3" class=" bg-yellow-300 px-14 py-3 rounded-lg">다음으로</button>
            </div>
        </div>


        <!-- step4 -->
        <div v-if="step4" class="w-full">
           <div class="flex flex-col bg-gray-100 w-full px-5 rounded-xl mb-20">
            <div @click="test()" class="py-5">클릭</div>
            <div class="bg-white rounded-lg mb-10 py-10 space-x-2">
                <span v-for="item in willExample" :key="item">{{item}}</span>
            </div>
            </div>
        </div>

        
  </div>
</template>

<script>
import {ref, computed, onBeforeMount} from "vue"
import {INHERITANCES_COLLECTION, USER_COLLECTION} from '../firebase'
import store from '../store'
import moment from 'moment'

export default {

setup() {
    onBeforeMount(async () => {
        // await INHERITANCES_COLLECTION.where('uid', '==', currentUser.value.uid).get()
        //     .then((querySnapshot) => {
            //         querySnapshot.forEach((doc) => {
                //             depo.value = doc.data()
        //         });
        //     })
    })
    const test =(async() => {
        await INHERITANCES_COLLECTION.where('uid', '==', currentUser.value.uid).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                depo.value = doc.data()
            });
        })
        willExample.value.push(moment(depo.value.create_at).format('YYYY년 MM월 DD일'))
        willExample.value.push('내 이름은')
        willExample.value.push(depo.value.name)
        willExample.value.push(depo.value.address)
        depo.value.deposit.forEach((el) => {
            willExample.value.push(el.type)
            willExample.value.push('계좌번호')
            willExample.value.push(el.account_number)
            willExample.value.push(el.estimated_amount)
            willExample.value.push('정도의 금융재산을')
            for (let index = 0; index < el.proportion.length; index++) {
                willExample.value.push((el.inheritor[index]+'('+el.relationship[index]+')'))
                willExample.value.push((el.proportion[index]+'%'))
            }
            willExample.value.push('에게 상속한다.')
        })
        console.log(willExample.value)
    })

    const depo = ref([])
    const willExample = ref([])
    



    const depositState = ref(false)
    const depositCount = ref()

    const currentUser = computed(() => store.state.user)


    const step1 = ref(true)
    const step2 = ref(false)
    const step3 = ref(false)
    const step4 = ref(false)

    const name = ref()
    const address = ref('')
    const deposit = ref([
            {
                type: null,
                account_number: null,
                estimated_amount: null,
                inheritor :  [null],
                relationship: [null],
                proportion: [null],
                state: false
            },
        ])

    // const depo = ref([])

    // INHERITANCES_COLLECTION.where('uid', '==', currentUser.value.uid).get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             depo.value = doc.data()
    //         });
    //     })



    const onChangeDeposit = (key) => {
        try{
            deposit.value[key].proportion.forEach((element) => {
                console.log(element)
            })


            // console.log(typeof element.proportion)
            console.log('현재 key 값 : ', key)
            let total = 0;
            let remove = 0;
            deposit.value[key].proportion.forEach((element) => {
                total = Number(total) + Number(element)
            })
                console.log('토탈',total)
            if(total < 100) {
                deposit.value[key].state = false
            }
            if(total > 100) {
                alert(`비율이 100%가 넘었습니다 다시 입력해주세요. 현재 : ${total}`)
                deposit.value[key].state = false
                return 
            } else if(total == 100) {
                deposit.value[key].state = true
                return
            } else if(deposit.value[key].proportion.length == 1){
                deposit.value[key].proportion.push(null)
                deposit.value[key].relationship.push(null)
                deposit.value[key].inheritor.push(null)
            }
            
        } catch(error) {
            console.log('onchangeDeposit error : ', error.message)
        }         
    }

    const onFollowAddDeposit = (key) => {
        deposit.value[key].proportion.push(null)
        deposit.value[key].relationship.push(null)
        deposit.value[key].inheritor.push(null)
    }

    const onAddDeposit = () => {
        deposit.value.push({
            type: null,
            account_number: null,
            estimated_amount: null,
            inheritor :  [null],
            relationship: [null],
            proportion: [null],
            state: false
        })
        console.log('확인',deposit.value)
    }

    const onDeleteDetailDeposit = (key, count) => {
        deposit.value[key].proportion.splice(count, 1)
    }

    const onDeleteDeposit = (key) => {
        deposit.value.splice(key, 1)
    }

    const onCreateInheritances = async () => {
        try {
            const doc = INHERITANCES_COLLECTION.doc()
            await doc.set({
                uid: currentUser.value.uid,
                name: name.value,
                address: '',
                deposit: [],
                create_at: Date.now(),
            })
        } catch(error) {
            console.log('create db error by inheritances : ', error.message)
        }
    }

    const onSaveStep1 = async () => {
        try {
            await INHERITANCES_COLLECTION.where('uid', '==', currentUser.value.uid).get()
             .then((querySnapshot) => {
                if (querySnapshot.docs.length > 0) {
                  const documentSnapshot = querySnapshot.docs[0];
                  // console.log(documentSnapshot.data());
                  // console.log('database : ',documentSnapshot.data())
                  querySnapshot.docs[0].ref.update({
                      name: name.value,
                      create_at : Date.now(),
                  })   
                }
                else {
                  // decide what you want to do if the query resulted in no documents.
                  console.log('create db inheritances')
                  onCreateInheritances()
                }
             })
            
        } catch (error) {
            console.log('step1 error', error.message)
        }
        step1.value = false
        step2.value = true
    }

    const onSaveStep2 = async () => {
        try {
            INHERITANCES_COLLECTION.where('uid', '==', currentUser.value.uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    doc.ref.update({
                        address: address.value,
                        create_at: Date.now(),
                    })
                });
            })
        } catch (error) {
            console.log('step2 error', error.message)
        }
        step2.value = false
        step3.value = true
    }

    const onSaveStep3 = async () => {
        try {
            await INHERITANCES_COLLECTION.where('uid', '==', currentUser.value.uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    doc.ref.update({
                        deposit: deposit.value,
                        create_at: Date.now(),
                    })
                });
            })

            

            await INHERITANCES_COLLECTION.where('uid', '==', currentUser.value.uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    depo.value = doc.data()
                });
            })
            willExample.value.push(moment(depo.value.create_at).format('YYYY년 MM월 DD일'))
            willExample.value.push('내 이름은')
            willExample.value.push(depo.value.name)
            willExample.value.push(depo.value.address)
            depo.value.deposit.forEach((el) => {
                willExample.value.push(el.type)
                willExample.value.push('계좌번호')
                willExample.value.push(el.account_number)
                willExample.value.push(el.estimated_amount)
                willExample.value.push('정도의 금융재산을')
                for (let index = 0; index < el.proportion.length; index++) {
                    willExample.value.push((el.inheritor[index]+'('+el.relationship[index]+')'))
                    willExample.value.push((el.proportion[index]+'%'))
                }
                willExample.value.push('에게 상속한다.')
            })
            console.log(willExample.value)

        } catch(error) {
            console.log('step3 error', error.message)
        }
        step3.value = false
        step4.value = true
    }

    const onPrevStep2 = () => {
        step2.value = false
        step1.value = true
    }
    
    const onPrevStep3 = () => {
        step3.value = false
        step2.value = true
    }

    const onPrevStep4 = () => {
        step4.value = false
        step3.value = true
    }


    return {
        name,
        address,
        deposit,

        
        depositCount,
        depositState,

        step1,
        step2,
        step3,
        step4,

        onAddDeposit,
        onFollowAddDeposit,
        onChangeDeposit,
        onDeleteDetailDeposit,
        onDeleteDeposit,

        onPrevStep2,
        onPrevStep3,
        onPrevStep4,

        onSaveStep1,
        onSaveStep2,
        onSaveStep3,

        moment,

        willExample,
        test,
    }
}
}
</script>

<style>

</style>