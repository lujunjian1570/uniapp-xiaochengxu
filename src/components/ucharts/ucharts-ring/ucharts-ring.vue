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
   */

import uCharts from '@/plugins/ucharts/u-charts.min.js'
export default {
  props: {
    /* obj: {
        title: '上报率',
        subtitle: '66.7',
        series: [{
          data: 200,
          name: '已上报'
        }, {
          data: 100,
          name: '未上报'
        }]
      } */
    obj: {}
  },
  data() {
    return {
      cWidth: uni.upx2px(375),
      cHeight: uni.upx2px(300),
      pixelRatio: 1
    }
  },
  mounted() {
    this.showRing(this.obj)
  },
  methods: {
    showRing(chartData) {
      for (let i = 0; i < chartData.series.length; i++) {
        chartData.series[i].format = () => {
          return chartData.series[i].data
        }
      }
      new uCharts({
        $this: this,
        canvasId: 'canvasRing',
        type: 'ring',
        legend: {
          show: true
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
        pixelRatio: this.pixelRatio,
        animation: true,
        series: chartData.series,
        width: this.cWidth * this.pixelRatio,
        height: this.cHeight * this.pixelRatio,
        padding: [0, 0, 0, 0],
        extra: {
          pie: {
            // ringChart圆环宽度，单位为px
            ringWidth: 14 * this.pixelRatio,
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
    width: 375rpx;
    height: 300rpx;
    background-color: #fff;
  }
</style>
