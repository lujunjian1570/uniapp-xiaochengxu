<template>
  <view />
</template>

<script>
export default {
  data() {
    return {

    }
  },
  onLoad() {
    if(uni.getStorageSync('userInfo')) {
      uni.switchTab({
        url: '/pages/tabbar/index/index'
      })
    }else {
      uni.reLaunch({
        url: '/pages/login/login'
      })
    }
  }
}
</script>
