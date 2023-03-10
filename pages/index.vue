<template>
  <div class="container mx-auto h-3/4
  sm:h-full flex items-center relative">
    
   <article class="p-2 sm:p-4 z-10">

     <h1 class="heading font-fugaz 
      text-primary">
       sosring
     </h1>

     <h3 class="sub-heading
      font-montserrat text-secoundary">
       Full-Stack Developer
     </h3>

    <a href="cv.pdf" 
     download="cv" 
     class="cv-link">
     <i class="fas fa-eye"></i>
     <p> Download CV </p>
    </a>
   </article>

   <img src="/logo.svg" 
    alt="circle illustration"
    class="hidden sm:block
    absolute right-0 bottom-12">

  </div>
</template>

<style scoped>
  .heading {
    font-size: clamp(5rem, 15vw, 12rem);
    -webkit-text-stroke: 2px #FC4350;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    z-index: 1;
  }

  .heading::before {
    content: 'sosring';
    -webkit-text-stroke: 2px #444DF8;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    position: absolute;
    z-index: 0;
    transform: translate(3%, -7%);
  }

  .sub-heading {
    font-size: clamp(1.1rem, 2.5vw, 1.7rem);
  }
</style>
