<template>
    <div class="list">
        <nav-bar title="图文分享" />

        <!--  引入返回导航  -->
        <div class="photo-header">
            <ul>
              <li>
                <a href="">标题1</a>
              </li>
              <li>
                <a href="">标题2</a>
              </li>
              <li>
                <a href="">标题3</a>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'photo-list'
}
</script>

<style scoped>
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
  padding: 16px;
  text-decoration: none;
}
.photo-header li a:hover {
  cursor: pointer;
  background-color: #888;
}
</style>
