<template>

  <transition name="fade">
    <aside class="fixed inset-0
     bg-primary z-20 block md:hidden" 
     v-if="showNav">

     <div class="relative h-1/4 p-4">
       <img src="/favicon.svg" alt="">

       <button type="button"
        @click="closeSizeNav"
        class="fas fa-times
        active text-3xl absolute
        right-4 top-4">
       </button>
     </div>

    <div class=" h-3/4 relative text-center">
      <ul class="grid gap-2">
        <li v-for="anchor in anchors">
         <nuxt-link :to="`#${anchor.toLowerCase()}`"
          @click="updateCurrentSection(anchor)"
          class="link">
          {{ anchor }}
         </nuxt-link>
        </li>

        <a href="/resume.pdf"
         target="blank"
         class="text-xl text-secoundary
         underline underline-offset-4">
         Resume
        </a>
      </ul>

      <div class="flex gap-2 
       absolute bottom-8 left-1/2
       -translate-x-1/2">

        <a v-for="social in socials"
         class="text-3xl text-secoundary
         hover:-translate-y-1 duration-200"
         :class="`fab fa-${social.icon}`"
         target="blank"
         :href="social.link"></a>
      </div>
     </div>
    </aside>
  </transition>
</template>

<script setup>
  import { useDetailStore } from '../stores/useDetails.js'
  const useDetails = useDetailStore()

  const anchors = [ 'About', 'Portfolio', 'Contact' ]
  const socials = [
    { icon: 'linkedin', link: useDetails.linkedIn },
    { icon: 'github', link: useDetails.github }
  ]

  const props = defineProps({
    showNav: Boolean
  }); 
  const emits = defineEmits(['update:showNav'])

  const closeSizeNav = () => {
    emits('update:showNav', false)
  }
</script>

<style scoped>
   /* route */
  .fade-enter-active,
  .fade-leave-active {
    transition: all .3s ease-in;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
