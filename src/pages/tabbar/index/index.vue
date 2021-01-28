<template>
  <view class="cantainer">
    <view style="height: 1500rpx;">
      1
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  onLoad() {
    this.getStr()
  },
  methods: {
    async getStr() {
      const res = await this.$http.post(this.$api.get)
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
  .box{
    width: 375rpx;
    height: 300rpx;
  }
</style>
