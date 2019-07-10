import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/components/Home/Home.vue')
    },
    {
      path: '/city',
      name: 'City',
      component: ()=>import('@/components/City/City.vue')
    },
    {
      path: '/detalls',
      name: 'Detalls',
      component: ()=>import('@/components/Detalls/Detalls.vue')
    }
  ]
})
