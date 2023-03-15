<template>

  <section class="container 
   h-full mx-auto px-4 py-12
   font-montserrat">
    
    <article class="font-thin
     grid gap-4 md:grid-cols-2">

     <div class="space-y-4">

      <h3 class="heading stroke 
       text-secoundary font-thin">
       About
      </h3>

       <div class="para space-y-4">
        <p>
         Hi there, I’m Sosring, I’ve always been passionate about Linux operating systems and the idea of being able to configure my own system environment. It was this passion that led me to start my journey as a developer.
        </p>

        <p>
         Throughout the year, I’ve discovered my passion for the web development and endless possibilities it offers for combining creativity and functionality.
        </p>
       </div>
      </div>

       <img src="/computer.gif" 
        alt="computer on top of desk"
        class="rounded-md shadow-lg">

    </article>

    <Skills />
  </section>
</template>

<style scoped>
  .heading {
    font-size: clamp(1.7rem, 5vw, 2.7rem);
  }

  .para {
    font-size: clamp(.9rem, 2.5vw, 1.3rem);
  }
</style>
