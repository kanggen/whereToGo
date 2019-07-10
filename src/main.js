// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios';
Vue.prototype.axios = axios;

import FastClick from 'fastclick'
FastClick.attach(document.body)


import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper, /* { default global options } */);

import store from './store'

import '@/assets/normalize.css'
import '@/assets/html5.js'
import '@/assets/iconfont/iconfont.js';
import '@/assets/iconfont/iconfont.css';
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
