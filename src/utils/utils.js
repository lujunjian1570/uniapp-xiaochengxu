/**
  * 公共方法
  * @author: Lujunjian
  * @createTime: 2021-01-14 09:59:01
*/

// import Vue from 'vue'
// const _this = Vue.prototype
const utilsSelf = module.exports = {
  /**
   * 测试（用utilsSelf可以调用里面的方法）
   */
  test: () => {
    utilsSelf.showToast('test')
  },
  /**
   * 显示消息提示框
   * @param title 提示的内容
   * @param duration 显示时长，默认1.5秒
   * @param mask 是否显示透明蒙层，防止触摸穿透，默认：false
   * @param icon 显示的icon图，默认不显示
   */
  showToast: (title, duration = 1500, mask = false, icon = 'none') => {
    if (Boolean(title) === false) {
      return
    }
    uni.showToast({
      title,
      duration,
      mask,
      icon
    })
  },
  /**
   * 显示 loading 提示框
   * @param title 提示内容
   * @param mask 是否显示透明蒙层，防止触摸穿透，默认：true
   */
  showLoading: (title = '加载中', mask = true) => {
    uni.showLoading({
      title: title,
      mask: mask
    })
  },
  /**
   * 隐藏 loading 提示框
   */
  hideLoading: () => {
    uni.hideLoading()
  },
  /**
   * 显示模态弹窗
   * @param msg 提示的内容
   * @param confirm 确定的回调
   * @param cancel 取消的回调
   */
  showModal:(msg = '提示内容', confirm = () => {}, cancel = () => {}) => {
    uni.showModal({
      title: '提示',
      content: msg,
      success: function(res) {
        if (res.confirm) {
          confirm()
        } else if (res.cancel) {
          cancel()
        }
      }
    })
  }
}
