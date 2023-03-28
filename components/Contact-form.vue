<template>

  <form class="max-w-xl mx-auto px-2
   py-4 text-sm sm:text-base font-medium
   font-raleway text-gray-500 "
   @submit.prevent="sendMail">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <input class="form-inputs" type="text" placeholder="Name"
       v-model="credentials.fullname">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <input class="form-inputs" type="email" placeholder="Email"
       v-model="credentials.email">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <input class="form-inputs" type="text" placeholder="Subject"
       v-model="credentials.subject">
    </div>
  </div>
    
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <textarea rows="10" 
       class="form-inputs"
       placeholder="Message"
       v-model="credentials.message" />
    </div>

    <div class="text-end w-full px-3">
      <input type="submit"
       :disabled="checkFields" value="Say Hi!"
       :class="checkFields ? 'disabled-btn' : 'submit-btn'">
    </div>
  </div>
</form>

</template>

<script setup>
   import emailjs from 'emailjs'

   const config = useRuntimeConfig().public

   const credentials = reactive({
    fullname: '',
    email: '',
    subject: '',
    message: ''
   })

   const sendMail = async () => {
     try {
       await emailjs.send(config.SERVICE_ID, config.TEMPLATE_ID, credentials, config.PUBLIC_KEY)
       await clearCredentials()  
     }
     catch(err) {
       await clearCredentials()  
     }
   }

   const clearCredentials = () => {
      credentials.fullname = '',
      credentials.email = '',
      credentials.subject = '',
      credentials.message = ''
   }

   const checkFields = computed(() => {
     return !credentials.fullname || !credentials.email || !credentials.subject || !credentials.message
   })
</script>

<style scoped>
  .form-inputs {
    @apply w-full appearance-none block bg-gray-200 
     border rounded py-3 px-4 mb-3 leading-tight 
     focus:outline-none focus:bg-white
  }

  .btn {
    @apply font-bold font-montserrat px-4 py-2 
    text-xs sm:text-sm rounded-md text-white 
    duration-300 active:-translate-y-1
  }

  .submit-btn {
    @apply bg-secoundary btn cursor-pointer 
  }

  .disabled-btn {
    @apply bg-gray-400 btn cursor-not-allowed
  }
</style>
