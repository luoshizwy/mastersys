<template>
  <div id="home">
    <x-header id="header" title="添加技能" :left-options="{showBack: true}"></x-header>

  </div>
</template>

<script>
import { XHeader,Group, Cell , Marquee, MarqueeItem} from 'vux'

export default {
  components: {
    Group,
    Cell,
    Marquee,
    MarqueeItem,
    XHeader
  },
  data () {
    return {
      announcementList:['公告1','公告2'],
      msg: 'Hello World!'
    }
  },
  created:function () {
    this.$store.state.headerTitle='主页'
  },
  methods:{
    getAnnouncementList:function () {
        this.$axios.get('http://'+this.$store.state.serverIP+'/json/announcement.php')
          .then(function (res) {
            console.info(res)

            this.announcementList=eval('('+res.data+')')
            console.info(this.announcementList)
          }.bind(this))
          .catch(function (err) {
//            clearInterval(this.getAnnouncementList)
          }.bind(this))
    },
  },

  mounted:function () {
    this.$nextTick(function () {
      console.info('timer启动')
//      this.announcementList=[]
//      setInterval(this.getAnnouncementList,2000)
    })
  },
  destroyed:function () {
    console.info('timer清除')
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
