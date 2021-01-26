<template>
  <view class="content">
    <image
      class="logo"
      src="@/static/logo.png"
    />
    <button
      type="default"
      @click="goTo"
    >
      跳转
    </button>
    <view v-if="show">
      显示了
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  onLoad() {
    if(uni.getStorageSync('key')) {
      this.show = true
    }

    uni.setStorageSync('key', 'value')

    /* uni.getProvider({
        service: 'oauth',
        success: function (res) {
            console.log(res.provider)
            if (~res.provider.indexOf('weixin')) {
                uni.login({
                    provider: 'weixin',
                    success: function (loginRes) {
                        console.log(loginRes);
                    }
                })
                uni.getUserInfo({
                    provider: 'weixin',
                    success: function (loginRes) {
                        console.log(loginRes);
                    }
                })
            }
        }
    }) */

    // this.$utils.toast(this.$store.getters.userName)
    this.$store.dispatch('user/setUserInfo',{ userName: 'admin' })
    // this.getInfo()
  },
  methods: {
    goTo() {
      uni.navigateTo({
        url: '/pages/test/test'
      })
    },
    getInfo() {
      uni.getUserInfo({
        provider: 'weixin',
        success: function(res) {
          /* {
            cloudID: "41_2P25YU8g7V7a_zKyUecAnCnTaYxPtk1kS0UrCGpfylR10P3U2ep46HpKQF0",
            encryptedData: "kahQewLB90nqSdq/73t/GGJsn3MAsRzR9WFDt1EiwnefYMcyQ0c3RJZrT6pVpTZg5LIo3fqsTbcUlKxdacjIybaGkP45ipD2+POIQNbcxovWlo6bh1yGQZhecEpe1Up1sq4OEzOHhTCY2itW0Hpv4gsgrnpZC4dCoiyZCsvnnz7Uoos3Gu08zJq8v333cIxbLfpFOG8c1LhBqAlL1KMdyqe7YNz7S3k9sxH8zKPaqj3N+NVIH8cvaE+a0orfUbQBld8ejpQjEh1sMc+kAj562FjE6ZHleyE90A9ZyC1Cq4aJPgeBePszIo2DC1JZ1pOoxqggOXDzcKsMHEyPpEQ4AQknsTxBSFMmhGVSZy6dD546Wb/0SYkT6eqhOUcjoV6uvLZkOBO78Ruy4sYFKfUXOMawRO4nj5kzrSiIb2JIHClpCAI+muKw6w24QacTgA8SXiJ2Shp1PqJV6xvdtYi6IgzD9wpVQEt3GSoY/q8cWDI=",
            errMsg: "getUserInfo:ok",
            iv: "/o6v+HSeGDm8ggOJN0RmGQ==",
            rawData: '{"nickName":"A君剑","gender":1,"language":"zh_CN","city":"Tongzhou","province":"Beijing","country":"China","avatarUrl":"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ3DBdN3BQVjkH2uiawa6eEXGhWAxyDzVNZAlCGmKicAXBSRb600OQdkheAFEnzf6icIjD5NggC0R3Zw/132"}',
            signature: "da8f522980fd2e47b4150d67a110ccf59f84cdca",
            userInfo:{
              avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ3DBdN3BQVjkH2uiawa6eEXGhWAxyDzVNZAlCGmKicAXBSRb600OQdkheAFEnzf6icIjD5NggC0R3Zw/132",
              city: "Tongzhou",
              country: "China",
              gender: 1,
              language: "zh_CN",
              nickName: "A君剑",
              province: "Beijing"
            }
          } */
          console.log(res)
          uni.login({
            success:function(res) {
              /* {
                code: "081npoFa1bz3lA0T4IFa1Of0uL2npoFT",
                errMsg: "login:ok"
              } */
              console.log(res)
            }
          })
        }
      })
    }
  }
}
</script>

<style>
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo{
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx auto;
  }
</style>
