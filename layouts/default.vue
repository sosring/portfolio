<script setup>
  import gsap from 'gsap'

  const currentSection = useState('currentSection', () => 'about') 

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
</script>

<template>

  <div>

  <TheNav 
   v-model:currentSection="currentSection"/>

    <main class="h-screen z-0 
     relative pt-16 md:pt-0">

      <slot />
    </main>

    <Blod />
    <Socials />

    <a href="mailto:sosringofficial@gmail.com"
      class="email fixed -right-20 bottom-32 
      hidden lg:block rotate-90 font-poppins 
      text-sm text-secoundary">
      sosringofficial@gmail.com
    </a>
  </div>
</template>

<style scoped>
  .email::after {
    content: "";
    display: inline-block;
    width: 3rem;
    height: 1px;
    margin: 0px auto;
    background: red;
    transform: translateY(-.2rem);
  } 
</style>
