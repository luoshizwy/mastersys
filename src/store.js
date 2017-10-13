import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state={
  //服务器
  serverIP:'10.25.5.57',

  //用户信息
  userName:'wangyue',
  userImgSrc:'',
  userId:'',
  userSex:'',
  userPhone:'',
  //师傅参数

  //徒弟参数

//header
  headerTitle:'主页',
  //新增技能列表
  newSkillList:[],



}

export default new Vuex.Store({
  state,
})
