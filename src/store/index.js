/**
 * vuex
 * @author: Lujunjian
 * @createTime: 2021-1-14 14:01:28
 */

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import getters from './getters'
import home from '@/store/modules/home.js'
import mine from '@/store/modules/mine.js'

Vue.use(Vuex)

const vuexPersisted = new createPersistedState({
  storage: {
    getItem: key => uni.getStorageSync(key),
    setItem: (key, value) => uni.setStorageSync(key, value),
    removeItem: key => uni.clearStorageSync(key)
  }
})

const store = new Vuex.Store({
  modules: {
    home,
    mine
  },
  getters,
  plugins:[vuexPersisted]
})

export default store
