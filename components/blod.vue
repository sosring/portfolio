<script setup>
  import { useMouse } from '@vueuse/core'

  const { x, y } = useMouse()
  const { width, height } = useWindowSize()

  const dx = computed(() => Math.abs(x.value - width.value / 2))
  const dy = computed(() => Math.abs(y.value - height.value / 2))

  const distance  = computed(() => Math.sqrt(dx.value * dx.value + dy.value * dy.value))

  const size = computed(() => Math.max(300 - distance.value, 150))

  const opacity = computed(() => Math.min( Math.max(size.value / 300, 0.7)))
</script>

<template>
  
    <div class="absolute rounded-full -z-10
     bg-gradient-to-r from-secoundary to-accent
     blur-3xl -translate-x-1/2 -translate-y-1/2
     pointer-events-none hidden lg:block"
     :style="{
      top: `${y}px`,
      left: `${x}px`,
      height: `${size}px`,
      width: `${size}px`,
      opacity: `${opacity}`
     }">
    </div>
</template>

<style scoped>
</style>
