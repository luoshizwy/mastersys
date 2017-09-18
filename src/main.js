// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'




FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app-box')