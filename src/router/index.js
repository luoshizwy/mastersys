import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/page/main'
import Login from '@/page/login'
import Home from '@/page/home'
import Regist from '@/page/regist'
import Mine from '@/page/mine'
import Tree from '@/page/tree'
import More from '@/page/more'
import registSetPassWord from '@/page/registSetPassWord'
import AddSkillFun from '@/page//Fun/addSkillFun'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/AddSkillFun',
      name: 'AddSkillFun',
      component: AddSkillFun
    },
    {
      path: '/registSetPassWord',
      name: 'registSetPassWord',
      component: registSetPassWord
    },
    {
      path:'/',
      name: 'Regist',
      component: Regist,
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
        },
        {
          path:'/Mine',
          name: 'Mine',
          component: Mine,
        },
        {
          path:'/Tree',
          name: 'Tree',
          component: Tree,
        },
        {
          path:'/More',
          name: 'More',
          component: More,
        },


      ],
    }
  ]
})
