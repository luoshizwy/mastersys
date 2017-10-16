<template>
  <div>
    <panel header="我的名片"  :list="list" type="5" ></panel>

    <group title="设置">
      <x-switch title="开启公告" v-model="value1"></x-switch>
      <x-switch title="公开我的技能"></x-switch>
    </group>
  </div>

</template>

<script>
import {XSwitch , Group, Cell,Panel } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Panel,
    XSwitch
  },
  data () {
    return {
      value1:true,
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: 'XXX',
        desc: '单位：信息中心',
//        url: '/component/cell',
        meta: {
          source: '协理工程师',
          date: '',
          other: '电话：0937-6718860'
        }
      }],
    }
  },
  created:function () {
    this.$store.state.headerTitle='更多'
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
