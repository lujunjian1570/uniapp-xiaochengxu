<template>
  <view>
    <image src="@/static/images/tabbar/index.png" />
    <navigator url="../../subIndex/list/list">
      跳转到分包
    </navigator>
    <button @click="goTo">
      js形式跳转到分包页面
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    goTo() {
      uni.navigateTo({ url:'../../subIndex/list/list' })
    }
  }
}
</script>

<style lang="scss">
  image{
    width: 50rpx;
    height: 50rpx;
  }
</style>
