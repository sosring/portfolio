<template>
  
  <div class="hidden lg:grid 
   gap-2 fixed bottom-8 left-8">

    <a v-for="social in socials"
     class="text-3xl text-secoundary
     hover:-translate-y-1 duration-200"
     :class="`fab fa-${social.icon}`"
     target="blank"
     :href="social.link"></a>
  </div>
</template>

<script setup>
  import { useDetailStore } from '../stores/useDetails.js'
  const useDetails = useDetailStore()

  const socials = [
    { icon: 'linkedin', link: useDetails.linkedIn },
    { icon: 'github', link: useDetails.github }
  ]
</script>
