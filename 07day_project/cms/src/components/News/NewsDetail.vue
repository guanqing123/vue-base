<template>
  <div class="detail">
    <nav-bar title="新闻详情"/>
    <div class="news-title">
      <p>{{newsInfo.title}}</p>
      <div>
        <span>{{newsInfo.reads}}次点击</span>
        <span>分类:民生经济</span>
        <span>添加时间:{{newsInfo.createDate}}</span>
      </div>
    </div>
    <div class="news-content" v-html="newsInfo.content"></div>
  </div>
</template>

<script>
export default {
  name: 'news-detail',
  data () {
    return {
      newsInfo: {} // 新闻详情数据
    }
  },
  created () {
    // console.log(this.$route.params)
    // 1. 获取路由参数
    // var id = this.$route.params.id
    let { id } = this.$route.params
    // 2. 拼接后台url发起请求
    this.$axios.get('/sellactivity/getSellActivity?id=' + id + '&uid=180321105710')
      .then(res => {
        this.newsInfo = res.data.data
        console.log(JSON.stringify(this.detail))
      })
    // 3. 响应的数据渲染到页面上,通过一个详情对象
  }
}
</script>

<style scoped>
.detail {
  margin-bottom: 55px;
}
.news-content {
  width: 100%;
}
.news-content >>> img {
  width: 100%;
}
</style>
