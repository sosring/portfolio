<template>

  <div>
    <header class="fixed inset-0 
     bottom-auto z-20 backdrop-blur-md 
     bg-primary">
      <TheNav 
       v-model:showNav="showSideNav" />
    </header>

    <main class="h-screen 
     pt-16 md:pt-0">
      <slot />
    </main>
      <Socials />
      <a href="mailto:sosringofficial@gmail.com"
        class="email fixed -right-20 bottom-32 
        hidden lg:block rotate-90 font-poppins 
        text-sm text-secoundary">
        sosringofficial@gmail.com
      </a>
  </div>
</template>

<script setup>
  import gsap from 'gsap'

  const showSideNav = ref(true)
</script>

<style scoped>
  .email::after {
    content: "";
    display: inline-block;
    width: 3rem;
    height: 1px;
    margin: 0px auto;
    background: red;
    transform: translateY(-.2rem);
  } 
</style>
