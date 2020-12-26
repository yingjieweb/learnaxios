<template>
  <div class="home">
    <img src="../assets/home.png">
    <div class="scan" @click="scan"></div>
  </div>
</template>

<script lang="js">
  // import wx from 'weixin-jsapi'

  export default {
    name: "Home",
    methods: {
      // async scan() {
      //   let url = location.href.split("#")[0]
      //   const {data} = await getSign(url) //http://yingjiesongi.gitee.io/gate-code/
      //   wx.config({
      //     debug: false,// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      //     appId: data.appId,// 必填，公众号的唯一标识
      //     timestamp: data.timestamp,  // 必填，生成签名的时间戳
      //     nonceStr: data.nonceStr,// 必填，生成签名的随机串
      //     signature: data.signature,// 必填，签名
      //     jsApiList: ['checkJsApi', 'scanQRCode']// 必填，需要使用的JS接口列表，所有JS接口列表
      //   })
      //   wx.error(function (res) {
      //     alert("出错了：" + res.errMsg)//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
      //   })
      //   wx.ready(() => {
      //     wx.checkJsApi({
      //       jsApiList: ['scanQRCode'],
      //       success() {
      //         wx.scanQRCode({
      //           needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      //           scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
      //           success(res) {
      //             var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
      //             console.log(result)
      //           }
      //         })
      //       }
      //     })
      //   })
      // },
      scan() {}
    }
  }
</script>

<style scoped>
  .home {
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
