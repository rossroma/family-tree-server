const Master = require('../models/master')
const Wives = require('../models/wives')
const Daughters = require('../models/daughters')

Master.hasMany(Wives, { foreignKey: 'husbandId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Master.hasMany(Daughters, { foreignKey: 'fatherId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Wives.belongsTo(Master)
Daughters.belongsTo(Master)

// 创建
const create = async (data) => {
  return await Master.create(
    data,
    {
      include: [Wives, Daughters]
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
    include: [Wives, Daughters],
    order: [
      [Wives, 'sort', 'ASC'],
      [Daughters, 'sort', 'ASC']
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

const updateDaughtersAndWives = async (id, data) => {
  const master = await detail({id})
  // 更新妻子信息
  assocsUpdate(master.wives, data.wives, wife => {
    Wives.create(wife).then(wifeInstance => {
      master.addWife(wifeInstance)
    })
  })
  // 更新女儿信息
  assocsUpdate(master.daughters, data.daughters, daughter => {
    Daughters.create(daughter).then(daughterInstance => {
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
