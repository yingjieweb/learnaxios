<template>
  <div class="code">
    <div class="title">东北大学通行验证</div>
    <div class="arrow">
      <div class="wrapper">
        <div class="left"></div>
        <div class="right"></div>
        <div class="axis"></div>
        <!--<img src="../../src/assets/arrow.png" alt="">-->
      </div>
    </div>
    <div class="timer">时间：{{currentTime}}</div>
    <div class="info">
      <div><span class="key">学工号</span>：<span>{{form.stuId}}</span></div>
      <div><span class="key">姓名</span>：<span>{{form.name}}</span></div>
      <div><span class="key">验证位置</span>：<span>{{form.gateName}}</span></div>
      <div><span class="key">进出状态</span>：<span>进入</span></div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "outputt",
    props: {
      form: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    created() {
      this.getCurrentTime()
    },
    data() {
      return {
        currentTime: ''
      }
    },
    methods: {
      getCurrentTime() {
        let date = new Date()
        let YY = date.getFullYear()
        let MM = parseInt(date.getMonth()) < 10 ? '0' + date.getMonth() : date.getMonth()
        let DD = parseInt(date.getDate()) < 10 ? '0' + date.getDate() : date.getDate()
        let hh = parseInt(date.getHours()) < 10 ? '0' + date.getHours() : date.getHours()
        let mm = parseInt(date.getMinutes()) < 10 ? '0' + date.getMinutes() : date.getMinutes()
        let ss = parseInt(date.getSeconds()) < 10 ? '0' + date.getSeconds() : date.getSeconds()

        this.currentTime = `${YY}-${++MM}-${DD} ${hh}:${mm}:${ss}`
      }
    }
  }
</script>

<style scoped>
  .title {
    color: #046635;
    font-size: 34px;
    text-align: center;
    margin-top: 16px;
  }

  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow > .wrapper {
    width: 240px;
    height: 240px;
    margin-top: 40px;
    background-color: #046635;
    border-radius: 50%;
    animation: bump 0.98s linear infinite;
    position: relative;
  }

  @keyframes bump {
    0%, 100% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .arrow > .wrapper > .left {
    height: 30px;
    width: 110px;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    top: 75px;
    left: 36px;
    transform: rotateZ(-45deg);
  }

  .arrow > .wrapper > .right {
    height: 30px;
    width: 110px;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    top: 75px;
    right: 36px;
    transform: rotateZ(45deg);
  }

  .arrow > .wrapper > .axis {
    width: 30px;
    height: 130px;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    top: 70px;
    left: 105px;
  }

  .timer {
    color: #046635;
    margin-top: 16px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 20px;
  }

  .info {
    height: 180px;
    padding: 20px;
    background-color: #046635;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info > div {
    color: #FBF6F6;
    font-size: 20px;
  }

  .info .key {
    width: 90px;
    display: inline-block;
    text-align: justify;
    text-align-last: justify;
  }
</style>
