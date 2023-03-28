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

    <button class="nav-btn
     fas fa-bars text-3xl"
     @click="toggleNav">
    </button>
 </nav>
 </header>
</template>

<script setup>

  const props = defineProps({
    showNav: Boolean,
    currentSection: String
  });

  const anchors = [ 'About', 'Portfolio', 'Contact' ]

  const activeSection = computed(() => {
    return anchor => {
      return anchor.toLowerCase() === props.currentSection
    }
  })

  const emits = defineEmits(['update:showNav'])

  const toggleNav = () => {
   emits('update:showNav', !props.showNav)
  }
</script>
