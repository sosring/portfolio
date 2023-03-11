<template>
  <div class="bg-primary">

    <header class="fixed inset-0 
     bottom-auto z-20">
      <TheNav 
       v-model:showNav="showSideNav" />
    </header>

    <TheSideNav 
     v-model:showNav="showSideNav" />

    <main class="h-screen w-screen">
      <slot />
    </main>
  </div>
</template>

<script setup>
  import gsap from 'gsap'

  const showSideNav = ref(false)
</script>
