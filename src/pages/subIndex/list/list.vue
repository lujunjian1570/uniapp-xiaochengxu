<template>
  <view class="wrap">
    <mz-network-error />
    <!--<button
      type="default"
      @click="goTo"
    >
      跳转
    </button>
    <input
      v-model="text"
      placeholder="请输入数据"
    >
    <button @click="submit">
      提交
    </button>
    <view class="box">
      <view
        v-for="(item, index) in list"
        :key="index"
        class="item"
      >
        {{ `${index + 1}、${item.text}` }}
      </view>
    </view>-->

    <view
      v-for="(item, index) in list"
      :key="index"
      class="item"
    >
      {{ item }}
    </view>
    <uni-load-more :status="more" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      list: [
        /* {
            text: '测试数据'
          }*/
      ],
      current: 0,
      pageSize: 10,
      total: 0,
      more: 'loading'
    }
  },
  onLoad() {
    // this.getData()
    let routes = getCurrentPages() // 获取当前打开过的页面路由数组
    let curRoute = routes[routes.length - 1].route // 获取当前页面路由，也就是最后一个打开的页面路由
    console.log(curRoute)

    this.getList()
  },
  onPullDownRefresh() {
    console.log('refresh')
    this.current = 0
    this.getList()
  },
  onReachBottom() {
    console.log('bottom')
    this.getList()
  },
  methods: {
    getList() {
      this.current++
      if(this.current === 1) {
        this.more = 'loading'
      }
      // 模拟调用接口
      setTimeout(() => {
        this.total = 2
        if(this.total >= this.current) {
          if(this.current === 1) {
            this.list = []
          }
          if(this.current === this.total) {
            this.more = 'noMore'
          }
          for (let i = 0; i < 10; i++) {
            this.list.push(i)
          }
        }else { // 无数据
          this.more = 'noMore'
        }
        uni.stopPullDownRefresh()
      }, 1000)
    },
    goTo() {
      uni.navigateTo({
        url: '/pages/subIndex/list/list'
      })
    },
    /**
       * 提交数据
       */
    submit() {
      if(!this.text) {
        this.$utils.showToast('请输入数据')
        return
      }
      // this.list.push({
      //   value: this.text
      // })
      // this.text = ''

      this.$http.post(this.$api.submit, { text: this.text }).then(res => {
        console.log(res)
        this.text = ''
        this.getData()
      })
    },
    /**
       * 获取数据
       */
    getData() {
      this.$http.post(this.$api.getData).then(res => {
        this.list = res.data.reverse()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap{
    display: flex;
    flex-direction: column;
    /* padding: 30rpx; */
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
    .item{
      padding: 50rpx 30rpx;
      border-bottom: 1rpx solid #eee;
    }
  }
</style>
