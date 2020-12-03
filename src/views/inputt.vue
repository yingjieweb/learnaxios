<template>
  <div class="login">
    <div class="title">
      <span>生成通行许可</span>
    </div>
    <div class="inputItem">
      <span>姓名</span><br>
      <input type="text" v-model="form.name">
    </div>
    <div class="inputItem">
      <span>学号</span><br>
      <input type="text" v-model="form.stuId">
    </div>
    <div class="inputItem">
      <span>入门名(格式：xx校区xx门)</span><br>
      <input type="text" v-model="form.gateName">
    </div>
    <div class="preview" @click="showCode">预览</div>
    <div class="alert">本链接仅供学习交流请勿用于非法用途</div>
  </div>
</template>

<script lang="js">
  export default {
    name: "inputt",
    data() {
      return {
        form: {
          name: '小老弟',
          stuId: '1201238',
          gateName: '南湖校区西门'
        }
      }
    },
    methods: {
      showCode() {
        this.$emit('showCode', this.form)
      }
    }
  }
</script>

<style scoped>
  .login {
    padding: 0 30px;
  }

  .title {
    color: #90CAF8;
    font-size: 28px;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 40px;
  }

  .inputItem > span {
    color: #666666;
    font-size: 16px;
  }

  .inputItem > input {
    padding: 10px 0;
    font-size: 18px;
    color: #666666;
    outline: none;
    width: 100%;
    border: none;
    border-bottom: 2px solid #666666;
    margin-top: 10px;
    margin-bottom: 50px;
  }

  .inputItem > input:hover {
    border-bottom: 2px solid #FF4282;
  }

  .preview {
    width: 100%;
    height: 40px;
    font-size:18px;
    line-height: 40px;
    text-align: center;
    color: #FBF6F6;
    background-color: #FF4282;
  }

  .alert {
    color: #666666;
    font-size: 18px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }
</style>
