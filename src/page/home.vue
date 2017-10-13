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
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>

    <panel header="技能排行榜"  :list="list" type="5" ></panel>

  </div>
</template>

<script>
  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
import {Panel,Search ,Swiper,  Group, Cell , Marquee, MarqueeItem} from 'vux'

export default {
  components: {
    Group,
    Cell,
    Marquee,
    MarqueeItem,
    Swiper,
    Search,
    Panel
  },
  data () {
    return {
      //搜索
      results: [],
      value: '',

      //搜索
      //panel
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: 'Java编程技能',
        desc: 'Java学习的核心是面向对象...',
//        url: '/component/cell',
        meta: {
          source: '师傅：XXX',
          date: '学习人数：100人',
          other: '五星难度'
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: 'HTML5',
        desc: 'HTML5分为三个部分：标签、CSS、JavaScript',
//        url: {
//          path: '/component/radio',
//          replace: false
//        },
        meta: {
          source: '师傅：XXX',
          date: '学习人数：99',
          other: '三星难度'
        }
      }],
      //panel
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
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult(val) {
      this.results = val ? getResult(this.value) : []
    },
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
