<template>

  <section class="container md:h-3/4 
   mx-auto px-4 py-12 font-montserrat
   flex items-center">
    
    <article class="font-thin">

      <h3 class="heading stroke 
       text-secoundary font-thin">
        Recent Works
      </h3>

       <div class="para mt-4"
        v-for="work in works">

        <h4 v-html="work.client"
         class="text-accent font-medium
         text-base sm:text-lg font-raleway"></h4>
        <p class="text-sm md:text-base">Date - {{work.date}}</p>

        <ul class="px-4 sm:px-8 mt-4">
          <li v-for="point in work.points"
           class="list-disc">
           <p v-html="point" 
            class="text-sm sm:text-base md:text-lg"></p>
          </li>
        </ul>
       </div>
    </article>

  </section>
</template>

<script setup>
  const works = [
    {
     client: 'Onc Foundation', 
     date: '12/02/03', 
     points: [
      'Built a full-stack website with custom design',
      'Integrated a razor-pay and database to record payment and volunteer information',
      'Included dynamic content such as campaigns and galleries on the website',
      'Conducted on-page and off-page SEO to optimize the website for search engines',
      "Implemented social media marketing strategies to increase the website's visibility and engagement"
     ]
    },
    {
     client: 'Futurescape Developers', 
     date: '8/01/03', 
     points: [
      'Tasked with creating a custom-designed static website',
      'Included an email form on the website'
     ]
    }
  ]
</script>
