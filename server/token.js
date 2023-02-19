const jwt = require('jsonwebtoken')
const { fail } = require('./controller/utils')
const whiteList = ['/api/list/getTree', '/api/item/get', '/api/user/login']

// 如同session一样，添加token校验中间件，对必要接口进行身份验证
const verResult = (req, res, next) => {
  const { url, headers: { token } } = req
  // 登录、通用接口跳过校验
  if(whiteList.includes(url)) {
    next()
  } else {
    if(!token) {
      // token不存在重新登录
      fail(res, { message: "请登录", code: 50008 })
    } else {
      const { iat, exp, message = '' } = jwt.verify(token, 'secret', (error, decoded) => {
        if(error) {
          if(error.name === 'TokenExpiredError') {
            return {
              iat: 1,
              exp: 0,
              message: "token已过期"
            }
          } else if (error.name === 'JsonWebTokenError') {
            return {
              iat: 1,
              exp: 0,
              message: "token无效"
            }
          }
        } else {
          return decoded
        }
      })
      // token过期或者无效重新登录
      if(iat < exp) {
        next()
      } else {
        fail(res, { message, code: 50008 })
      }
    }
  }
}

module.exports = {
  verResult
}
