<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="content">
      <router-view />
    </div>
    <ul class="nav">
      <li>
        <icon class="nav-icon" name="list"></icon>
        <span>计算</span>
      </li>
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
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 15px;
    padding: 0.3em 0 0.2em;
    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .nav-icon {
        font-size: 25px;
      }
    }
  }
}
</style>
