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
  givenName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  courtesyName: {
    type: DataTypes.STRING,
  },
  parentId: {
    type: DataTypes.INTEGER
  },
  generation: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  birth: {
    type: DataTypes.STRING,
  },
  death: {
    type: DataTypes.STRING,
  },
  memo: {
    type: DataTypes.STRING,
  }
}
const options = {
  tableName: 'master',
  comment: ''
}

module.exports = sequelize.define('Master', attributes, options)
