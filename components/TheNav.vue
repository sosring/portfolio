<template>
 <header class="fixed inset-0 
  bottom-auto z-20 backdrop-blur-md 
  bg-primary">

  <nav class="container mx-auto
   px-3 py-2 sm:py-4 border-b-2 
   border-gray-300 flex items-center
   md:items-end justify-between">
    
    <nuxt-link to="/">
      <img src="/favicon.svg"
       alt="logo"
       class="h-12 w-12">
    </nuxt-link>

    <ul class="hidden md:flex 
     items-end md:gap-8">
      <li v-for="anchor in anchors">
       <nuxt-link :to="`#${anchor.toLowerCase()}`"
        @click="updateCurrentSection(anchor)"
        class="link"
        :class="{ 'active': activeSection(anchor) }">
         {{ anchor }}
       </nuxt-link>

      </li>

      <a href="/resume.pdf"
       target="blank"
       class="text-sm text-secoundary border
       border-secoundary hover:bg-red-200
       py-2 px-4 duration-200 rounded">
       Resume
      </a>
    </ul>

    <button ref="navBtnRef"
     class="nav-btn fas fa-bars text-3xl"
     @click="toggleNav">
    </button>
 </nav>
 </header>

<!-- Mobile Nav -->
<transition>
  <aside v-show="showNav" ref="mobileRef"
   class="fixed top-20 sm:top-24
   right-2 sm:right-12 text-center 
   rounded border py-2 px-4 z-10 
   backdrop-blur-lg md:hidden
   grid items-end">

    <ul class="">
      <li v-for="anchor in anchors">
       <nuxt-link
        @click="closeNav"
        :to="`#${anchor.toLowerCase()}`"
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
    currentSection: String
  });

  const showNav = ref(false)

  const mobileRef = ref('') 
  const navBtnRef = ref('')
  const closeNav = () => showNav.value = false
  onClickOutside(mobileRef, closeNav, { ignore: [navBtnRef] })

  const anchors = [ 'About', 'Portfolio', 'Contact' ]

  const activeSection = computed(() => {
    return anchor => {
      return anchor.toLowerCase() === props.currentSection
    }
  })

  const toggleNav = () => {
    showNav.value = !showNav.value
  }
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
