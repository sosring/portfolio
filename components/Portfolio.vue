<template>

  <section class="container mx-auto 
   px-4 py-12 font-montserrat flex 
   items-center">

    <article class="font-thin w-full">

      <h2 class="heading stroke 
       mb-4 sm:mb-6 md:mb-8 
       text-secoundary font-thin"
       id="portfolio">
        Somethings I've Built
      </h2>

    <div class="w-full grid gap-4 
     sm:gap-6 lg:grid-cols-2">
      <Project-card 
        v-for="project in projects"
       :project="project"/>
    </div>

    </article>
  </section>
</template>

<script setup>
  const projects = [
    {
      img: "onc-foundation",
      task: "Full-stack website",
      title: "onc-foundation project",
      summary: "created a website for the Onc Foundation. It had custom design, dynamic content, razor-pay, and database to track payment and volunteer info. The website was optimized for search engines with on-page and off-page SEO.",
      stack: ['Nuxt JS', 'Express', 'Mongodb'],
      live: 'https://oncfoundation.com',
      source: null,
      inDevelopment: true,
      private: true
    }
  ]
</script>
