<template>
  <div class="bg-primary">

    <header class="fixed inset-0 
     bottom-auto z-20">
      <TheNav />
    </header>

    <main class="h-screen w-screen">
      <slot />
    </main>
  </div>
</template>

<script setup>
  import gsap from 'gsap'
  import { useMouse } from '@vueuse/core'

  const { x, y } = useMouse({touch: false})

  const moveCircle = computed(() => {
    return `translate-x-[${x.value}px] translate-y-[${y.value}px]`
  })

</script>
