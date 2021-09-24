<template>
  <div  class="flex flex-col  items-center px-3 md:px-20">
    <!-- title section -->
    <!-- businessalliance form section -->
    <div   class="flex flex-col md:px-20 w-full">
      <div>회사명</div>
      <input v-model="company_name" type="text" :class="`${isCompany_name ? '' : 'border-red-500'} ${company_name.length ? 'border-blue-500' : ''} border-gray-200 border outline-none focus:ring-1 mb-5 py-2 px-2`">
      <div>성함</div>
      <input v-model="user_name" type="text" :class="`${isUser_name ? '' : 'border-red-500'} ${user_name.length ? 'border-blue-500' : ''} border-gray-200 border outline-none focus:ring-1 mb-5 py-2 px-2`">
      <div>직책</div>
      <input v-model="position" type="text" :class="`${isPosition ? '' : 'border-red-500'} ${position.length ? 'border-blue-500' : ''} border-gray-200 border outline-none focus:ring-1 mb-5 py-2 px-2`">
      <div>부서</div>
      <input v-model="department" type="text" :class="`${isDepartment ? '' : 'border-red-500'} ${department.length ? 'border-blue-500' : ''} border-gray-200 border outline-none focus:ring-1 mb-5 py-2 px-2`">
      <div>연락처</div>
      <input v-model="contact" type="text" :class="`${isContact? '' : 'border-red-500'} ${contact.length ? 'border-blue-500' : ''} border-gray-200 border outline-none focus:ring-1 mb-5 py-2 px-2`">
      <div>이메일</div>
      <input @keydown="onCheckEmailRegex" v-model="email" type="text" :class="`${isEmail ? '' : 'border-red-500'} ${regex ? 'border-blue-500' : ''} border-gray-200 border outline-none focus:ring-1 mb-5 py-2 px-2`" required>
      <div>문의내용</div>
      <textarea v-model="inquiries" :class="`${isInquiries ? '' : 'border-red-500'} ${inquiries.length ? 'border-blue-500' : ''} border-gray-200 resize-none border outline-none focus:ring-1 mb-5 py-2 px-2`" rows="7"></textarea>
      <!-- collection of personal information section -->
      <div class="flex items-center mb-5">
        <input v-model="isAgreement" type="checkbox" class="mr-2" value=true><span>개인정보 수집 및 이용에 동의합니다</span>
      </div>
      <!-- button section -->
      <div class="flex justify-center">
        <button v-if="!isAgreement.length || loading" class="px-10 py-4 bg-gray-100 rounded-lg" >제휴 협력 문의</button>
        <button v-if="isAgreement.length && !loading" @click="onSendBusinessAllianceForm" class="px-10 py-4 bg-yellow-400 rounded-lg" >제휴 협력 문의</button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import emailjs from 'emailjs-com'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const company_name = ref('')
    const user_name = ref('')
    const position = ref('')
    const department = ref('')
    const contact = ref('')
    const email = ref('')
    const inquiries = ref('')

    const isAgreement = ref([])

    const isCompany_name = ref(true)
    const isUser_name = ref(true)
    const isPosition = ref(true)
    const isDepartment = ref(true)
    const isContact = ref(true)
    const isEmail = ref(true)
    const isInquiries = ref(true)
    const notInput = ref([])
    const regex =  ref(false)
    const loading = ref(false)

    // regular expression /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
    const onCheckEmailRegex = () => {
      if(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test(email.value)) {
        regex.value = true
      } else {
        regex.value = false
      }
    }

    const onSendBusinessAllianceForm = async () => {
      loading.value = true
      if(company_name.value !== '') {
        isCompany_name.value = true
        } else {
        isCompany_name.value = false
        notInput.value.push('회사명')
      }
      if(user_name.value !== '') {
        isUser_name.value = true
        } else {
        isUser_name.value = false
        notInput.value.push('성함')
      }
      if(position.value !== '') {
        isPosition.value = true
        } else {
        isPosition.value = false
        notInput.value.push('직책')
      }
      if(department.value !== '') {
        isDepartment.value = true
        } else {
        isDepartment.value = false
        notInput.value.push('부서')
      }
      if(contact.value !== '') {
        isContact.value = true
        } else {
        isContact.value = false
        notInput.value.push('연락처')
      }
      if(email.value !== '' && regex.value) {
        isEmail.value = true
        } else {
        isEmail.value = false
        notInput.value.push('이메일')
      }
      if(inquiries.value !== '') {
        isInquiries.value = true
        } else {
        isInquiries.value = false
        notInput.value.push('문의내용')
      }
     

      if(!isCompany_name.value || !isUser_name.value || !isPosition.value || !isDepartment.value || !isContact.value || !isEmail.value || !isInquiries.value) {
        alert(`${notInput.value} 를 입력해주세요.`)
        notInput.value = []
        return
      }
      const params = {
        company_name: company_name.value,
        user_name: user_name.value,
        position: position.value,
        department: department.value,
        contact: contact.value,
        email: email.value,
        inquiries: inquiries.value
      }
      emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID)
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, params)
      .then((result) => {
        console.log(result.text)
        alert('전송완료')
        router.push('/')
      }).catch((error) => {
        console.log(error.text)
        alert('전송에 실패했습니다. 고객센터에 문의 부탁드립니다.')
      })
        
      
    }




    return {
      loading,
      company_name,
      user_name,
      position,
      department,
      contact,
      email,
      inquiries,

      isAgreement,

      isCompany_name,
      isUser_name,
      isPosition,
      isDepartment,
      isContact,
      isEmail,
      isInquiries,
      
      regex,

      onSendBusinessAllianceForm,
      onCheckEmailRegex,
    }
  }
}
</script>

<style>

</style>