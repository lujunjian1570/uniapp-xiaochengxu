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
   * obj数据示例：
   * {
      rotate: false, // true：横向的柱状图
      title: '出勤统计',
      categories: ['到岗', '轮休', '病假', '事假'],
      series: [{
        'data': [45, {
          'value': 20,
          'color': '#f04864'
        }, 143, 34]
      }]
    }
   */

import uCharts from '@/plugins/ucharts/u-charts.min.js'
let _self
export default {
  props: {
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
    _self = this
    // _self.pixelRatio = uni.getSystemInfoSync().pixelRatio;
    this.cWidth = uni.upx2px(375)
    this.cHeight = uni.upx2px(300)
    this.getServerData()
  },
  methods: {
    getServerData() {
      _self.showColumn('canvasColumn', this.obj)
    },
    showColumn(canvasId, chartData) {
      new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: 'column',
        // clolrs: ['#f04864', '#2fc25b', '#facc14', '#1890ff', '#8543e0', '#90ed7d'],
        legend: {
          show: false
        },
        fontSize: 10,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
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
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        extra: {
          column: {
            width: _self.cWidth * _self.pixelRatio * 0.3 / chartData.categories.length
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
    width: 375upx;
    height: 300upx;
    background-color: #fff;
  }
</style>
