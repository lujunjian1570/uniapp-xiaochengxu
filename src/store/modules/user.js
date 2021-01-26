/**
 * modules
 * @author: Lujunjian
 * @createTime: 2021-1-14 14:09:48
 */

export default {
  namespaced: true,
  state: {
    userInfo: {
      userName: ''
    }
  },
  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 缓存用户信息
    setUserInfo({
      commit
    }, userInfo) {
      commit('SET_USER_INFO', userInfo)
    }
  },
  getters: {
    userInfo: state => state.userInfo
  }
}
