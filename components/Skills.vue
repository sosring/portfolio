<template>

    <article class="mt-12 py-12
     font-montserrat font-thin">

      <h3 class="heading 
       stroke text-secoundary">
       Tech Stack
      </h3>

      <div class="stack-wrapper
       mt-4 grid grid-cols-3 gap-4">

        <div class="flex items-end 
        justify-around p-3 shadow rounded-md"
         v-for="stack in stacks">

          <p v-html="stack.label"
           class="font-raleway text-sm
           sm:text-base font-medium text-gray-500"></p>

          <img :src="`/icons/${stack.icon}.svg`" 
           :alt="stack.icon"
           class="h-8 w-8">
        </div>
      </div>
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
  .stack-wrapper {
    grid-template-columns: repeat( auto-fit, minmax(120px, 1fr) );
  }
</style>
