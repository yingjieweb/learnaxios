import Vue from 'vue'
import App from './App.vue'
import axios from  'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//1.axios的基本使用
axios({
  url:'http://123.207.32.32:8000/api/v1/home/multidata',
  method:'get'
}).then(res => {
  console.log(res)
})
axios({
  url:'http://123.207.32.32:8000/api/v1/home/data',
  params:{  //专门针对get请求的参数拼接
    type:'pop',
    page:1
  }
}).then(res => {
  console.log(res)
})


//2.axios发送并发请求
axios.all([axios({
  url:'http://123.207.32.32:8000/api/v1/home/multidata'
}),axios({
  url:'http://123.207.32.32:8000/api/v1/home/data',
  params:{  //专门针对get请求的参数拼接
    type:'sell',
    page:5
  }
})]).then(results => {
  console.log(results);
})

//3.axios发送并发请求,使用axios.spread可将数组[res1，res2]展开为res1，res2
axios.all([axios({
  url:'http://123.207.32.32:8000/api/v1/home/multidata'
}),axios({
  url:'http://123.207.32.32:8000/api/v1/home/data',
  params:{  //专门针对get请求的参数拼接
    type:'sell',
    page:5
  }
})]).then(axios.spread((res1,res2) => {
  console.log(res1);
  console.log(res2);
}))

//4.axios的相关配置信息
axios.all([axios({
  baseURL:'http://123.207.32.32:8000/api/v1',
  timeout:5000,
  url:'/home/multidata'
}),axios({
  baseURL:'http://123.207.32.32:8000/api/v1',
  url:'/home/data',
  timeout:5000,
  params:{  //专门针对get请求的参数拼接
    type:'sell',
    page:5
  }
})]).then(axios.spread((res1,res2) => {
  console.log(res1);
  console.log(res2);
}))

//5.axios的相关配置信息的改进
axios.defaults.baseURL ='http://123.207.32.32:8000/api/v1'
axios.defaults.timeout = 5000
axios.all([axios({
  url:'/home/multidata'
}),axios({
  url:'/home/data',
  params:{  //专门针对get请求的参数拼接
    type:'sell',
    page:5
  }
})]).then(axios.spread((res1,res2) => {
  console.log(res1);
  console.log(res2);
}))
