/**
  * 验证文件
  * @author: Lujunjian
  * @createTime: 2021-02-03 16:53:37
*/
export default {
  /* 调用方式:
  let A = 15398031234
  console.log(this.PhoneNum(A)) */

  /**
   * 验证手机号
   * @param value
   * @returns {boolean}
   * @constructor
   */
  PhoneNum(value) {
    return /^1[23456789]\d{9}$/.test(value)
  },
  /**
   * 验证邮箱
   * @param value
   * @returns {boolean}
   * @constructor
   */
  Email(value) {
    return /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
  },
  /**
   * 验证身份证
   * @param value
   * @returns {boolean}
   * @constructor
   */
  IDCard(value) {
    let reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    return reg.test(value)
  },
  /**
   * 验证是否为对象
   * @param value
   * @returns {boolean}
   * @constructor
   */
  IsObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]'
  },
  /**
   * 验证是否是数组
   * @param value
   * @returns {boolean}
   * @constructor
   */
  IsArr(value) {
    return Object.prototype.toString.call(value) == '[object Array]'
  },
  /**
   * 验证是否是车牌（普通车辆）
   * @param value
   * @returns {boolean}
   * @constructor
   */
  IsCarOfOld(value) {
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
    if (value.length === 7) {
      return creg.test(value)
    } else {
      return false
    }
  },
  /**
   * 验证是否是车牌（普新能源车辆）
   * @param value
   * @returns {boolean}
   * @constructor
   */
  IsCarOfNew(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
    if (value.length === 8) {
      return xreg.test(value)
    } else {
      return false
    }
  }
}
