/**
 * vuex
 * @author: Lujunjian
 * @createTime: 2021-1-14 14:01:28
 */

import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import home from '@/store/modules/home.js'
import mine from '@/store/modules/mine.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    mine
  },
  getters
})

export default store
