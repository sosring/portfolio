<template>

  <div>

  <TheNav 
    v-model:showNav="showNav" />

  <TheMobileNav 
    v-model:showNav="showNav" />

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
  const showNav = ref(false)
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
