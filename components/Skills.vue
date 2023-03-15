<template>
    <article class="mt-12 font-montserrat font-thin">

      <h3 class="heading 
       stroke text-secoundary">
       Tech Stack
      </h3>

      <div class="stack-wrapper
       mt-4 grid grid-cols-3 gap-4">

        <div class="flex items-end gap-4
         justify-evenly p-3 shadow rounded-md"
         v-for="stack in stacks">

          <p v-html="stack.label"
           class="font-raleway 
           font-medium text-gray-500"></p>

          <img :src="`/icons/${stack.icon}.svg`" 
           :alt="stack.icon"
           class="h-8 w-8">
        </div>
      </div>
      <img src="" alt="">
    </article>
</template>

<script setup>
  const stacks = [
    { icon: 'tailwind', label: 'Tailwind' },
    { icon: 'sass', label: 'SASS' },
    { icon: 'vue-js', label: 'Vue' },
    { icon: 'nuxt-js', label: 'Nuxt' },
    { icon: 'node', label: 'Node' },
    { icon: 'express-js', label: 'Express' },
    { icon: 'mongodb', label: 'MongoDB' },
  ] 
</script>

<style scoped>
  .heading {
    font-size: clamp(1.7rem, 5vw, 2.7rem);
  }

  .para {
    font-size: clamp(.9rem, 2.5vw, 1.3rem);
  }

  .stack-wrapper {
    grid-template-columns: repeat( auto-fit, minmax(120px, 1fr) );
  }
</style>
