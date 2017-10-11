<template>
  <div id="home">
    <group style="margin-top: 40px;">
      <cell title="公告" >
        <marquee >
          <marquee-item v-for="i in announcementList" :key="i" >{{i}}</marquee-item>
        </marquee>
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell , Marquee, MarqueeItem} from 'vux'

export default {
  components: {
    Group,
    Cell,
    Marquee,
    MarqueeItem
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
          })
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

<style scoped>





</style>
