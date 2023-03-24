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

    <div class="project-wrapper 
     grid gap-8 sm:p-4">

      <Project-card 
        v-for="(project, index) in useProjects.projects"
       :project="project"
       :index="index"/>
    </div>

    </article>
  </section>
</template>

<script setup>
  import { useProjectStore } from '../stores/useProjects.js'
  const useProjects = useProjectStore()
</script>

<style scoped>
  .project-wrapper {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
</style>
