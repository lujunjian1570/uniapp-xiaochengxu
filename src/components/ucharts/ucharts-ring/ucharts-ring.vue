<template>
  <canvas
    id="canvasRing"
    canvas-id="canvasRing"
    class="charts"
  />
</template>

<script>
import uCharts from '@/plugins/ucharts/u-charts.min.js'
let _self
export default {
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
    this.cWidth = uni.upx2px(375)
    this.cHeight = uni.upx2px(300)
    this.getServerData()
  },
  methods: {
    getServerData() {
      let Ring = {
        'series': [{
          'name': '已上报',
          'data': 70
        }, {
          'name': '未上报',
          'data': 30
        }]
      }
      _self.showRing('canvasRing', Ring)
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
        fontSize: 11,
        colors: ['#00CF83', '#FF4C51'],
        background: '#FFFFFF',
        title: {
          name: '70%',
          color: '#00CF83',
          fontSize: 22,
        },
        subtitle: {
          name: '上报率',
          color: '#666666',
          fontSize: 11,
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
