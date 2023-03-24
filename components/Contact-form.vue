<template>

  <form class="max-w-xl mx-auto py-4
   text-sm sm:text-base font-medium
   font-raleway text-gray-500 "
   @submit.prevent="">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full 
       bg-gray-200 border rounded 
       py-3 px-4 mb-3 leading-tight focus:outline-none 
       focus:bg-white" id="grid-first-name" type="text" 
       placeholder="Name">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <input class="appearance-none block w-full 
       bg-gray-200 border border-gray-200 
       rounded py-3 px-4 leading-tight focus:outline-none 
       focus:bg-white focus:border-gray-500" 
       id="grid-last-name" type="email"
       placeholder="Email">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <input class="appearance-none block w-full 
      bg-gray-200 border border-gray-200 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-500" id="grid-email" 
      type="text" 
      placeholder="Subject">
    </div>
  </div>
    
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <textarea rows="10" 
       class="appearance-none block w-full bg-gray-200 
       border border-gray-200 rounded py-3 
       px-4 mb-3 leading-tight focus:outline-none 
       focus:bg-white focus:border-gray-500"
       placeholder="Message" />
    </div>
    <div class="text-end w-full px-3">
      <button type="submit"
       class="font-bold font-montserrat px-4 py-2 
        text-xs sm:text-sm rounded-md bg-secoundary 
        text-white duration-300 cursor-pointer
        active:-translate-y-1">
          Say Hi!
       </button>
    </div>
      
  </div>
    
</form>

</template>

<style scoped>
  .form-inputs {
    @apply px-4 py-1 rounded w-full
  }
</style>
