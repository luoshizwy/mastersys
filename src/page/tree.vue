<template>
  <div>
    <p>111111111111</p>
    <p>111111111111</p>
    <p>111111111111</p>
    <p>111111111111</p>
    <p>111111111111</p>
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
   this.$store.state.headerTitle='技能树'
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
