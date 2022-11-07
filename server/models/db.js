const { Sequelize } = require('sequelize')
const { DB_CONFIG } = require(`../config/config.${process.env.NODE_ENV || 'default'}`)

module.exports = new Sequelize(DB_CONFIG)
