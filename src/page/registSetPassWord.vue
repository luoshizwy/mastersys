<template>

  <div id="login">
    <br>
    <div class="logo">
      <img src="../assets/img/logo2.png"/>
    </div>
    <divider>设置密码</divider>
    <!--<header-lg bigTitle="CET-4" noteTitle="注册一下" ></header-lg>-->
    <div class="padding-md">
      <div class="text-size-lg">设置密码:</div>
      <div>
        <input type="password" class="inputs" v-model="password"/>
      </div >
      <div class="padding-sm"></div>
      <div class="text-size-lg">再输入一遍:</div>
      <div>
        <input type="password" class="inputs" v-model="comFirm"/>
      </div>
    </div>
    <br>
    <x-button type="primary" @click.native="goLogin">注册</x-button>

    <!--<bottomBtn value="完成注册" color="orange" class="bottomBtn" @click.native="goCreatSucess"></bottomBtn>-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import { XButton ,Swiper} from 'vux'
  import Divider from "../../node_modules/vux/src/components/divider/index.vue";
//  import headerLg from '../components/header-lg.vue'
//  import bottomBtn from '../components/bottomBtn.vue'
  Vue.use(VueResource)
  export default {

    name: 'creatfinsh',
    data:function () {
      return{

        comFirm:'',
        password:''
      }
    },
    components: {
//      headerLg,
//      bottomBtn
      XButton,
      Divider,
    },
    methods:{

      goLogin:function () {

        if(this.password!='' &&this.password==this.comFirm){
          var formData =new FormData()

          formData.append('preExamDay',this.$parent.preExamDay)
          this.$http.post("http://"+this.$store.state.serverIP+"/json/post_regist.php",formData).then(
              function(response){
                  if(response.data='1'){
                    this.$router.push({path:'/Home'})
                    console.log(formData.username);
                  }
              },function(error){
                this.$router.push({path:'/Error'})
            }
          )
        }else{
          this.$vux.toast.text('两次密码输入不一致，请重新提交！','bottom')
          this.comFirm=''
          this.password=''
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
