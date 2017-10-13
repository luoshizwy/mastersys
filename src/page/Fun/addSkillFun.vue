<template>
  <div id="home">
    <x-header id="header" :title="title" :left-options="{showBack: true}"></x-header>
    <!--<p style="margin-top: 46px">技能名称：{{skillName}}</p>-->
    <!--<p>技能等级：{{skillLevel}}</p>-->
    <!--<p>技能掌握阶段：{{stepList}}</p>-->
    <!--<p>指导：{{skillGuide}}</p>-->
    <!--<p>{{skill}}</p>-->


    <div style="margin-top: 46px">
      <group title="技能名称">
        <x-input title="技能名称" placeholder="输入技能名称" v-model="skillName"></x-input>
      </group>
      <group title="技能难度" >
        <!--<x-input title="技能名称" placeholder="输入技能名称" v-model="skillName"></x-input>-->
        <div style="text-align: center;">
        <rater style="" v-model="skillLevel" :max="6" active-color="#04BE02"></rater>
        </div>
      </group>
      <group title="技能掌握阶段">
        <div v-for="item in stepList">
         <x-input title="阶段名称" placeholder="输入阶段名称" v-model="item.stepName"></x-input>
        </div>
        <x-button type="default" @click.native="addSkillStep">添加阶段</x-button>
      </group>
      <group title="指导">
        <x-textarea show-counter :max="1000" placeholder="输入指导或要点..." v-model="skillGuide"></x-textarea>
      </group>
      <x-button  type="primary" @click.native="submitSkill">提交</x-button>
    </div>
  </div>
</template>

<script>
import {XTextarea,XButton,Rater,XInput, XHeader,Group, Cell , Marquee, MarqueeItem} from 'vux'

export default {
  components: {
    Group,
    Cell,
    Marquee,
    MarqueeItem,
    XHeader,
    XInput,
    Rater,
    XButton,
    XTextarea
  },
  data () {
    return {
      title:'',
      msg: 'Hello World!',

      skillName:'',
      skillLevel:0,
      stepList:[],
      skillGuide:'',

      skill:{},

      stepNum:0,
    }
  },
  created:function () {
    this.$store.state.headerTitle='主页'
  },
  methods:{
    submitSkill:function () {
      var skill_tmp={
        id:'3',//展示时使用的虚拟数据
        skillName:'',
        skillLevel:0,
        step:[],
        guide:'',
      }
      skill_tmp.skillName=this.skillName
      skill_tmp.skillLevel=this.skillLevel
      skill_tmp.step=this.stepList
      skill_tmp.guide=this.skillGuide
      this.skill=skill_tmp

      const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
      this.$vux.confirm.show({
        // 组件除show外的属性
        title:'确认提交？',
        confirmText:'提交',
        cancelText:'再改改',
        onCancel () {

        },
        onConfirm () {
          //添加到store的newSkillList中
          _this.$store.state.newSkillList.push(_this.skill)
          console.info( _this.$store.state.newSkillList)
          _this.$vux.toast.text('技能已添加成功！','bottom')
          setTimeout(()=>{
            _this.$vux.toast.hide()
          },2000)
          _this.$router.push({path:'/Home'})
        }
      })

    },
    addSkillStep:function () {
      this.stepNum++
      var item={stepName:'',stepNum:this.stepNum,}
      this.stepList.push(item)
      console.info(this.stepList)
    }
//    getAnnouncementList:function () {
//        this.$axios.get('http://'+this.$store.state.serverIP+'/json/announcement.php')
//          .then(function (res) {
//            console.info(res)
//
//            this.announcementList=eval('('+res.data+')')
//            console.info(this.announcementList)
//          }.bind(this))
//          .catch(function (err) {
////            clearInterval(this.getAnnouncementList)
//          }.bind(this))
//    },
  },

  mounted:function () {
    this.$nextTick(function () {
      this.title=this.$route.params.title
      if(this.$route.params.skillId!='no'){
        console.info('编辑')
        var path ;
        if(this.$route.params.skillId=='1'){
          console.info(11111111)
          path ='http://'+this.$store.state.serverIP+'/json/skillOne.php'
          this.$axios.get(path)
            .then(function (res) {
            console.info(res)
              this.skill=eval('('+res.data+')')
              console.info(this.skill)
              this.skillName=this.skill.skillName
              console.info(this.skillName)
              this.skillLevel=this.skill.skillLevel
              console.info(this.skillLevel)
              this.stepList=this.skill.step
              console.info(this.stepList)
              this.skillGuide=this.skill.guide
              console.info(this.skillGuide)
            }.bind(this))
            .catch(function (err) {
              console.info(err)
            }.bind(this))
        }else if(this.$route.params.skillId=='2'){
          console.info(22222222)
          path ='http://'+this.$store.state.serverIP+'/json/skillTwo.php'
          this.$axios.get(path)
            .then(function (res) {
            console.info(res)
              this.skill=eval('('+res.data+')')
//              this.skill=res.data
              console.info(this.skill)
              this.skillName=this.skill.skillName
              console.info(this.skillName)
              this.skillLevel=this.skill.skillLevel
              console.info(this.skillLevel)
              this.stepList=this.skill.step
              console.info(this.stepList)
              this.skillGuide=this.skill.guide
              console.info(this.skillGuide)
            }.bind(this))
            .catch(function (err) {
              console.info(err)
            }.bind(this))
        }
        else if(this.$route.params.skillId=='3'){
          console.info(33333333333)
         this.skill=this.$store.state.newSkillList[0]
          console.info(this.skill)
          this.skillName=this.skill.skillName
          console.info(this.skillName)
          this.skillLevel=this.skill.skillLevel
          console.info(this.skillLevel)
          this.stepList=this.skill.step
          console.info(this.stepList)
          this.skillGuide=this.skill.guide
          console.info(this.skillGuide)
        }



      }else{
        console.info('新建')
      }

    })
  },
  destroyed:function () {
//    this.skillName=''
//    this.skillLevel=0
//    this.stepList=[]
//    this.skillGuide=''
//
//    this.skill={}
//
//    this.stepNum=0
//    console.info('timer清除')
//    clearInterval(this.getAnnouncementList)
  }
}

</script>

<style lang="less" scoped>
  #header{
    left: 0;
    top: 0;
    position: fixed;
    z-index: 100;
    width:100%;
  }




</style>
