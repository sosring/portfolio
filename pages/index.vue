<template>

  <div class="h-full w-full relative">

    <img src="/logo.svg" class="scroll-btn h-80">
  </div>
</template>

<script setup>
  import gsap from 'gsap'


    onMounted(() => {
    gsap.from( '.scroll-btn', {
      xPercent: 70,
      opacity: 0,
      duration: .8,
      repeat: -1,
      yoyo: true,
      ease: 'in'
    })
  })
</script>
