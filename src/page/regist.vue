<template>
  <div id="Regist">
    <br>
    <!--<header-lg bigTitle="CET-4" noteTitle="注册一下" ></header-lg>-->
    <!--<swiper :list="SwiperList" auto style="width:80%;margin:0 auto;" height="180px" :show-dots="showdots"></swiper>-->
    <div class="logo">
      <img src="../assets/img/logo.png"/>
    </div>

     <!--<img src="../assets/img/logo2.png"/>-->

    <divider>注册</divider>
    <div class="padding-sm">
      <div class="text-size-md">姓名:</div>
      <div>
        <input type="text" class="inputs" placeholder="请输入姓名" v-model="username"/>
      </div >
      <div class="padding-sm"></div>
      <div class="text-size-md">注册手机号:</div>
      <div>
        <input type="text" class="inputs" placeholder="请输入注册手机号" v-model="mobile"/>
      </div>
    </div>
    <div class="text-size-md padding-sm">性别</div>
    <div class="radio-md padding-md">
      <ul>
        <li class="radiomd active" id="data-1" @click="sexSelect('data-1')">
          <div>男</div>
        </li>
        <li class="radiomd noactive" id="data-0" @click="sexSelect('data-0')">
          <div>女</div>
        </li>

      </ul>
    </div>
    <br>
    <x-button type="primary" @click.native="goSetPassWord">提交</x-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import { XButton ,Swiper} from 'vux'
  import Divider from "../../node_modules/vux/src/components/divider/index.vue";

  Vue.use(VueResource)
  export default {

    name: 'creatfinsh',
    data:function () {
      return{
          mobile:'',
          username:'',
          sex:'1',
//          showdots:false,

//          SwiperList:[{ url: 'javascript:', img: '../assets/img/logo.png', title: '送你一朵fua' }]


      }
    },
    components: {
//      headerLg,
//      bottomBtn
      Divider,
      XButton,
      Swiper,
    },
    methods:{

      goSetPassWord:function () {
        if(this.name!='' && this.mobile!=''){
          var formData =new FormData()
          formData.append('username',this.username)
          formData.append('mobile',this.mobile)
          formData.append('sex',this.sex)
//          formData.append('examTime',this.$parent.examTime)
          formData.append('preExamDay',this.$parent.preExamDay)
          this.$http.post("http://"+this.$store.state.serverIP+"/json/post_regist.php",formData).then(
              function(response){
                  if(response.data='1'){
                    //模拟注册成功
                    this.$store.state.userName=this.username
                    this.$store.state.userPhone=this.mobile
                    this.$store.state.userSex=this.sex
                    console.log(this.$store.state.userName);
                    console.log(this.$store.state.userPhone);
                    console.log(this.$store.state.userSex);
                    this.$router.push({path:'/registSetPassWord'})

                  }
              },function(error){
                this.$router.push({path:'/Error'})
            }
          )
        }else{
          this.$vux.toast.text('请输入完整信息','bottom')

          setTimeout(()=>{
            this.$vux.toast.hide()
          },2000)
        }

      },
      sexSelect:function (id) {
        var obj = document.getElementsByClassName('radiomd')
        for(var i=0;i<obj.length;i++){
          obj[i].setAttribute("class",'radiomd noactive')
        }
        document.getElementById(id).setAttribute("class","radiomd active")
        this.sex=id.replace(/data-/g,'');
        console.log(this.sex);
      },
    }
  }
</script>


<style lang="less" scoped>
  @import '../assets/css/variables.less';
  @import '../assets/css/main.less';
  .logo{
    /*width:100%;*/
   text-align:  center;
    width: 100%;
    height: 150px;
    margin-bottom: 60px;
  }
  .inputs{
    border:1px solid @gray-light;
    width: 100%;
    height: 40px;
    margin-top: 10px;
    font-size: 100%;
    color: @gray;
    text-indent: 5px;
  }
  .text-green{
    color: @green;
  }
  .text-text{
    font-size: 110%;
  }
  p{
    margin-top: 10px;
  }
  .radio-md{
    li{
      float:left;
      width: 60px;
      height: 60px;
      padding: 5px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    .active{
      border: 1px solid @green;
      div{
        background-color: @green;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: @white;
      }
    }
    .noactive{
      border: 1px solid @gray-light;
      div{
        background-color: @gray-lighter;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: @black;
      }
    }
  }

</style>
