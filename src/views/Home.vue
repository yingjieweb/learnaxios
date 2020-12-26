<template>
  <div class="home">
    <img src="../assets/home.png">
    <div class="scan" @click="scan"></div>
  </div>
</template>

<script lang="js">
  export default {
    name: "Home",
    methods: {
      scan() {}
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
</style>
