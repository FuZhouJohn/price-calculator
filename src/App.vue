<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="content">
      <router-view />
    </div>
    <ul class="nav">
      <li>计算</li>
      <li>商品</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      list-style: none;
    }
  }
}
</style>
