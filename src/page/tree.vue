<template>
  <div>
    <!--<button style="width: 100%;height: 50px;" @click="addSkill">添加技能</button>-->
    <!--<button style="width: 100%;height: 50px;" @click="addPrenticeFun">邀请学习</button>-->
    <!--<button style="width: 100%;height: 50px;" @click="addPrenticeFun">添加技能文档</button>-->
    <grid>
      <grid-item label="添加技能" @click.native="addSkill">
        <img slot="icon" src="../assets/img/添加技能.png">
      </grid-item>
    </grid>
    <grid>
      <grid-item label="邀请徒弟" @click.native="addPrenticeFun">
        <img slot="icon" src="../assets/img/邀请学习.png">
      </grid-item>
    </grid>
    <grid>
      <grid-item label="写笔记" @click.native="addDocFun">
        <img slot="icon" src="../assets/img/添加技能文档.png">
      </grid-item>
    </grid>
    <grid>
      <grid-item label="添加功能">
        <img slot="icon" src="../assets/img/add.png">
      </grid-item>
    </grid>

  </div>

</template>

<script>
import { Group, Cell,Grid, GridItem } from 'vux'

export default {
  components: {
    Group,
    Cell,Grid, GridItem
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
    addPrenticeFun:function () {
      this.$router.push({path:'/AddPrenticeFun'})
    },
    addSkill:function () {
      this.$router.push({path:'/addSkillFun/添加技能/no'})
    },
    addDocFun:function () {
      this.$router.push({path:'/AddDocFun'})
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
