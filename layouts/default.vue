<template>

  <div>
    <header class="fixed inset-0 
     bottom-auto z-20 backdrop-blur-md 
     bg-primary">
      <TheNav 
       v-model:showNav="showSideNav" />
    </header>

    <main class="h-screen">
      <slot />
      <Socials />
    </main>
  </div>
</template>

<script setup>
  import gsap from 'gsap'

  const showSideNav = ref(true)
</script>
