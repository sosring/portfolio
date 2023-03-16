<template>
  
  <div class="hidden md:grid 
   gap-4 fixed bottom-8 left-8">
    <a v-for="social in socials"
     class="text-3xl text-secoundary"
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
