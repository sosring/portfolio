<template>

  <section class="container h-full
   mx-auto grid items-center  
   justify-center px-4">

    <article class="article-wrapper">
      <h1 class="heading
       font-fugaz text-primary">
       sosring
      </h1>

      <div class="font-montserrat font-medium">
        <h3 class="sub-heading text-secoundary">
          Full-Stack Developer
        </h3>

        <p class="quote text-light">
         Cradling digital experiences that bring your vision to life.
        </p>
      </div>

        <button class="bg-gradient-to-br 
         from-secoundary to-accent mt-6
         bg-clip-text text-transparent 
         py-2 px-4 rounded text-xs sm:text-sm 
         border-2">
          Get In Touch 
        </button>
    </article>

  </section>
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
    transform: translate(3%, -7%);
    position: absolute;
    animation: shift .8s;
    z-index: 0;
  }

  @media (max-width: 768px) {

    .heading{
      -webkit-text-stroke: 1px #FC4350;
    }
    .heading::before {
      -webkit-text-stroke: 1px #444DF8;
    }
  }

  @keyframes shift {
    from { transform: translate(0%, 0%) };
  }

  .sub-heading {
    font-size: clamp(1.1rem, 2.5vw, 1.7rem);
  }

  .quote {
    font-size: clamp(.9rem, 2.5vw, 1.3rem);
  }
</style>
