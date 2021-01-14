/**
 * 环境配置
 * @author: Lujunjian
 * @createTime: 2021-1-14 09:01:14
 */

(function() {
  const NODE_ENV = 'prod' // prod:生产环境，test:测试环境
  let ENV_VAR = null

  if (process.env.NODE_ENV === 'development') {
    ENV_VAR = require('./dev.js')
  } else if (process.env.NODE_ENV === 'production') {
    if (NODE_ENV === 'prod') {
      ENV_VAR = require('./prod.js')
    } else if (NODE_ENV === 'test') {
      ENV_VAR = require('./test.js')
    }
  }

  if (ENV_VAR) {
    process.uniEnv = {}
    for (const key in ENV_VAR) {
      process.uniEnv[key] = ENV_VAR[key]
    }
  }
})()
