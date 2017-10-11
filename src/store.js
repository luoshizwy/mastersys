import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state={
  //服务器
  serverIP:'127.0.0.1',

  //用户信息
  userName:'wangyue',
  userImgSrc:'',
  userId:'',
  userSex:'',
  userPhone:'',
//header
  headerTitle:'主页'

}

export default new Vuex.Store({
  state,
})
