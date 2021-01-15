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
  storage: window.localStorage
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
