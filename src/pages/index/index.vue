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
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  onLoad() {
    this.$store.dispatch('home/setUserInfo',{ userName: 'admin' })
  },
  methods: {
    goTo() {
      uni.navigateTo({
        url: '/pages/test/test'
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
