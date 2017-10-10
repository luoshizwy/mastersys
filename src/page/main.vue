<template>
  <div>
    <x-header style="position: absolute;z-index: 100;width:100%;left: 0;top:0;" :title=this.$store.state.headerTitle :left-options="{showBack: false}"></x-header>

    <router-view style="margin-top: 40px;"></router-view>
    <tabbar>
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

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
