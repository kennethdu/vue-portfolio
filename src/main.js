// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
// import AOS from "aos";
import "aos/dist/aos.css";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueScrollTo from 'vue-scrollto'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  // })

  // AOS.init();
  
    Vue.use(VueScrollTo, {
      duration: 500,
      easing: "ease",
    })

  Vue.use(Buefy)
  // Vue.use(AOS)

  Vue.component('Layout', DefaultLayout)
}