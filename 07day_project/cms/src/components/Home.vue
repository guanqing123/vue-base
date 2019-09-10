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
        <li>
        <a href="">
          <span class="back-img"></span>
          <div>1111</div>
        </a>
      </li>
        <li>
          <a href="">
            <span class="back-img"></span>
            <div>2222</div>
          </a>
        </li>
        <li>
          <a href="">
            <span class="back-img"></span>
            <div>3333</div>
          </a>
        </li>
        <li>
          <a href="">
            <span class="back-img"></span>
            <div>4444</div>
          </a>
        </li>
        <li>
          <a href="">
            <span class="back-img"></span>
            <div>5555</div>
          </a>
        </li>
        <li>
          <a href="">
            <span class="back-img"></span>
            <div>6666</div>
          </a>
        </li>
        <li>
          <a href="">
            <span class="back-img"></span>
            <div>7777</div>
          </a>
        </li>
        <li>
          <a href="">
            <span class="back-img"></span>
            <div>8888</div>
          </a>
        </li>
        <li>
          <a href="">
            <span class="back-img"></span>
            <div>9999</div>
          </a>
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
      imgs: [] // 轮播图数据
    }
  },
  created () {
    this.$axios.get('/homepage/getHomePageList')
      .then(res => {
        this.imgs = res.data.data.map(item => item.fileRealPath)
        console.log(this.imgs)
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
