// On importe Vue
import Vue from 'vue'

// On importe d'éventuelles librairies
import $ from 'jquery'
import 'lodash'
import 'lazysizes'

// On importe d'éventuelles librairies Vue
import VueRouter from 'vue-router'

// On importe les composants nécessaires pour le router
import App from './components/App.vue'
import Home from './components/Home/Home.vue'
import Project from './components/Project/Project.vue'

// On indique à Vue d'utiliser d'éventuelles librairies
Vue.use(VueRouter)

// On créé le router
const router = new VueRouter({
  history: false
})

// On configure le router : pour chaque chemin, on indique le composant à utiliser
router.map({
  '/': {
    component: Home,
    name: 'home_component'
  },
  '/projects/:projectId': {
    component: Project,
    name: 'project_component'
  }
})

// On redirige vers la home si le chemin indiqué dans l'url n'existe pas
router.redirect({
  '*': '/'
})

// On redirige vers le haut de la page à chaque changement de page
router.afterEach((transition) => {
  $('html, body').animate({ scrollTop: 0 }, 400)
})

// Configuration des transitions en utilisant les classes de la librairie animate.css
// https://daneden.github.io/animate.css/
// http://vuejs.org/guide/transitions.html#Custom-Transition-Classes
Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
})

// On démare le router (#js-app est l'id dans index.html)
router.start(App, '#js-app')