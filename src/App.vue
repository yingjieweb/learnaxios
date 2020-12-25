<template>
  <div id="app">
    <Home></Home>

    <Inputt v-if="codeVisible" @showCode="showCode"></Inputt>
    <Outputt v-else :form="form"></Outputt>
  </div>
</template>

<script>
  import Home from "./views/Home"
  import Inputt from './views/Inputt'
  import Outputt from './views/Outputt'

  export default {
    name: 'app',
    components: {
      Home,
      Inputt,
      Outputt
    },
    data() {
      return {
        codeVisible: true,
        form: {
          name: '',
          stuId: '',
          gateName: ''
        },
      }
    },
    methods: {
      showCode(form) {
        this.codeVisible = false
        this.form = form
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

  #app {
    max-width: 420px;
  }
</style>
