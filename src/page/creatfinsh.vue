<template>
  <div id="creatfinsh">
    <header-lg bigTitle="CET-4" noteTitle="注册一下" ></header-lg>
    <div class="padding-md">
      <div class="text-size-lg">姓名:</div>
      <div>
        <input type="text" class="inputs" v-model="username"/>
      </div >
      <div class="padding-sm"></div>
      <div class="text-size-lg">注册手机号:</div>
      <div>
        <input type="text" class="inputs" v-model="mobile"/>
      </div>
    </div>
    <div class="text-size-lg padding-md">性别</div>
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
    <bottomBtn value="完成注册" color="orange" class="bottomBtn" @click.native="goCreatSucess"></bottomBtn>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import headerLg from '../components/header-lg.vue'
  import bottomBtn from '../components/bottomBtn.vue'
  Vue.use(VueResource)
  export default {

    name: 'creatfinsh',
    data:function () {
      return{
          mobile:'17777777777',
          username:'wDaWang',
          sex:'1'
      }
    },
    components: {
      headerLg,
      bottomBtn
    },
    methods:{

      goCreatSucess:function () {
        if(this.name!='' && this.mobile!=''){
          var formData =new FormData()
          formData.append('username',this.username)
          formData.append('mobile',this.mobile)
          formData.append('sex',this.sex)
          formData.append('examTime',this.$parent.examTime)
          formData.append('preExamDay',this.$parent.preExamDay)
          this.$http.post("http://"+this.$store.state.serverIP+"/json/post_reguser.php",formData).then(
              function(response){
                  if(response.data='1'){
                    this.$router.push({path:'/CreatSucess'})
                    console.log(formData.username);
                  }
              },function(error){
                this.$router.push({path:'/Error'})
            }
          )
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
