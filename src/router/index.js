import Vue from 'vue'
import Router from 'vue-router'
import SIndexPage from '@/pages/SIndexPage'
import SProjectsPage from "@/pages/SProjectsPage"
import SWorksPage from "@/pages/SWorksPage"
import SDesignerPage from "@/pages/SDesignerPage"
import SAskPage from "@/pages/SAskPage"
import SInterviewPage from "@/pages/SInterviewPage"
import SNewPage from "@/pages/SNewPage"
import SModulePage from "@/pages/SModulePage"
import SLoginPage from "@/pages/SLoginPage"
import SMallsPage from "@/pages/SMallsPage"

 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SIndexPage',
      component: SIndexPage
    },
    {
      path: '/projects',
      name: 'SProjectsPage',
      component: SProjectsPage
    },
    {
      path: '/works',
      name: 'SWorksPage',
      component: SWorksPage
    },
    {
      path: '/designer',
      name: 'SDesignerPage',
      component: SDesignerPage
    },
    {
      path: '/ask',
      name: 'SAskPage',
      component: SAskPage
    },
    {
      path: '/interview',
      name: 'SInterviewPage',
      component: SInterviewPage
    },
    {
      path: '/news',
      name: 'SNewPage',
      component: SNewPage
    },
    {
      path: '/module',
      name: 'SModulePage',
      component: SModulePage
    },
    {
      path: '/login',
      name: 'SLoginPage',
      component: SLoginPage
    },
    {
      path: '/mall',
      name: 'SMallsPage',
      component: SMallsPage
    }
  ]
})
