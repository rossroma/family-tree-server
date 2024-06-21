const Manager = require('./controller/manager')
const User = require('./controller/user')
const { init } = require('./service/input')

module.exports = router => {
  router.post('/api/list/get', Manager.getList)
  router.post('/api/list/getTree', Manager.getTreeList)
  router.post('/api/item/create', Manager.createItem)
  router.post('/api/item/get', Manager.getItem)
  router.post('/api/item/remove', Manager.removeItem)
  router.post('/api/item/update', Manager.updateItem)
  router.post('/api/user/login', User.login)
  router.post('/api/user/register', User.register)
  router.get('/api/user/info', User.info)
  router.post('/api/user/update', User.updateUser)
  router.post('/api/user/remove', User.deleteUser)
  router.post('/api/user/lists', User.userLists)
  router.post('/api/logout', User.logout)
  router.post('/api/initData', init)

  return router
}