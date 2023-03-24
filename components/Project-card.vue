<template>

      <article class="px-4 pt-4 pb-2 text-gray-700 
       border shadow-lg rounded-lg font-raleway bg-gray-50"
       :class="shadowClass">

        <img :src="`/projects/${project.img}.png`" 
          :alt="project.img"
          class="rounded-md my-4 object-cover">

          <h3 class="heading font-medium
           text-gray-600 mb-4" 
           v-html="project.name"></h3>

          <ul class="flex gap-2 mb-2 sm:mb-4">
            <li v-for="stack in project.stack">
              <p v-html="stack" 
               class="py-1 px-2 rounded 
               text-xs font-medium"
               :class="stack.toLowerCase()"></p>
            </li>
          </ul>


          <p v-html="devStatus"
           class="text-xs font-bold mb-2"></p>

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

  const devStatus = computed(() => {
    return props.project.inDevelopment ? 'UNDER DEVELOPERMENT' : 'LIVE'
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
