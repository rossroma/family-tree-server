const { validator } = require('./validator')
const { fail, success, sign } = require('./utils')

// 登录
exports.login = (req, res) => {
  validator(['username', 'password'], req.body)
    .then((query) => {
      // 请自行替换登录密码，获奖密码存入数据库
      if (query.password === 123456) {
        const token = sign({ user: query.password })
        return { token }
      }
      throw new Error('账号或密码错误')
    })
    .then(data => {
      success(res, data)
    })
    .catch(err => {
      fail(res, err)
    })
}

// 获取用户信息
exports.info = (req, res) => {
  success(res, { name: 'admin', avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif' })
}

// 登出
exports.logout = (req, res) => {
  success(res)
}
