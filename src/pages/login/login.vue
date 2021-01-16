<template>
  <form
    class="loginView"
    @submit="bindLogin"
  >
    <view class="input-view">
      <view class="label-view">
        <text class="label">
          账号
        </text>
      </view>
      <input
        class="input"
        type="text"
        placeholder="请输入用户名"
        name="nameValue"
      >
    </view>
    <view class="input-view">
      <view class="label-view">
        <text class="label">
          密码
        </text>
      </view>
      <input
        class="input"
        type="password"
        placeholder="请输入密码"
        name="passwordValue"
      >
    </view>
    <view class="button-view">
      <button
        type="default"
        class="login"
        hover-class="hover"
        formType="submit"
      >
        登录
      </button>
    </view>
  </form>
</template>

<script>
/* import {
		mapState,
		mapMutations
	} from 'vuex' */

export default {
  data() {
    return {}
  },
  methods: {
    /* bindLogin(e) {
				this.login({
					avatarUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/nav_menu/10.jpg',
					token: 'user123456',
					userName: 'uni-app'
				});
				uni.navigateBack({
					delta: 1
				});
			},
			...mapMutations(['login']) */
  }
}
</script>

<style lang="scss">
.loginView{
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 750upx;
  padding-top: 30upx;
}
.input-view{
  border-bottom-style: solid;
  border-bottom-width: 3upx;
  border-bottom-color: #ddd;
  background-color: #fff;
  flex-direction: row;
  width: 750upx;
  padding: 20upx 20upx;
  box-sizing: border-box;
}
.label-view{
  width: 100upx;
  height: 60upx;
  align-items: center;
  margin-right: 30upx;
}
.label{
  flex: 1;
  line-height: 60upx;
  font-size: 38upx;
  color: #555;
  text-align: left;
}
.input{
  flex: 1;
  height: 60upx;
  font-size: 38upx;
  align-items: center;
}
.button-view{
  width: 750upx;
  margin-top: 50upx;
  padding: 0 20upx;
  box-sizing: border-box;
  flex-direction: column;
}
button{
  width: 710upx;
  height: 80upx;
  line-height: 80upx;
  text-align: center;
  font-size: 38upx;
}
button.login{
  background-color: #fb6f18;
  color: #fff;
}
button.register{
  margin-top: 30upx;
  color: #fb6f18;
  background-color: #fff;
  border-color: #fb6f18;
  border-width: 2upx;
}
.register.hover,
.login.hover{
  opacity: .6;
}

</style>
