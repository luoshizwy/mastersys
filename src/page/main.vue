<template>
  <div id="app">
    <x-header id="header" :title=this.$store.state.headerTitle :left-options="{showBack: false}"></x-header>

    <router-view id="view"></router-view>

    <tabbar id="bottom">
      <tabbar-item selected link="/Home">
        <!--<img slot="icon" src="../assets/demo/icon_nav_cell.png">-->
        <span slot="label">首页</span>
      </tabbar-item>

      <tabbar-item link="/Tree" >
        <!--<img slot="icon" src="../assets/demo/icon_nav_cell.png">-->
        <span slot="label">技能</span>
      </tabbar-item>

      <tabbar-item  link="/Mine">
        <!--<img slot="icon" src="../assets/demo/icon_nav_cell.png">-->
        <span slot="label">我的</span>
      </tabbar-item>

      <tabbar-item  link="/More">
        <!--<img slot="icon" src="../assets/demo/icon_nav_cell.png">-->
        <span slot="label">更多</span>
      </tabbar-item>

    </tabbar>
  </div>
</template>

<script>
import { Group, Cell ,XHeader, Tabbar, TabbarItem} from 'vux'
import router from '../router/index'
export default {
  components: {
    Tabbar, TabbarItem,
    XHeader,
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/reset.less';
  @import '../assets/css/variables.less';
  @import '../assets/css/main.less';
#header{
  left: 0;
  top: 0;
  position: fixed;
  z-index: 100;
  width:100%;
}
  #view{
    margin-top: 40px;
    margin-bottom: 50px;

  }
  #bottom{
    left: 0;
    bottom: 0;
    position: fixed;
  }
</style>
