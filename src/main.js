/**
 * main
 * @author: Lujunjian
 * @createTime: 2021-01-14 09:01:53
 */

import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import store from './store'
import Api from '@/services/api.js'
import Request from '@/services/request.js'
import Utils from '@/utils/utils.js'
import Validates from '@/utils/validates'

Vue.use(uView)
Vue.prototype.$api = Api
Vue.prototype.$http = Request
Vue.prototype.$utils = Utils
Vue.prototype.$validates = Validates

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
