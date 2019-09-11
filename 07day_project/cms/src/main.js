// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 全局样式
import '../static/css/global.css'

// axios 开始
import Axios from 'axios'
// axios 结束
// 引入自己的插件安装器
import Installer from '@/plugins/installer'

// mint-ui 开始
// 引入css
import 'mint-ui/lib/style.css'
// 引入Mint-ui
import MintUI from 'mint-ui'
// 安装插件
Vue.use(MintUI) // 里面其实做的就是注册所有的全局组件,和给Vue.prototype挂载一些对象,方便你使用  组件内的this.xxx就能用了
// mint-ui 结束

// 安装插件
Vue.use(Installer)

Vue.config.productionTip = false
// 给Vue的原型挂载 $axios 属性
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'https://wx.hongyancloud.com/wxDev'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
