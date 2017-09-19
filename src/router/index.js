import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/page/main'
import Login from '@/page/login'
import Home from '@/page/home'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      children:[
        {
          path:'/Home',
          name: 'Home',
          component: Home,
        }
      ],
    }
  ]
})
