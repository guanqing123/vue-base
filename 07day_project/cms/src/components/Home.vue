<template>
  <div>
    <!-- 上有轮播 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="img in imgs" :key="img">
        <img :src="img" />
      </mt-swipe-item>
    </mt-swipe>

    <template v-if="Math.random() > 0.5">
      <!--installer.js里面的Vue全局组件-->
      <test title="常用组件"/>

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
    </template>
    <template v-else>
      <test title="封装九宫格"/>
      <div class="grid">
        <my-ul>
          <my-li v-for="(module, index) in modules" :key="index">
            <router-link :to="module.route">
              <span :class="module.className"></span>
              <div>{{module.title}}</div>
            </router-link>
          </my-li>
        </my-ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgs: [], // 轮播图数据
      modules: [{
        title: '新闻资讯', className: 'back-news', route: { name: 'NewsList' }
      }, {
        title: '图文分享', className: 'back-pic', route: { name: 'PhotoList', query: {categoryId: 0} }
      }, {
        title: '商品展示', className: 'back-goods', route: { name: 'GoodsShow', params: {page: 1} }
      }, {
        title: '留言反馈', className: 'back-feed', route: { name: 'Home' }
      }, {
        title: '搜索资讯', className: 'back-search', route: { name: 'Home' }
      }, {
        title: '联系我们', className: 'back-callme', route: { name: 'Home' }
      }]
    }
  },
  created () {
    // 测试自己写的插件
    // set方法无法调用
    this.$log = 'abc'
    // get方法可以
    this.$log()
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
  height: 160px;
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
