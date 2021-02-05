/**
 * 请求封装
 * @author: Lujunjian
 * @createTime: 2021-01-14 09:46:01
 */

import Vue from 'vue'

const _this = Vue.prototype
const baseUrl = process.uniEnv.BASE_API

export default {
  post: function(url, data = {}, hideLoading) {
    const $that = this
    if (!hideLoading) _this.$utils.showLoading()
    // 获取网络类型
    uni.getNetworkType({
      success: function(res) {
        if (res.networkType === 'none') {
          /* wifi	wifi 网络
					2g	2g 网络
					3g	3g 网络
					4g	4g 网络
					ethernet	有线网络	App
					unknown	Android 下不常见的网络类型
					none	无网络 */
          _this.$utils.showToast('当前无网络')
          return false
        }
      }
    })
    return new Promise((succ, error) => {
      uni.request({
        url: baseUrl + url,
        data: Object.assign({}, data, {
          // appId: 1
        }),
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          token: uni.getStorageSync('token')
        },
        success: function(result) {
          if (!hideLoading) _this.$utils.hideLoading()
          $that.parseData(succ, error, result)
        },
        fail: function(e) {
          if (!hideLoading) _this.$utils.hideLoading()
          error(e)
        }
      })
    })
  },
  parseData: function(succ, error, result) {
    if (result.statusCode === 200) {
      if (result.data.code === 0) {
        succ(result.data)
      } else {
        _this.$utils.showToast(result.data.msg)
        error(result.data)
      }
    } else {
      error(result)
    }
  }
}
