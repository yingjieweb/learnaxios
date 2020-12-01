<template>
  <div id="app">
    <div class="login">
      <div class="title">
        <h1>生成通行许可</h1>
      </div>
      <div class="inputItem">
        <label>姓名：<br>
          <input type="text" v-model="form.name">
        </label>
      </div>
      <div class="inputItem">
        <label>学号：<br>
          <input type="text" v-model="form.stuId">
        </label>
      </div>
      <div class="inputItem">
        <label>入门名（格式：xx校区xx门）<br>
          <input type="text" v-model="form.gateName">
        </label>
      </div>
      <div class="preview">
        <button>预览</button>
      </div>
    </div>
    <div class="code">
      <div class="header"></div>
      <div class="content"></div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        form: {
          name: '',
          stuId: '',
          gateName: ''
        },
        codeVisible: false
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .login, .code {
    height: 100vh;
    border: 1px solid red;
  }

  .inputItem {
    border: 1px solid red;
  }
</style>
