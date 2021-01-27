<template>
  <ec-canvas :ec="ec" />
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
          color: ['#00CF83', '#FF4C51'],
          title: {
            text: '',
            subtext: '',
            left: 'center',
            top: '32%',
            textStyle: {
              fontSize: 12,
              fontWeight: 'normal',
              color: '#999'
            },
            subtextStyle: {
              fontSize: 26,
              color: '#00CF83'
            }
          },
          series: [{
            type: 'pie',
            silent: true,
            radius: ['70%', '100%'],
            data: '',
            label: {
              position: 'inside',
              // formatter : function(a) {
              //   return (a['name'] + a['value']);
              // }
              // formatter: '{b} : {c} ({d}%)'
              formatter: '{b}{c}'
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 5,
                borderColor: '#fff'
              }
            }
          }]
        }
      }
    }
  },
  onReady() {
    this.ec.option.title.text = this.obj.text
    this.ec.option.title.subtext = this.obj.subtext
    this.ec.option.series[0].data = this.obj.data
  }
}
</script>

<style lang="scss" scoped>
  .uni-ec-canvas{
    width: 100%;
    height: 100%;
  }
</style>
