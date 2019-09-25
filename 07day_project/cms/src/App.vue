<template>
  <div>
    <!-- 顶部标题栏 -->
    <mt-header :title="title"></mt-header>

    <!--所有即将变化的页面中都会被container的样式生效,相当于一个div包裹-->
    <router-view class="container" />

    <!-- 底部tabbar -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="../static/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img slot="icon" src="../static/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="Shopcar">
        <img slot="icon" src="../static/img/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img slot="icon" src="../static/img/find.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: 'Home'
    }
  },
  watch: {
    // 不能使用箭头函数,因为this会向上级绑定
    selected: function (newV, oldV) {
      // console.log(this)
      this.$router.push({ // 编程导航
        name: newV
      })
    }
  },
  computed: {
    title: function () {
      let title = ''
      switch (this.selected) {
        case 'Home':
          title = '信息分享系统'
          break
        case 'Member':
          title = '会员'
          break
        case 'Shopcar':
          title = '购物车'
          break
        case 'Search':
          title = '查找'
          break
      }
      return title
    }
  }
}
</script>

<style scoped>
.mint-tabbar {
  position: fixed;
}
</style>
