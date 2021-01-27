<template>
  <ec-canvas
    :ec="ec"
    force-use-old-canvas="true"
  />
</template>

<script>
import ecCanvas from '@/plugins/echart-for-weixin-miniprogram/ec-canvas.vue'
export default {
  components: {
    ecCanvas
  },
  props: {
    obj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      ec: {
        option: {
          backgroundColor: '#fff',
          // color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F'],
          title: {
            text: '',
            left: 'center',
            top: '0',
            textStyle: {
              fontSize: '14',
              color: '#999'
            }
          },
          xAxis: [{
            type: 'category',
            data: '',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#999',
                width: .5
              }
            },
            axisLabel: {
              interval: 0,
              // rotate:40
            }
          }],
          yAxis: [{
            type: 'value',
            splitLine: {
              show: false
            },
            // minInterval: 50,
            axisLine: {
              lineStyle: {
                color: '#999',
                width: .5
              }
            },
            axisLabel: {
              interval: 0,
              // rotate:40
            }
          }],
          series: [{
            type: 'bar',
            data: '',
            barWidth: '12',
            itemStyle: {
              normal: {
                // color: function(params) {
                //   let colorList = [
                //     '#0088FF', '#FFAD00', '#21DE99', '#FF4C51', '#00C2FF'
                //   ]
                //   return colorList[params.dataIndex]
                // },
                label: {
                  show: true,
                  position: 'top'
                },
                barBorderRadius: [3, 3, 0, 0]
              }
            }
          }],
          grid: {
            top: '30',
            left: '30',
            right: '0',
            bottom: '20'
          }
        }
      }
    }
  },
  onReady() {
    this.ec.option.title.text = this.obj.title
    this.ec.option.xAxis[0].data = this.obj.x
    this.ec.option.series[0].data = this.obj.data
    // this.ec.option.series[0].itemStyle.normal.color = '#FFAD00'
    console.log(this.ec.option.series[0].itemStyle.normal.color)
  }
}
</script>
