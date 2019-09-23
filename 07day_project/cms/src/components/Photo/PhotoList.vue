<template>
    <div class="list">
        <nav-bar title="图文分享" />

        <!--  引入返回导航  -->
        <div class="photo-header">
            <ul>
              <li v-for="category in categories" :key="category.id">
                <a href="javascript:;" @click="navigateToCateById(category.id)">{{category.title}}</a>
              </li>
            </ul>
        </div>
        <div class="photo-list">
          <ul>
            <li v-for="(photo, index) in photos" :key="index">
              <a>
                <img v-lazy="photo.img_url">
                <p>
                  <span>{{photo.title}}</span>
                  <br>
                  <span>{{photo.zhaiyao}}</span>
                </p>
              </a>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'photo-list',
  data () {
    return {
      photos: [], // 图片数组
      categories: [] // 分类数组
    }
  },
  created () {
    console.log(this.$route.query.categoryId)
    // 1: 获取分类id
    let { categoryId } = this.$route.query
    this.loadPhotosById(categoryId)
  },
  beforeRouteUpdate (to, from, next) {
    // console.log(to)
    // console.log(from)
    let { categoryId } = to.query
    // 发请求更改页面数据
    this.loadPhotosById(categoryId)
    next()
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  methods: {
    navigateToCateById (id) {
      this.$router.push({
        name: 'PhotoList',
        query: {categoryId: id}
      })
    },
    loadPhotosById (categoryId) {
      let instance = axios.create({baseURL: ''})
      // 2: 发起请求
      instance.get('static/data/photo.json')
        .then(res => {
          // 3: 渲染数据
          this.categories = res.data.category
          // 加入全部到数组的顶部
          this.categories.unshift({id: 0, title: '全部'})

          this.photos = res.data.photos[categoryId].sort(function () {
            return Math.random() > 0.5 ? -1 : 1
          })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
/*
第一种实现方案
.photo-header ul {
  margin: 0;
  padding: 0;
  background-color: #444;
}
.photo-header li {
  display: inline-block;
}
.photo-header li a {
  display: block;
  color: white;
  text-align: center;
  padding: 10px;
  text-decoration: none;
}*/
.photo-header li {
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  height: 30px;
}

.photo-header ul {
  /*强制不换行*/
  white-space: nowrap;
  overflow-x: auto;
  padding-left: 0px;
  margin: 5;
}

/*下面的图片*/
.photo-list {
  margin-bottom: 55px;
}
.photo-list li {
  list-style: none;
  position: relative;
}

.photo-list li img {
  width: 100%;
  height: 230px;
  vertical-align: top;
}

.photo-list ul {
  padding-left: 0px;
  margin: 0;
}

.photo-list p {
  position: absolute;
  bottom: 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
  font-weight: bold;
  font-size: 16px;
}

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
