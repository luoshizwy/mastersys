<template>
  <div>
    <divider style="margin-top: 50px">我的成就</divider>
    <card >
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>{{skillNum}}</span>
          <br/>
          设置技能
        </div>
        <div class="vux-1px-r">
          <span>{{prenticeNum}}</span>
          <br/>
          徒弟人数
        </div>
        <div class="vux-1px-r">
          <span>{{skillBeDoneNum}}</span>
          <br/>
          技能学习数
        </div>

      </div>
    </card>
    <divider>我的技能</divider>
    <group title="查看我的技能">
      <cell
        title="技能列表"
        is-link
        :border-intent="false"
        :arrow-direction="showSkillList ? 'up' : 'down'"
        @click.native="getSkillList"></cell>
    </group>

      <template v-if="showSkillList">
        <cell-box class="sub-item" is-link >content 001</cell-box>
        <cell-box class="sub-item" is-link >content 001</cell-box>
        <cell-box class="sub-item" is-link >content 001</cell-box>
      </template>

    <divider>我的徒弟</divider>

    <divider>统计数据</divider>
  </div>
</template>

<script>
import { Group, Cell ,Card,CellBox} from 'vux'
import Divider from "../../node_modules/vux/src/components/divider/index.vue";

export default {
  methods:{
    getSkillList:function () {
      if(this.skillList.length==0){
        //服务器数据获取

      }
      this.showSkillList = !this.showSkillList
    }
  },
  components: {
    Group,
    Cell,
    Divider,
    Card,
    CellBox
  },
  data () {
    return {
      showSkillList:false,


      skillNum:'10',
      prenticeNum:'10',
      skillBeDoneNum:'10',
      msg: 'Hello World!',


      skillList:[]
    }
  },
  created:function () {
    this.$store.state.headerTitle='我的'
  }
}
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
</style>
