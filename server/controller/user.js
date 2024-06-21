const { validator } = require('./validator')
const { fail, success } = require('./utils')
const UserService = require('../service/user')

// 登录
exports.login = (req, res) => {
  validator(['username', 'password'], req.body)
    .then(async (params) => {
      const { username, password } = params;
      const user = await UserService.authenticate(username, password)
      if (user) {
        // 登录成功，生成令牌等
        return { message: '登录成功', ...user }
      } else {
        throw new Error('账号或密码错误')
      }
    })
    .then(data => {
      success(res, data)
    })
    .catch(err => {
      fail(res, err)
    })
}

// 注册
exports.register = (req, res) => {
  validator(['username', 'password'], req.body)
    .then(async (params) => {
      return await UserService.register(params)
    })
    .then(() => {
      success(res, { message: '注册成功' })
    })
    .catch(err => {
      fail(res, err)
    })
}

// 获取用户列表
exports.userLists = async (req, res) => {
  const data = await UserService.userLists(req.body)
  success(res, data)
}

// 更新用户信息
exports.updateUser = (req, res) => {
  validator(['id', 'username', 'password', 'role'], req.body)
    .then(async (params) => {
      return await UserService.updateUser(params)
    })
    .then(() => {
      success(res, { message: '更新成功' })
    })
    .catch(err => {
      fail(res, err)
    })
}

// 删除用户
exports.deleteUser = (req, res) => {
  validator(['id'], req.body)
    .then(async (params) => {
      return await UserService.deleteUser(params)
    })
    .then(() => {
      success(res, { message: '删除成功' })
    })
    .catch(err => {
      fail(res, err)
    })
}

// 获取用户信息
exports.info = (req, res) => {
//   validator(['id'], req.body)
//     .then(async (params) => {
//       return await UserService.getUserInfo(params)
//     })
//     .then(data => {
//       success(res, data)
//     })
//     .catch(err => {
//       fail(res, err)
//     })

  success(res, { name: 'admin', avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif' })
}

// 登出
exports.logout = (req, res) => {
  success(res)
}
