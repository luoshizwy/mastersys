<template>
  <div id="home" >
    <group style="margin-top: 40px;">
      <cell title="公告" >
        <marquee >
          <marquee-item v-for="i in announcementList" :key="i" >{{i}}</marquee-item>
        </marquee>
      </cell>
    </group>

    <div class="swiper">
      <swiper :list="baseList" auto style="width:80%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div class="contex">
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import {Swiper,  Group, Cell , Marquee, MarqueeItem} from 'vux'

export default {
  components: {
    Group,
    Cell,
    Marquee,
    MarqueeItem,
    Swiper,
  },
  data () {
    return {
      announcementList:['公告1','公告2'],
      msg: 'Hello World!',

      baseList :[{
        url: 'javascript:',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '送你一辆车'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/5.jpg',
        title: '送你一次旅行',
        fallbackImg: 'https://static.vux.li/demo/3.jpg'
      }],
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
  @import '../assets/css/variables.less';
  @import '../assets/css/main.less';
.swiper{
  width: 100%;
  background-color: @gray-lighter;
}
.contex{
  width:100%;
  padding: 5px;
  height: 500px;
  text-align: center;
  div{
    width: 200px;
    height: 200px;
    background-color: @gray;
  }

}


</style>
