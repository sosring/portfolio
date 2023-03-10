<template>
  <nav class="container mx-auto
   px-3 py-2 sm:py-4 border-b-2 
   border-gray-300 flex items-center
   md:items-end justify-between">
    
    <nuxt-link to="/">
      <img src="/favicon.svg"
       alt="logo">
    </nuxt-link>

    <ul class="hidden md:flex gap-8">
      <li v-for="route in routes">
       <nuxt-link :to="route.path"
        class="link">
        {{ route.label }}
       </nuxt-link>
      </li>
    </ul>

    <button class="nav-btn">
      <i class="fas fa-bars text-3xl"></i>
    </button>
  </nav>
</template>

<script setup>
  const routes = [
    { label: 'About', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/Contact' }
  ]
</script>
