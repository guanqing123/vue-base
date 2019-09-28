import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member/Member'
import Shopcar from '@/components/Shopcar/Shopcar'
import Search from '@/components/Search/Search'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Member',
      name: 'Member',
      component: Member
    }, {
      path: '/Shopcar',
      name: 'Shopcar',
      component: Shopcar
    }, {
      path: '/Search',
      name: 'Search',
      component: Search
    }, {
      path: '/NewsList',
      name: 'NewsList',
      component: NewsList
    }, {
      path: '/news/detail/:id',
      name: 'NewsDetail',
      component: NewsDetail
    }, {
      path: '/photo/list',
      name: 'PhotoList',
      component: PhotoList
    }, {
      path: '/photo/detail/:id',
      name: 'PhotoDetail',
      component: PhotoDetail
    }, {
      path: '/goods/list/:page',
      name: 'GoodsShow'
    }
  ]
})
