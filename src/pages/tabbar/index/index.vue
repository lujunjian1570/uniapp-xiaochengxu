<template>
  <view class="cantainer">
    <view class="top">
      食安管理平台
    </view>
    <view class="box">
      <view class="item">
        <view class="title">
          晨检记录
        </view>
        <ucharts-ring :obj="cjjl" />
      </view>
      <view class="item">
        <view class="title-center">
          出勤统计
        </view>
        <ucharts-column :obj="cqtj" />
      </view>
    </view>
    <view class="bottom">
      <view class="title">
        投诉统计
      </view>
      <view class="cont">
        <view class="item">
          <view class="num">
            10600
          </view>
          投诉总数
        </view>
        <view class="item">
          <view class="num">
            200
          </view>
          未处理总数
        </view>
        <view class="item">
          <view class="num">
            1000
          </view>
          已处理总数
        </view>
      </view>
    </view>
    <!--<view class="box">
      <view class="item">
        <ucharts-ring :obj="ncjc" />
      </view>
      <view class="item">
        <ucharts-ring :obj="wsjc" />
      </view>
    </view>
    <view class="box">
      <view class="item">
        <ucharts-ring :obj="rcxftj" />
      </view>
      <view class="item">
        <ucharts-column :obj="xdfsph" />
      </view>
    </view>
    <view class="box">
      <view class="item">
        <ucharts-ring :obj="fqwcltj" />
      </view>
      <view class="item">
        <ucharts-column :obj="ljcltj" />
      </view>
    </view>
    <view style="height: 1000rpx;">
      <open-data type="userNickName" />
      <view style="width: 200rpx; height: 200rpx;">
        <open-data type="userAvatarUrl" />
      </view>
      <uni-rate value="2" />
    </view>-->
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 晨检记录
      cjjl: {
        title: '上报率',
        subtitle: '66.7',
        series: [{
          data: 200,
          name: '已上报'
        }, {
          data: 100,
          name: '未上报'
        }]
      },
      // 出勤统计
      cqtj: {
        // rotate: true,
        title: '出勤统计',
        categories: ['到岗', '轮休', '病假', '事假'],
        series: [{
          'data': [
            1, {
              'value': 61,
              'color': '#f04864'
            },
            72, 34
          ]
        }]
      },
      // 农残检测
      ncjc: {
        title: '合格率',
        subtitle: '80',
        series: [{
          data: 400,
          name: '合格'
        }, {
          data: 100,
          name: '不合格'
        }]
      },
      // 卫生检查
      wsjc: {
        title: '合格率',
        subtitle: '55',
        series: [{
          data: 600,
          name: '合格'
        }, {
          data: 500,
          name: '不合格'
        }]
      },
      // 日常消费统计
      rcxftj: {
        title: '上报率',
        subtitle: '9',
        series: [{
          data: 10,
          name: '已上报'
        }, {
          data: 100,
          name: '未上报'
        }]
      },
      // 消毒方式排行榜
      xdfsph: {
        title: '消毒方式排行榜',
        categories: ['酒精', '红外线', '电离辐射', '高温蒸煮', '紫外线'],
        series: [{ data: [137, 111, 35, 155, 120] }]
      },
      // 废弃物处理统计
      fqwcltj: {
        title: '上报率',
        subtitle: '83.3',
        series: [{
          data: 250,
          name: '已上报'
        }, {
          data: 50,
          name: '未上报'
        }]
      },
      // 垃圾处理统计
      ljcltj: {
        title: '垃圾处理统计',
        categories: ['干垃圾', '湿垃圾', '可回收', '有害'],
        series: [{ data: [110, 99, 45, 65] }]
      }
    }
  },
  onLoad() {
    // this.getStr()
    // 柱状图数据
    let d = [{
        key: '到岗',
        value: 1
      }, {
        key: '轮休',
        value: 86
      }, {
        key: '病假',
        value: 55
      }, {
        key: '事假',
        value: 38
      }],
      categories = [],
      series = [{
        data: []
      }],
      colors = ['#0088FF', '#FFAD00', '#21DE99', '#FF4C51', '#00C2FF']
    d.map((item, index) => {
      categories.push(item.key)
      series[0].data.push({
        value: item.value,
        color: colors[index]
      })
    })

    this.cqtj = {
      title: '出勤统计',
      categories: categories,
      series: series
    }
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
  .top{
    padding: 160rpx 0 200rpx 0;
    background-color: $uni-color-primary;
    color: #fff;
    text-align: center;
    font-size: 50rpx;
  }
  .box{
    display: flex;
    padding: 10px 0 4rpx 0;
    .item{
      width: 375rpx;
      .title{
        padding: 10rpx 0 10px 20rpx;
        font-size: 28rpx;
        font-weight: bold;
        color: #666;
      }
      .title-center{
        padding: 40rpx 0 0 0;
        font-size: 26rpx;
        color: #666;
        text-align: center;
      }
    }
  }
  .bottom{
    border-top: 1px solid #eee;
    .title{
      padding: 20rpx;
      font-size: 28rpx;
      font-weight: bold;
      color: #666;
    }
    .cont{
      display: flex;
      padding: 0 10rpx;
      .item{
        flex: 1;
        padding: 20rpx 0;
        margin: 0 10rpx;
        text-align: center;
        color: #fff;
        border-radius: 10rpx;
        background: $uni-color-primary;
        .num{
          font-size: 40rpx;
          padding-bottom: 10rpx;
        }
      }
      .item:nth-child(2){
        background: #ffad00;
      }
      .item:nth-child(3){
        background: #00cf83;
      }
    }
  }
</style>
