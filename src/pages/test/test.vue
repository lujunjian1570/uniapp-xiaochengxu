<template>
  <view class="content">
    <image
      class="logo"
      src="@/static/logo.png"
    />
    <view>
      <view class="title">
        NODE_ENV：{{ NODE_ENV }}
      </view>
      <view class="title">
        BASE_API：{{ BASE_API }}
      </view>
      <view class="title">
        userName：{{ userName }}
      </view>
      <view class="title">
        userName：{{ userName1 }}
      </view>
      <view class="title">
        userName：{{ userName2 }}
      </view>
      <view class="title">
        userName：{{ userInfo.userName }}
      </view>
      <view class="title">
        {{ str }}
      </view>
      <view class="iconfont iconbrowse" />
      <button
        type="default"
        @click="clear"
      >
        清除缓存
      </button>
    </view>
  </view>
</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'
export default {
  data() {
    return {
      NODE_ENV: process.env.NODE_ENV,
      BASE_API: process.uniEnv.BASE_API,
      userName1: this.$store.getters.userName,
      userName2: this.$store.state.home.userInfo.userName,
      str: ''
    }
  },
  computed: {
    ...mapState('home',[
      'userInfo'
    ]),
    ...mapGetters([
      'userName'
    ])
  },
  onLoad() {
    console.log(getApp().globalData)
    console.log(process.env)
    console.log(this.userInfo)

    // this.$utils.test()

    /* this.$http.post(this.$api.get).then(res => {
      this.str = res.str
    }) */
  },
  methods: {
    clear() {
      uni.clearStorageSync('key')
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
  .title{
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
