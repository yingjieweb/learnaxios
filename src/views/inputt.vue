<template>
  <div class="login">
    <div class="title">
      <h1>生成通行许可</h1>
    </div>

    <form class="search" method="get" action="http://www.baidu.com/s">
      <input name="wd" type="text" required placeholder="众里寻他千百度 —— 百度">
      <button type="submit">111</button>
    </form>

    <div class="inputItem">
      <label>姓名：<br>
        <input type="text" v-model="form.name" required>
      </label>
    </div>
    <div class="inputItem">
      <label>学号：<br>
        <input type="text" v-model="form.stuId" required>
      </label>
    </div>
    <div class="inputItem">
      <label>入门名（格式：xx校区xx门）<br>
        <input type="text" v-model="form.gateName" required>
      </label>
    </div>
    <div class="preview">
      <button @click="showCode">预览</button>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "inputt",
    data() {
      return {
        form: {
          name: '张大彪',
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
    height: 100vh;
    border: 1px solid red;
  }

  .inputItem {
    border: 1px solid red;
  }
</style>
