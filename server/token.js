const jwt = require('jsonwebtoken')
const { fail } = require('./controller/utils')
// 白名单接口
const whiteList = ['/api/list/getTree', '/api/item/get', '/api/user/login', '/api/initData']
// 需要校验权限的接口
const adminList = ['/api/user/register', '/api/user/update', '/api/user/remove', '/api/user/lists']

// 如同session一样，添加token校验中间件，对必要接口进行身份验证
const verResult = (req, res, next) => {
  const { url, headers: { token }, user } = req
  // 登录、通用接口跳过校验
  if(whiteList.includes(url)) {
    next()
  } else {
    if(!token) {
      // token不存在重新登录
      fail(res, { message: "请登录", code: 50008 })
    } else {
      try {
        const { username } = jwt.verify(token, 'secret');
        // 非管理员，校验权限
        if(adminList.includes(url) && username !== 'admin') {
          return fail(res, { message: '权限不足', code: 40003 })
        }
        next();
      } catch (ex) {
        fail(res, { message: '登录已过期', code: 50008 })
      }
    }
  }
}

module.exports = {
  verResult
}
