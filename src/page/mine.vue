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
          技能被学习数
        </div>

      </div>

    </card>
    <divider>星级</divider>
    <div style="width: 100%;text-align: center">
     <rater v-model="rater" style=""></rater>
    </div>
    <!--<divider>我的技能</divider>-->

    <group title="查看我的技能">
      <cell
        title="技能列表"
        is-link
        :border-intent="false"
        :arrow-direction="showSkillList ? 'up' : 'down'"
        @click.native="getSkillList"></cell>
    </group>

      <template v-if="showSkillList" v-for="item in skillList">
        <cell-box class="sub-item" is-link @click.native="onItemClick(item)">{{item.skillName}}</cell-box>
      </template>

    <!--<divider>我的徒弟</divider>-->
    <group title="查看我的徒弟">
      <cell
        title="徒弟列表"
        is-link
        :border-intent="false"
        :arrow-direction="showPrenticeList ? 'up' : 'down'"
        @click.native="getPrenticList"></cell>
    </group>

    <template v-if="showPrenticeList" v-for="item in prenticeList">
      <cell-box class="sub-item" is-link @click.native="onItemClick(item)">{{item.prenticeName}}</cell-box>
    </template>
    <divider>统计数据</divider>
  </div>
</template>

<script>
import { Group, Cell ,Card,CellBox,Panel,Rater} from 'vux'
import Divider from "../../node_modules/vux/src/components/divider/index.vue";

export default {
  methods:{
    onItemClick:function (item) {
      console.info(item)
    },
    getPrenticList:function () {
      if(this.prenticeList.length==0){
        //服务器数据获取
        this.$axios.get('http://'+this.$store.state.serverIP+'/json/prenticeList.php')
          .then(function (res) {
//            console.info(res)
            this.prenticeList=eval('('+res.data+')')
            console.info(this.prenticeList)
          }.bind(this))
          .catch(function (err) {
            console.info(err)
          }.bind(this))
      }
      this.showPrenticeList = !this.showPrenticeList
    },
    getSkillList:function () {
      if(this.skillList.length==0){
        //服务器数据获取
        this.$axios.get('http://'+this.$store.state.serverIP+'/json/skillList.php')
          .then(function (res) {
//            console.info(res)
            this.skillList=eval('('+res.data+')')
            console.info(this.skillList)
          }.bind(this))
          .catch(function (err) {
            console.info(err)
          }.bind(this))
      }
      this.showSkillList = !this.showSkillList
    }
  },
  components: {
    Group,
    Cell,
    Divider,
    Card,
    CellBox,
    Panel,
    Rater,
  },
  data () {
    return {
      showSkillList:false,
      showPrenticeList:false,
      rater:0,


      skillNum:'',
      prenticeNum:'',
      skillBeDoneNum:'',
      msg: 'Hello World!',


      skillList:[],
      prenticeList:[]
    }
  },
  created:function () {
    this.$store.state.headerTitle='我的'
  },
  mounted:function () {
    this.$nextTick(function () {
      //获取师傅信息
      this.$axios.get('http://'+this.$store.state.serverIP+'/json/masterUserImformation.php')
        .then(function (res) {
          console.info(res)

          var information=eval('('+res.data+')')
//          var information=res.data
          console.info(information)
          this.skillNum=information.skillNum
          this.prenticeNum=information.prenticeNum
          this.skillBeDoneNum=information.skillBeDoneNum
          this.rater=information.rater
//          console.info( this.skillNum)
        }.bind(this))
        .catch(function (err) {
          console.info(err)
        }.bind(this))
    })
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
