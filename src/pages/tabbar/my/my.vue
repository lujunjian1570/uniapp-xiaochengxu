<template>
  <view class="content">
    <view style="width: 200rpx; height: 200rpx;">
      <open-data type="userAvatarUrl" />
    </view>
    <open-data type="userNickName" />
    <button
      class="login-out"
      @click="loginOut"
    >
      退出
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    loginOut() {
      uni.removeStorageSync('userInfo')
      uni.reLaunch({
        url: '/pages/login/login'
      })
    }

  }
}
</script>

<style lang="scss" scoped>
  .content{
    font-size: 28rpx;
    padding: 30rpx;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login-out{
      margin-top: 100rpx;
      width: 80%;
      background: $uni-color-primary;
      color: #fff;
      border: 0;
      border-radius: 100upx;
      font-size: 32upx;
    }
  }
</style>
