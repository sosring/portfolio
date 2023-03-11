<template>

  <aside v-if="showNav"
   class="sideNav fixed z-30 top-0 right-0
   bg-primary h-[250px] w-[250px] rounded-bl-full 
   border border-gray-300 flex justify-end 
   items-center md:hidden text-end px-10">

    <button @click="closeNav"
     class="nav-btn absolute 
     top-6 right-10">
      <i class="fas fa-times text-3xl"></i>
    </button>
    
    <ul class="grid gap-2">
      <li v-for="route in routes">
       <nuxt-link :to="route.path"
        @click="closeNav"
        class="link">
        {{ route.label }}
       </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
  import gsap from 'gsap'

  onMounted(() => {
    gsap.from('.sideNav', {
      opacity: 0,
      duration: .3,
    })
  })

  const routes = [
    { label: 'About', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/Contact' }
  ]

  const props = defineProps({
    showNav: Boolean 
  });

  const emits = defineEmits(['update:showNav'])

  const closeNav = () => emits('update:showNav', false)
</script>
