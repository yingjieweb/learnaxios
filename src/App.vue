<template>
  <div id="app">
    <Inputt v-if="currentStatus === 1" @updateStatus="updateStatus"></Inputt>

    <Home v-if="currentStatus === 2"  @updateStatus="updateStatus"></Home>

    <Outputt v-if="currentStatus === 3" :form="form"></Outputt>
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
        currentStatus: 1,
        form: {
          name: '',
          stuId: '',
          gateName: ''
        },
      }
    },
    methods: {
      updateStatus(status, form) {
        this.currentStatus = status
        form && (this.form = form)
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
