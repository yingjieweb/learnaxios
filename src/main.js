import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


import {request} from './network/request'
//封装方式的请求方法
request({url: '/home/multidata'}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
