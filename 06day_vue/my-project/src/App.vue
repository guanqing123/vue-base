<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="{name:'HelloWorld'}">HelloWorld</router-link>
    <router-link :to="{name:'index'}">首页</router-link>
    <router-link :to="{name:'music'}">音乐</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
