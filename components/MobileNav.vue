<template>

<transition>
  <aside v-if="showNav" ref="mobileRef"
   class="fixed top-20 sm:top-24
   right-2 sm:right-12 text-center 
   rounded border py-2 px-4 z-10 
   backdrop-blur-lg md:hidden block">

    <ul class="grid items-end">
      <li v-for="anchor in anchors">
       <nuxt-link :to="`#${anchor.toLowerCase()}`"
        @click="closeNav"
        class="font-poppins text-sm">
        {{ anchor }}
       </nuxt-link>

      </li>

      <a href="/resume.pdf"
       target="blank"
       @click="closeNav"
       class="text-sm text-secoundary underline 
       underline-offset-4 underline-secoundary 
       bg-red-200 rounded">
       Resume
      </a>
    </ul>
  </aside>
</transition>

</template>

<script setup>
  import { onClickOutside } from '@vueuse/core'

  const props = defineProps({
    showNav: Boolean
  });

  const emits = defineEmits(['update:showNav'])

  const anchors = [ 'About', 'Portfolio', 'Contact' ]

  const mobileRef = ref('') 

  const closeNav = () => emits('update:showNav', false)

  //onClickOutside(mobileRef, closeNav)
</script>

<style scoped>
  aside {
    background: rgba( 255 255 255 / .5)
  }

  .v-enter-active,
  .v-leave-active {
    transform: scale(1);
    transition: all 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: scale(0);
  }

</style>
