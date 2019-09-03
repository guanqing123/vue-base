import Vue from 'vue';
import App from './App.vue';

//组件 .vue

new Vue({
    el:'#app',

    // vue2.0新增

    //使用虚拟DOM来渲染节点提升性能,因为它是基于js计算
    //通过使用createElement(h)来创建dom节点,
    //createElement(h)是render的核心方法
    //vue编译过程template里面的节点解析成虚拟DOM
    render:c=>c(App)
/*    components: {
        App
    },
    template:`<App />`*/
})