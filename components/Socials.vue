<template>
  
  <div class="social-wrapper hidden
   md:grid gap-4 fixed bottom-8 left-8">
    <i v-for="social in socials"
     class="text-3xl text-secoundary"
     :class="`fab fa-${social.icon}`"></i>
  </div>
</template>

<script setup>
  const socials = [
    { icon: 'linkedin', link: '' },
    { icon: 'github', link: '' }
  ]
</script>
