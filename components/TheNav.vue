<template>
  <nav class="container mx-auto
   px-3 py-2 sm:py-4 border-b-2 
   border-gray-300 flex items-center
   md:items-end justify-between">
    
    <nuxt-link to="/">
      <img src="/favicon.svg"
       alt="logo"
       class="h-12 w-12">
    </nuxt-link>

    <ul class="hidden md:flex gap-8">
      <li v-for="anchor in anchors">
       <nuxt-link :to="`#${anchor.toLowerCase()}`"
        @click="updateCurrentSection(anchor)"
        class="link"
        :class="{ 'active': activeSection(anchor) }">
        {{ anchor }}
       </nuxt-link>

      </li>
    </ul>

    <button class="nav-btn"
     @click="toggleNav">
      <i class="fas fa-bars text-3xl"></i>
    </button>
  </nav>
</template>

<script setup>
  const anchors = [ 'About', 'Portfolio', 'Contact' ]

  const currentSection = useState('currentRouter', () => 'about') 

  const updateCurrentSection = anchor => {
    return currentSection.value = anchor 
  }

  const activeSection = computed(() => {
    return anchor => {
      return anchor.toLowerCase() === currentSection.value
    }
  })

  // Intersection Observer
  onMounted(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute('id')
        } 
      })
    },
    {
      rootMargin: '0px 0px -90px 0px',
    }
    );
    document.querySelectorAll('section h2').forEach(section => {
      observer.observe(section)
    })
  }) 

  const props = defineProps({
    showNav: Boolean 
  });

  const emits = defineEmits(['update:showNav'])

  const toggleNav = () => emits('update:showNav', true)
</script>
