const Master = require('../models/master')
const Wife = require('../models/wife')
const Daughter = require('../models/daughter')

Master.hasMany(Wife, { foreignKey: 'husbandId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Master.hasMany(Daughter, { foreignKey: 'fatherId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Wife.belongsTo(Master, { foreignKey: 'husbandId' })
Daughter.belongsTo(Master, { foreignKey: 'fatherId' })

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
const getList = async (query) => {
  return await Master.findAndCountAll(query)
}

// 详情
const detail = async (query) => {
  return await Master.findOne({
    where: query,
    include: [Wife, Daughter],
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
  console.log('🙆‍♂️🙆🙆‍♀️ ~ file: manager.js ~ line 46 ~ update ~ data', data)
  updateDaughtersAndWives(id, data)
  return await Master.update(data, {
    where: { id }
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
      source.update(isExist)
    } else {
      source.destroy()
    }
  })
  targetInstances.filter(target => !target.id).forEach(cb)
}

module.exports = {
  getList,
  detail,
  create,
  remove,
  update
}
