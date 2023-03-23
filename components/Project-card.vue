<template>

    <article class="mx-auto w-full">
        <div class="w-full mb-4 text-left 
         text-sm flex justify-between">

          <h3 class="heading" v-html="project.title"></h3>
          <ChevronUpIcon
            class="h-5 w-5 text-gray-700 rotate-180 transform"/>
        </div>

        <transition>
        <div class="px-4 pt-4 pb-2 text-gray-700 
         border-2 border-gray-500 rounded 
         font-raleway bg-primary">

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
           <a :href="project.live"
            target="blank"
            class="text-blue-600">Live</a>

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
        </transition>
    </article>
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronUpIcon } from '@heroicons/vue/20/solid'

  const props = defineProps({
    project: Object
  });

  const devStatus = computed(() => {
    return props.project.inDevelopment ? 'IN DEVELOPERMENT' : 'LIVE'
  })
</script>

<style scoped>
  .heading {
    font-size: clamp(1.3rem, 2.5vw, 1.7rem);
    font-family: 'montserrat';
  }

  .summary {
    font-size: clamp(.9rem, 2.5vw, .9rem);
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
</style>
