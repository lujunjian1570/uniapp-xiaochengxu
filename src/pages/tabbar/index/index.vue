<template>
  <view class="cantainer">
    <view class="box">
      <echarts-pie :obj="cjjl" />
      <uni-badge text="1" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 晨检记录
      cjjl: {
        text: '上报率',
        subtext: '66.7%',
        data: [{
          value: 200,
          name: '已上报'
        }, {
          value: 100,
          name: '未上报'
        }]
      },
      // 出勤统计
      cqtj: {
        title: '出勤统计',
        x: ['到岗', '轮休', '病假', '事假'],
        data: [130, 89, 35, 95]
      },
      // 农残检测
      ncjc: {
        title: '合格率',
        percent: '80%',
        data: [{
          value: 400,
          name: '合格'
        }, {
          value: 100,
          name: '不合格'
        }]
      },
      // 卫生检查
      wsjc: {
        title: '合格率',
        percent: '55%',
        data: [{
          value: 600,
          name: '合格'
        }, {
          value: 500,
          name: '不合格'
        }]
      },
      // 日常消费统计
      rcxftj: {
        title: '上报率',
        percent: '9%',
        data: [{
          value: 10,
          name: '已上报'
        }, {
          value: 100,
          name: '未上报'
        }]
      },
      // 消毒方式排行榜
      xdfsph: {
        title: '消毒方式排行榜',
        x: ['酒精', '红外线', '电离辐射', '高温蒸煮', '紫外线'],
        data: [137, 111, 35, 155, 120]
      },
      // 废弃物处理统计
      fqwcltj: {
        title: '上报率',
        percent: '83.3%',
        data: [{
          value: 250,
          name: '已上报'
        }, {
          value: 50,
          name: '未上报'
        }]
      },
      // 垃圾处理统计
      ljcltj: {
        title: '垃圾处理统计',
        x: ['干垃圾', '湿垃圾', '可回收', '有害'],
        data: [110, 99, 45, 65]
      }
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
