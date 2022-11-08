const ManagerService = require('../service/manager')
const { validator } = require('./validator')
const { fail, success } = require('./utils')

// 新增一条数据
exports.createItem = (req, res) => {
  validator(['givenName', 'generation'], req.body)
    .then((query) => {
      const format = {
        ...query,
        wives: query.wives.map((item, sort) => ({ ...item, sort})),
        daughters: query.daughters.map((item, sort) => ({ ...item, sort}))
      }
      return ManagerService.create(format)
    })
    .then(data => {
      success(res, data)
    })
    .catch(err => {
      fail(res, err)
    })
}

// 查看一条数据
exports.getItem = (req, res) => {
  validator(['id'], req.body)
    .then(({ id }) => {
      return ManagerService.detail({ id })
    })
    .then(data => {
      success(res, data)
    })
    .catch(err => {
      fail(res, err)
    })
}

// 删除一条数据
exports.removeItem = (req, res) => {
  validator(['id'], req.body)
    .then(({ id }) => {
      return ManagerService.remove({ id })
    })
    .then(data => {
      success(res, data)
    })
    .catch(err => {
      fail(res, err)
    })
}

// 更新一条数据
exports.updateItem = (req, res) => {
  validator(['id'], req.body)
    .then((query) => {
      const format = {
        ...query,
        wives: query.wives.map((item, sort) => ({ ...item, sort})),
        daughters: query.daughters.map((item, sort) => ({ ...item, sort}))
      }
      delete format.id
      return ManagerService.update(query.id, format)
    })
    .then(data => {
      success(res, data)
    })
    .catch(err => {
      fail(res, err)
    })
}

// 查看列表
exports.getList = (req, res) => {
  validator(['pageSize'], req.body)
    .then(({pageSize = 30, page = 1, generation, givenName}) => {
      const format = {
        offset: pageSize * (page -1),
        limit: pageSize,
        where: {
          generation,
          givenName
        },
        order: [['generation', 'ASC']]
      }
      return ManagerService.getList(JSON.parse(JSON.stringify(format)))
    })
    .then(data => {
      success(res, data)
    })
    .catch(err => {
      fail(res, err)
    })
}

