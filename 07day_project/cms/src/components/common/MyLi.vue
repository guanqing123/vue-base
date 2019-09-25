<template>
    <li>
      <slot></slot>
      <div class="icon">
        <slot name="icon"></slot>
      </div>
    </li>
</template>

<script>
export default {
  name: 'my-li'
}
</script>

<style scoped>
  li{
    list-style: none;
    float: left;
    width: 33.333%;
    text-align: center;
  }
  .icon img {
    width: 100%;
  }
</style>
