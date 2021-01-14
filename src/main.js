/**
 * main
 * @author: Lujunjian
 * @createTime: 2021-1-14 09:01:53
 */

import Vue from 'vue'
import App from './App'

import store from './store'
import Api from '@/services/api.js'
import Request from '@/services/request.js'
import Utils from '@/utils/utils.js'

Vue.prototype.$api = Api
Vue.prototype.$http = Request
Vue.prototype.$utils = Utils

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
