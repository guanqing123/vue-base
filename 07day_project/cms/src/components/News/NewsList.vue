<template>
  <div>
    <nav-bar :title="title" />

    <!-- 新闻列表 -->
    <div class="list">
      <ul>
        <li v-for="(news, index) in newsList" :key="index">
          <router-link :to="{name:'NewsDetail',params:{id:news.id}}">
            <img :src="news.fileRealPath">
            <div>
              <span>{{news.title}}</span>
              <div>
                <p>点击数:{{news.id}}</p>
                <p>发表时间:{{news.createDate | convertTime('YYYY/MM/DD')}}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'news-list',
  data () {
    return {
      title: '新闻列表',
      newsList: [] // 新闻列表数据
    }
  },
  created () {
    this.$axios.get('/sellactivity/getSellingActivityFenye?userid=180321105710&pageNum=1&pageSize=20')
      .then(res => {
        console.log(res)
        this.newsList = res.data.data.list
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
  ul,p {
    margin: 0;
    padding: 0;
  }
  /*.list {
    margin-bottom: 55px;
  }*/
  .list ul {
    padding: 0;
  }
  .list li {
    list-style: none;
    padding: 10px 0px;
    border-bottom: 1px solid rgba(200,200,200,0.5);
  }
  .list a {
    display: block;
    width: 330px;
    height: 54px;
    padding: 0 15px;
  }
  .list a img {
    float: left;
    width: 52px;
    height: 52px;
    margin-right: 20px;
  }
  .list a div {
    float: left;
    width: 238px;
  }
  .list span {
    display: block;
    width: 100%;
    height: 30px;
    font-size: 17px;
    white-space: nowrap;  /*为规定段落中的文本不换行*/
    text-overflow: ellipsis; /*为当文本内容溢出时显示省略标记*/
    overflow: hidden;
  }
  .list a p {
    float: left;
    color: #0bb0f5;
    font-size: 14px;
    line-height: 21px;
  }
  .list p:nth-child(2) {
    float: right;
  }
</style>
