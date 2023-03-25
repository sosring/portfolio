export const useProjectStore = defineStore('useProject', {
  state: () => ({
    projects: [
      {
        img: "onc-foundation",
        name: "Website for Social Impact",
        summary: "We developed a full-stack website with custom design, featuring dynamic content like campaigns and galleries. The website was integrated with a database and Google Analytics to track volunteer information and overall site traffic.",
        stack: ['Nuxt JS', 'Express', 'Mongodb'],
        web_link: 'https://onc-foundation.netlify.app',
        source: null,
        private: true
      },
      {
        img: "ease-ecom",
        name: "Ease ecom pet project",
        summary: "Ease is an e-com pet project which uses firebase for its backend and security. it's an unfinished project for a good reason that is I am building a full-stack web-app with the latest tech stack which is currently under development and will replace this project in future.",
        stack: ['Vue', 'Scss', 'Firebase'],
        web_link: 'https://ease-7f317.firebaseapp.com/',
        source: 'https://github.com/sosring/ease-ecom',
        private: false 
      }
    ]
  })
}) 
