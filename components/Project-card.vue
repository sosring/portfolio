<template>

      <article class="text-gray-700   
        font-raleway overflow-hidden
        bg-gray-50  rounded-md shadow-lg
        duration-200"
       :class="shadowClass">

    <!--
      <img :src="`/projects/${project.img}.png`" 
        :alt="project.img"
        class="mb-4 object-cover">
    -->

        <div class="px-4 py-2">

          <h3 class="heading 
           font-medium mb-4 active" 
           v-html="project.name"></h3>

          <ul class="flex gap-2 mb-2 sm:mb-4">
            <li v-for="stack in project.stack">
              <p v-html="stack" 
               class="py-1 px-2 rounded 
               text-xs font-medium"
               :class="stack.toLowerCase()"></p>
            </li>
          </ul>

          <p v-html="project.summary"
           class="summary"></p>

          <!-- Links -->
          <div class="flex gap-3 my-3">
           <a :href="project.web_link"
            target="blank"
            class="text-blue-600">
            <i class="fas fa-eye"></i>
              Preview
            </a>

           <a v-if="!project.private"
            :href="project.source"
            target="blank"
            class="flex gap-1 items-center">
              <i class="fas fa-code"></i>
              <p>source</p>
            </a>

         <a v-if="project.private"
          aria-disabled=""
          class="text-red-500 
           cursor-not-allowed
           flex gap-1 items-center">
            <i class="fas fa-code"></i>
            <p>private repo</p>
         </a>
        </div>
       </div>

    </article>
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronUpIcon } from '@heroicons/vue/20/solid'

  const props = defineProps({
    project: Object,
    index: Number
  });

  const shadowClass = computed(() => {
    return props.index / 2 ? 'shadow-blue-200' : 'shadow-red-200'   
  })
</script>

<style scoped>
  .heading {
    font-size: clamp(1.3rem, 2.5vw, 1.7rem);
    font-family: 'montserrat';
  }

  .summary {
    font-size: clamp(.8rem, 2.5vw, 1rem);
  }

  a {
   @apply font-bold uppercase text-xs 
  }

  .nuxt {
    @apply bg-green-300
  }

  .mongodb {
    @apply bg-teal-300
  }

  .express {
    @apply bg-gray-300
  }
  
  .scss {
    @apply bg-sky-300
  }

  .vue {
    @apply bg-emerald-300
  }

  .firebase {
    @apply bg-yellow-300
  }
</style>
