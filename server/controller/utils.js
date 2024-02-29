/*
 * @Author: kai.yang
 * @Date: 2021-06-08 10:43:50
 * @LastEditors: kai.yang
 * @LastEditTime: 2021-10-13 16:25:01
 * @Description: 参数格式化方法
 */
const jwt = require('jsonwebtoken')

/**
 * 成功回调
 * @param {*} res 响应体
 * @param {*} options 要返回的额外数据
 */
const success = (res, options = {}) => {
  res.json({
    code: 1,
    message: '操作成功',
    result: JSON.parse(JSON.stringify(options))
  })
}

/**
 * 失败回调
 * @param {*} res 响应体
 * @param {*} options 要返回的额外数据
 */
const fail = (res, options = {}) => {
  res.json({
    code: 0,
    message: options.message || '操作失败',
    ...options
  })
}

/**
 * 
 * @param {*} jtJson 
 * @param {*} options 
 * @returns 
 */
const sign = (jtJson = {}, options = {}) => {
  const token = jwt.sign({ iss: 'lesscode', ...jtJson}, "secret", { expiresIn: 60 * 60 * 24 * 10, ...options})
  return token
}

module.exports = {
  success,
  fail,
  sign
}
