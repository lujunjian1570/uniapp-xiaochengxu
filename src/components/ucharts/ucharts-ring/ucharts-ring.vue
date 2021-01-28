<template>
  <canvas
    id="canvasRing"
    canvas-id="canvasRing"
    class="charts"
  />
</template>

<script>
/**
   * 饼图圆环图组件
   * @author: Lujunjian
   * @createTime: 2021-1-28 15:39:10
   * obj数据示例：
   * {
      title: '上报率',
      subtitle: '66.7',
      series: [{
        data: 200,
        name: '已上报'
      }, {
        data: 100,
        name: '未上报'
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
      pixelRatio: 1
    }
  },
  mounted() {
    _self = this
    this.cWidth = uni.upx2px(375)
    this.cHeight = uni.upx2px(300)
    this.getServerData()
  },
  methods: {
    getServerData() {
      _self.showRing('canvasRing', this.obj)
    },
    showRing(canvasId, chartData) {
      for (let i = 0; i < chartData.series.length; i++) {
        chartData.series[i].format = () => {
          return chartData.series[i].data
        }
      }
      new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: 'ring',
        legend: {
          // show: false
        },
        fontSize: 10,
        colors: ['#00CF83', '#FF4C51'],
        background: '#FFFFFF',
        title: {
          name: chartData.title,
          color: '#666',
          fontSize: 10,
        },
        subtitle: {
          name: chartData.subtitle + '%',
          color: parseFloat(chartData.subtitle) >= 50 ? '#00CF83' : '#FF4C51',
          fontSize: 22,
        },
        pixelRatio: _self.pixelRatio,
        animation: true,
        series: chartData.series,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        padding: [0, 0, 0, 0],
        extra: {
          pie: {
            // ringChart圆环宽度，单位为px
            ringWidth: 14 * _self.pixelRatio,
            // 数据标签到饼图外圆连线的长度，单位为px
            labelWidth: 1,
            // 是否绘制分割线（v1.8.2有效）
            border: true,
            borderWidth: 2,
            borderColor: '#FFFFFF'
          }
        }
      })
    }
  }
}
</script>

<style>
  /* 样式的width和height一定要与定义的cWidth和cHeight相对应 */
  .charts{
    width: 375upx;
    height: 300upx;
    background-color: #fff;
  }
</style>
