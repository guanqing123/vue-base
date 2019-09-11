<template>
  <div>
    <!-- 上有轮播 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="img in imgs" :key="img">
        <img :src="img" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 下有九宫格 -->
    <div class="grid">
      <ul>
        <li v-for="(module, index) in modules" :key="index">
          <router-link :to="module.route">
            <span :class="module.className"></span>
            <div>{{module.title}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgs: [], // 轮播图数据
      modules: [{
        title: '新闻资讯', className: 'back-news', route: { name: 'home' }
      }, {
        title: '图文分享', className: 'back-pic', route: { name: 'home' }
      }, {
        title: '商品展示', className: 'back-goods', route: { name: 'home' }
      }, {
        title: '留言反馈', className: 'back-feed', route: { name: 'home' }
      }, {
        title: '搜索资讯', className: 'back-search', route: { name: 'home' }
      }, {
        title: '联系我们', className: 'back-callme', route: { name: 'home' }
      }]
    }
  },
  created () {
    this.$axios.get('/homepage/getHomePageList')
      .then(res => {
        this.imgs = res.data.data.map(item => item.fileRealPath)
      })
      .catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe {
  width: 100%;
  height: 200px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
/*九宫格样式*/
.grid span{
  display: inline-block;
  margin: 10px 0;
  width: 50px;
  height: 50px;
  background-repeat: round;
}
.back-img{
  background-image: url("../../static/img/callme.png");
}
.back-news{
  background-image: url("../../static/img/news.png");
}
.back-pic{
  background-image: url("../../static/img/picShare.png");
}
.back-goods{
  background-image: url("../../static/img/goodsShow.png");
}
.back-feed{
  background-image: url("../../static/img/feedback.png");
}
.back-search{
  background-image: url("../../static/img/search.png");
}
.back-callme{
  background-image: url("../../static/img/callme.png");
}
ul{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li{
  list-style: none;
  float: left;
  width: 33.333%;
  text-align: center;
}
</style>
