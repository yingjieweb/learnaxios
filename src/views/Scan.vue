<template>
  <div class="scan">
    <img src="../assets/home.png" alt="">
  </div>
</template>

<script lang="js">
  export default {
    name: "Scan"
  }
</script>

<style scoped>
  .scan {
    position: relative;
    border: 1px solid red;
  }

  .scan::before {
    width: 50px;
    height: 50px;
    z-index: 999;
    display: block;
    border: 1px solid red;
    position: absolute;
    left: 0;
    top: 0;
  }

  img {
    width: 100%;
  }
</style>
