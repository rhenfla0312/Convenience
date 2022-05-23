import { createRouter, createWebHashHistory } from 'vue-router'

// components
import Home from './Home.vue'
import Description from './Description.vue'
import Bestchoise from './Bestchoise.vue'
import Bestranking from './Bestranking.vue'
import Mychoise from './Mychoise.vue'

import Login from './Login.vue'
import SignUp from './SignUp.vue'
import ServiceCenter from './ServiceCenter.vue'

export default createRouter({

  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/description',
      component: Description
    },
    {
      path: '/bestChoise',
      component: Bestchoise
    },
    {
      path: '/bestRanking',
      component: Bestranking
    },
    {
      path: '/myChoise',
      component: Mychoise
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signUp',
      component: SignUp
    },
    {
      path: '/servicecenter',
      component: ServiceCenter
    },
  ]
})