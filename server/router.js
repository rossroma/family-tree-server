const Manager = require('./controller/manager')

module.exports = router => {
  router.post('/list/get', Manager.getList)
  router.post('/list/getTree', Manager.getTreeList)
  router.post('/item/create', Manager.createItem)
  router.post('/item/get', Manager.getItem)
  router.post('/item/remove', Manager.removeItem)
  router.post('/item/update', Manager.updateItem)

  return router
}