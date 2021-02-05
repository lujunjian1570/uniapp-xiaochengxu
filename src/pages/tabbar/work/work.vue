<template>
  <view class="wrap">
    <input
      v-model="text"
      placeholder="请输入数据"
    ><button @click="submit">
      提交
    </button>
    <view class="box">
      <view
        v-for="(item, index) in list"
        :key="index"
        class="item"
      >
        {{ `${index + 1}、${item.value}` }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      list: [
        {
          value: '测试数据'
        }
      ]
    }
  },
  onLoad() {
    // this.getData()
  },
  methods: {
    /**
     * 提交数据
     */
    submit() {
      if(!this.text) {
        this.$utils.showToast('请输入数据')
        return
      }
      this.list.push({
        value: this.text
      })
      this.text = ''
      // this.$http.post(this.$api.submit, { text: this.text }).then(res => {
      //   console.log(res)
      //   this.text = ''
      //   this.getData()
      // })
    },
    /**
     * 获取数据
     */
    getData() {
      this.$http.post(this.$api.getData).then(res => {
        this.list = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap{
    display: flex;
    flex-direction: column;
    padding: 30rpx;
    input{
      display: block;
      width: 100%;
      height: 80rpx;
      padding: 0 20rpx;
      line-height: 80rpx;
      font-size: 32rpx;
      color: #333;
      border: 1px solid #eee;
      border-radius: 10rpx;
    }
    button{
      width: 60%;
      margin-top: 50rpx;
      background: $uni-color-primary;
      color: #fff;
      border-radius: 100upx;
      font-size: 32upx;
    }
    .box{
      margin-top: 100rpx;
      line-height: 60rpx;
      .item{
        font-size: 28rpx;
      }
    }
  }
</style>
