const Master = require('../models/master')
const Wife = require('../models/wife')
const Daughter = require('../models/daughter')
const { Op } = require("sequelize")
const { formatOrder } = require('./utils')

Master.hasMany(Wife, { foreignKey: 'husbandId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Wife.belongsTo(Master, { foreignKey: 'husbandId' })
Master.hasMany(Daughter, { foreignKey: 'fatherId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Daughter.belongsTo(Master, { foreignKey: 'fatherId' })
Master.belongsTo(Master, { as: 'father', foreignKey: 'parentId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' })

const formatQuerys = ({ givenName, generation }) => {
  const result = {}
  if (givenName) {
    result.givenName = { [Op.substring]: givenName }
  }
  if (generation) {
    result.generation = generation
  }
  return result
}


// 创建
const create = async (data) => {
  return await Master.create(
    data,
    {
      include: [Wife, Daughter]
    }
  )
}

// 列表
const getList = async (options) => {
  const { pageSize, page, givenName, generation, order } = options
  return await Master.findAndCountAll({
    offset: pageSize * (page -1),
    limit: pageSize,
    where: formatQuerys({ givenName, generation }),
    include: [
      { model: Daughter },
      { model: Wife }
    ],
    order: [
      formatOrder(order),
      [Wife, 'sort', 'ASC'],
      [Daughter, 'sort', 'ASC']
    ]
  })
}

// 详情
const detail = async (query) => {
  return await Master.findOne({
    where: query,
    include: [Wife, Daughter, {
      model: Master,
      as: 'father'
    }],
    order: [
      [Wife, 'sort', 'ASC'],
      [Daughter, 'sort', 'ASC']
    ]
  })
}

// 删除
const remove = async (data) => {
  return await Master.destroy({
    where: data
  })
}

// 更新
const update = async (id, data) => {
  updateDaughtersAndWives(id, data)
  return await Master.update(data, {
    where: { id }
  })
}

// 获取树列表
const getTreeList = async () => {
  return await Master.findAndCountAll({
    order: [
      [ 'id', 'ASC']
    ]
  })
}

const updateDaughtersAndWives = async (id, data) => {
  const master = await detail({id})
  // 更新妻子信息
  assocsUpdate(master.wives, data.wives, wife => {
    Wife.create(wife).then(wifeInstance => {
      master.addWife(wifeInstance)
    })
  })
  // 更新女儿信息
  assocsUpdate(master.daughters, data.daughters, daughter => {
    Daughter.create(daughter).then(daughterInstance => {
      master.addDaughter(daughterInstance)
    })
  })
}

// 关联更新
const assocsUpdate = async (sourceInstances, targetInstances, cb) => {
  sourceInstances.forEach(source => {
    const isExist = targetInstances.find(target => target.id === source.id) 
    if (isExist) {
      source.update(isExist) // 存在相同id，执行更新操作
    } else {
      source.destroy() // 不存在相同id，执行删除操作
    }
  })
  // 过滤出没有id的数据，执行新增操作
  targetInstances.filter(target => !target.id).forEach(cb)
}

module.exports = {
  getList,
  detail,
  create,
  remove,
  update,
  getTreeList
}
