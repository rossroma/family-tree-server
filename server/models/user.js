
const {
  DataTypes
} = require('sequelize')
const sequelize = require('./db')
// sequelize.sync({ update: true }) // 生产环境禁用，会清空数据库

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
    validator: value => ['user', 'admin'].includes(value),
    allowNull: false
  },
  memo: {
    type: DataTypes.STRING,
  },
  nickName: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
  }
}


module.exports = sequelize.define('user', attributes)