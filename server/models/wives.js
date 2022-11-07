/* * @Description:    */
const {
  DataTypes
} = require('sequelize')
const sequelize = require('./db')
sequelize.sync({ force: true }) // 生产环境禁用，会清空数据库

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  from: {
    type: DataTypes.STRING,
  },
  birth: {
    type: DataTypes.STRING,
  },
  death: {
    type: DataTypes.STRING,
  },
  sort: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  memo: {
    type: DataTypes.STRING,
  }
}
const options = {
  tableName: 'wives',
  comment: ''
}

module.exports = sequelize.define('wives', attributes, options)
