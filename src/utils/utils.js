/**
  * 公共方法
  * @author: Lujunjian
  * @createTime: 2021-01-14 09:59:01
*/

// import Vue from 'vue'
// const _this = Vue.prototype
const utilsSelf = module.exports = {
  /**
   * toast提示
   * @param title
   * @param duration
   * @param mask
   * @param icon
   */
  toast: (title, duration = 1500, mask = false, icon = 'none') => {
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
   * 测试（用utilsSelf可以调用里面的方法）
   */
  test: () => {
    utilsSelf.toast('test')
  }
}
