<template>
  <div id="home">
    <x-header id="header" title="写笔记" :left-options="{showBack: true}"></x-header>



    <div style="margin-top: 46px">
      <group title="选择我的技能">
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

      <group title="已选技能">
       <cell-box class="sub-item"  >{{chooseSkill}}</cell-box>
      </group>

      <group title="写笔记">
        <x-textarea :max="2000" placeholder="在此书写笔记..." height="300"></x-textarea>
      </group>
      <br>

      <x-button  type="primary" @click.native="submit">提交</x-button>

      <!--<div v-transfer-dom>-->
        <!--<x-dialog v-model="showQrcode" class="dialog-demo" hide-on-blur>-->
          <!--<div class="img-box" >-->
            <!--<qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>-->
            <!--&lt;!&ndash;<img src="../../assets/img/logo.png" style="max-width:100%">&ndash;&gt;-->
          <!--</div>-->
          <!--&lt;!&ndash;<div @click="showQrcode=false">&ndash;&gt;-->
            <!--&lt;!&ndash;<span class="vux-close"></span>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--<div >-->
              <!--<span class="vux-close"></span>-->
          <!--</div>-->
        <!--</x-dialog>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import {TransferDomDirective as TransferDom,Qrcode,XDialog,CellBox,XTextarea,XButton,Rater,XInput, XHeader,Group, Cell , Marquee, MarqueeItem} from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {

    Group,
    Cell,
    Marquee,
    MarqueeItem,
    XHeader,
    XInput,
    Rater,
    XButton,
    XTextarea,
    CellBox,
    XDialog,
    Qrcode
  },
  data () {
    return {
      title:'',
      msg: 'Hello World!',
      showSkillList:false,


      skill:{},
      skillList:[],
      chooseSkill:''


    }
  },

  methods:{
    onItemClick:function (obj) {
      this.chooseSkill=obj.skillName
      this.showSkillList = !this.showSkillList
    },
//    createQrcode:function () {
//      this.showQrcode=true
//    },
    getSkillList:function () {
      if(this.skillList.length==0){
        //服务器数据获取
        this.$axios.get('http://'+this.$store.state.serverIP+'/json/skillList.php')
          .then(function (res) {
//            console.info(res)
            this.skillList=eval('('+res.data+')')
            if( this.$store.state.newSkillList.length>0){
              //把store中的新增skill加载进来
              for(var i=0;i<this.$store.state.newSkillList.length;i++){
                this.skillList.push(this.$store.state.newSkillList[i])
              }
            }
            console.info(this.skillList)
          }.bind(this))
          .catch(function (err) {
            console.info(err)
          }.bind(this))
      }
      this.showSkillList = !this.showSkillList
    },
//    submitSkill:function () {
//
//
//      const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
//      this.$vux.confirm.show({
//        // 组件除show外的属性
//        title:'确认提交？',
//        confirmText:'提交',
//        cancelText:'再改改',
//        onCancel () {
//
//        },
//        onConfirm () {
//          //添加到store的newSkillList中
//
//          console.info( _this.$store.state.newSkillList)
//
//          _this.$router.push({path:'/Home'})
//        }
//      })
//
//    },

  },

  mounted:function () {
    this.$nextTick(function () {

    })
  },
  destroyed:function () {


  }
}

</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  #header{
    left: 0;
    top: 0;
    position: fixed;
    z-index: 100;
    width:100%;
  }


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
  .dialog-demo {
    .weui-dialog{
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 300px;
      overflow: hidden;
      padding-top: 100px;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }


</style>
