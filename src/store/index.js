/**
 * vuex
 * @author: Lujunjian
 * @createTime: 2021-1-14 14:01:28
 */

import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import user from '@/store/modules/user'
import mine from '@/store/modules/mine'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    mine
  },
  getters
})

export default store
