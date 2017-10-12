<template>
  <div>
    <button style="width: 100%;height: 50px;" @click="addSkill">添加技能</button>
    <button style="width: 100%;height: 50px;" @click="addSkill">学习技能</button>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
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
  },
 created:function () {
   this.$store.state.headerTitle='技能管理'
 },
  methods:{
    addSkill:function () {
      this.$router.push({path:'/addSkillFun/添加技能/no'})
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
