const Manager = require('./controller/manager')
const User = require('./controller/user')
const { init } = require('./service/input')

module.exports = router => {
  router.post('/list/get', Manager.getList)
  router.post('/list/getTree', Manager.getTreeList)
  router.post('/item/create', Manager.createItem)
  router.post('/item/get', Manager.getItem)
  router.post('/item/remove', Manager.removeItem)
  router.post('/item/update', Manager.updateItem)
  router.post('/user/login', User.login)
  router.get('/user/info', User.info)
  router.post('/logout', User.logout)
  router.post('/initData', init)

  return router
}