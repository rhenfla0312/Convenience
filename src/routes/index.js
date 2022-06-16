import { createRouter, createWebHashHistory } from 'vue-router'

// components
import Home from './Home.vue'
import Description from './Description.vue'
import Bestchoise from './Bestchoise.vue'
import Bestranking from './Bestranking.vue'
import Mychoise from './Mychoise.vue'

import Login from './Login.vue'
import LoginInfo from './LoginInfo.vue'
import SignUp from './SignUp.vue'
import ServiceCenter from './ServiceCenter.vue'
import UserInfo from './UserInfo.vue'
import LoginFind from './LoginFind.vue'
import Convenience from './Convenience.vue'
import ConvenienceFind from './ConvenienceFind.vue'

import Cu from './Cu.vue'
import Gs from './Gs.vue'
import Ministop from './Ministop.vue'

export default createRouter({

  // 라우터 이동시 스크롤 최상단으로 이동
  scrollBehavior() {
    return { top : 0 }
  },

  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/description',
      component: Description
    },
    {
      path: '/bestChoise',
      name: 'bestChoise',
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
      path: '/login/loginInfo/:loginId?',
      component: LoginInfo
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
      path: '/convenience',
      component: Convenience
    },
    {
      path: '/convenience/convenienceFind/:contentId?',
      name: "convenienceFind",
      component: ConvenienceFind
    },
    {
      path: '/convenience/cu',
      name: "cu",
      component: Cu
    },
    {
      path: '/convenience/gs',
      name: "gs",
      component: Gs
    },
    {
      path: '/convenience/ministop',
      name: "ministop",
      component: Ministop
    },
    {
      path: '/convenience/cu/convenienceFind/:contentId?',
      name: "cuConvenienceFind",
      component: ConvenienceFind
    },
    {
      path: '/convenience/gs/convenienceFind/:contentId?',
      name: "gsConvenienceFind",
      component: ConvenienceFind
    },
    {
      path: '/convenience/ministop/convenienceFind/:contentId?',
      name: "ministopConvenienceFind",
      component: ConvenienceFind
    },
  ]
})