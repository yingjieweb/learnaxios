<template>
  <div class="home">
    <img src="../assets/banner.png">
    <img src="../assets/notice.png">
    <img src="../assets/notice-item.png" v-for="index of 4" :key="index">
    <img class="tabbar" src="../assets/tabbar.png">
    <div class="scan" @click="scan"></div>
  </div>
</template>

<script lang="js">
  export default {
    name: "Home",
    methods: {
      scan() {
        // 唤起手机扫码功能 -> 扫描完毕后 emit updateStatus 事件
        this.$emit('updateStatus', 3)
      }
    }
  }
</script>

<style scoped>
  .home {
    width: 100%;
    position: relative;
  }

  .scan {
    position: absolute;
    left: 0;
    top: 0;
    width: 70px;
    height: 52px;
  }

  img {
    width: 100%;
  }

  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>
