<template>
  <canvas
    id="canvasColumn"
    canvas-id="canvasColumn"
    class="charts"
  />
</template>

<script>
/**
   * 柱状图组件
   * @author: Lujunjian
   * @createTime: 2021-1-28 16:44:17
   */

import uCharts from '@/plugins/ucharts/u-charts.min.js'
export default {
  props: {
    /* obj: {
        rotate: false, // true：横向的柱状图
        title: '出勤统计',
        categories: ['到岗', '轮休', '病假', '事假'],
        series: [{
          'data': [45, {
            'value': 20,
            'color': '#f04864'
          }, 143, 34]
        }]
      } */
    obj: {}
  },
  data() {
    return {
      cWidth: '',
      cHeight: '',
      pixelRatio: 1,
      serverData: ''
    }
  },
  mounted() {
    // this.pixelRatio = uni.getSystemInfoSync().pixelRatio;
    this.cWidth = uni.upx2px(375)
    this.cHeight = uni.upx2px(300)
    this.getServerData()
  },
  methods: {
    getServerData() {
      this.showColumn(this.obj)
    },
    showColumn(chartData) {
      new uCharts({
        $this: this,
        canvasId: 'canvasColumn',
        type: 'column',
        legend: {
          show: false
        },
        fontSize: 10,
        background: '#FFFFFF',
        pixelRatio: this.pixelRatio,
        animation: true,
        rotate: chartData.rotate ? true : false,
        categories: chartData.categories,
        series: chartData.series,
        xAxis: {
          // 不绘制Y轴网格(即默认绘制网格)
          disableGrid: true,
          // 坐标轴刻度线是否显示
          calibration: false
        },
        yAxis: {
          // 不绘制Y轴网格(即默认绘制网格)
          disableGrid: true,
          data: [{
            calibration: true,
            position: chartData.rotate ? 'right' : 'left',
            format: val => {
              return val
            }
          }]
        },
        // dataLabel: true,
        width: this.cWidth * this.pixelRatio,
        height: this.cHeight * this.pixelRatio,
        extra: {
          column: {
            width: this.cWidth * this.pixelRatio * 0.3 / chartData.categories.length
          }
        }
      })
    }
  }
}
</script>

<style>
  /* 样式的width和height一定要与定义的cWidth和cHeight相对应 */
  .charts {
    width: 375rpx;
    height: 300rpx;
    background-color: #fff;
  }
</style>
