<script>
import '@/env/index.js'
export default {
  onLaunch: function() {
    console.log('App Launch')
    if(uni.getStorageSync('userInfo')) {
      uni.switchTab({
        url: '/pages/tabbar/index/index'
      })
    }else {
      uni.reLaunch({
        url: '/pages/login/login'
      })
    }
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
  /* 全局样式 */
  @import "~@/styles/index";
</style>
