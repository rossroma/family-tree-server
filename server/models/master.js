/* * @Description:    */
const { DataTypes } = require('sequelize')
const sequelize = require('./db')
// sequelize.sync({ force: true }) // 生产环境禁用，会清空数据库

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  givenName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  generation: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bad: {
    type: DataTypes.STRING,
  },
  memo: {
    type: DataTypes.STRING,
  }
}

module.exports = sequelize.define('master', attributes)
