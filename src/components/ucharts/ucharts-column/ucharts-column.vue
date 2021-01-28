<template>
  <canvas
    id="canvasColumn"
    canvas-id="canvasColumn"
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
    // _self.pixelRatio = uni.getSystemInfoSync().pixelRatio;
    this.cWidth = uni.upx2px(375)
    this.cHeight = uni.upx2px(300)
    this.getServerData()
  },
  methods: {
    getServerData() {
      let Column = {
        title: '出勤统计',
        categories: ['到岗', '轮休', '病假', '事假'],
        series: [{
          'name': '出勤',
          'data': [15, {
            'value': 20,
            'color': '#f04864'
          }, 143, 34]
        }]
      }
      _self.showColumn('canvasColumn', Column)
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
        fontSize: 11,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        animation: true,
        categories: chartData.categories,
        series: chartData.series,
        xAxis: {
          disableGrid: true,
        },
        yAxis: {
          disableGrid: true
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
  .charts{
    width: 375upx;
    height: 300upx;
    background-color: #fff;
  }
</style>
