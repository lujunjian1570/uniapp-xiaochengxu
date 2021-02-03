<template>
  <view class="nx-box">
    <u-navbar
      :is-back="false"
      :background="{}"
      :border-bottom="false"
      title="登录"
    />
    <image
      src="@/static/images/login/login.png"
      mode="aspectFit"
      class="nx-logo"
    />
    <view class="nx-title">
      LOGO区域
    </view>
    <view class="nx-form">
      <input
        v-model="login.loginName"
        class="nx-input"
        placeholder-class
        placeholder="请输入手机号"
        maxlength="11"
      >
      <input
        v-model="login.password"
        class="nx-input"
        placeholder-class
        password
        placeholder="请输入密码"
      >
      <view class="nx-label">
        <!--忘记密码？-->
      </view>
      <button
        class="nx-btn"
        @tap="loginFunction"
      >
        立即登录
      </button>
      <!--<navigator
        url="./register"
        hover-class="none"
        class="nx-label"
      >
        还没有账号？点此注册.
      </navigator>-->
    </view>
  </view>
</template>

<script>
export default {
  onShow() {
    wx.hideHomeButton()
  },
  data() {
    return {
      login: {
        loginName: '18618334572', // 手机号码
        password: '111111' // 密码
      },
    }
  },
  methods: {
    // 当前登录按钮操作
    loginFunction() {
      if (!this.login.loginName) {
        this.$utils.toast('请输入手机号')
        return
      }
      if (!this.$validates.PhoneNum(this.login.loginName)) {
        this.$utils.toast('请输入正确手机号')
        return
      }
      if (!this.login.password) {
        this.$utils.toast('请输入密码')
        return
      }

      this.$utils.toast('登录成功')
      this.$store.dispatch('user/setUserInfo',1)
      setTimeout(() => {
        uni.switchTab({
          url: '/pages/tabbar/index/index'
        })
      },1000)

      /* this.$http.post(this.$api.login,{
        Username: this.login.loginName,
        password: this.login.password
      }).then(res => {
        this.$utils.toast(JSON.stringify(res))
        this.$store.dispatch('user/setUserInfo',res)
        setTimeout(() => {
          uni.switchTab({
            url: '/pages/tabbar/index/index'
          })
        },1000)
      }) */
      // this.$utils.toast('登录成功')
    }
  }
}
</script>

<style lang="scss" scoped>
  .nx-box{
    padding: 0 100upx;
    position: relative;
  }
  .nx-logo{
    width: 100%;
    height: 310upx;
  }
  .nx-title{
    position: absolute;
    top: 0;
    line-height: 360upx;
    font-size: 68upx;
    color: #fff;
    text-align: center;
    width: 100%;
    margin-left: -100upx;
  }
  .nx-form{
    margin-top: 300upx;
  }
  .nx-input{
    background: #e2f5fc;
    margin-top: 30upx;
    border-radius: 100upx;
    padding: 20upx 40upx;
    font-size: 28upx;
    box-sizing: content-box;
  }
  .nx-label{
    padding: 60upx 0;
    text-align: center;
    font-size: 30upx;
    color: #a7b6d0;
  }
  .nx-btn{
    background: $uni-color-primary;
    color: #fff;
    border-radius: 100upx;
    font-size: 32upx;
  }
  .nx-btn::after{
    border: 0;
  }
  /* 按钮点击效果 */
  /* .nx-btn.button-hover{
    transform: translate(1upx, 1upx);
  } */
</style>
