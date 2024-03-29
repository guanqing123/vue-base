// es6 Module

// 整个项目的入口文件
/*import App from './App.js'
import Vue from './vue.js'

import {num1,num2,add} from "./App.js";

console.log(num1);
console.log(num2);
add(3, 5);

new Vue({
    el:'#app',
    components:{
        App
    },
    template:`
        <App />
    `
});*/

import Vue from './Vue.js';

// 整个模块加载
import * as obj from './App.js';

console.log(obj.num1);
console.log(obj.num2);
console.log(obj.add(3, 5));

new Vue({
    el:'#app',
    components:{
        App:obj.default
    },
    template:`
        <App />
    `
});
