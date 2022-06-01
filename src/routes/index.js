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
import UserInfo from './UserInfo.vue'
import LoginFind from './LoginFind.vue'
import MixMack from './MixMack.vue'
import MixProduct from './MixProduct.vue'

export default createRouter({

  // 라우터 이동시 스크롤 최상단으로 이동
  scrollBehavior() {
    return { top : 0 }
  },

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
    {
      path: '/signUp/userInfo',
      component: UserInfo
    },
    {
      path: '/login/loginFind',
      component: LoginFind
    },
    {
      path: '/myChoise/mixMack',
      component: MixMack
    },
    {
      path: '/myChoise/mixProduct',
      component: MixProduct
    },
  ]
})