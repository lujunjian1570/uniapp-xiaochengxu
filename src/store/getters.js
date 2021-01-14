/**
 * getters
 * @author: Lujunjian
 * @createTime: 2021-1-14 14:08:11
 */

const getters = {
  userName: state => state.home.userInfo.userName + state.mine.str
}
export default getters
