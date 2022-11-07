/*
 * @Author: kai.yang
 * @Date: 2021-06-08 10:43:50
 * @LastEditors: kai.yang
 * @LastEditTime: 2021-10-13 16:25:01
 * @Description: 参数格式化方法
 */

/**
 * 成功回调
 * @param {*} res 响应体
 * @param {*} options 要返回的额外数据
 */
const success = (res, options = {}, message) => {
  res.json({
    code: 1,
    msg: message || '操作成功',
    result: options.get ? options.get({ plain: true }) : options
  })
}

/**
 * 失败回调
 * @param {*} res 响应体
 * @param {*} options 要返回的额外数据
 */
const fail = (res, options = {}, message) => {
  console.log('🙆‍♂️🙆🙆‍♀️ ~ file: utils.js ~ line 28 ~ fail ~ options', options)
  res.json({
    code: 0,
    msg: message || '操作失败',
    ...options
  })
}

/**
 * 对比两个数组是否相等
 * @param {Array} arr1 数组1
 * @param {Array} arr2 数组2
 * @returns Boolean
 */
const compareArray = (arr1 = [], arr2 = []) => {
  if (arr1.length !== arr2.length) return false
  return arr1.sort().toString() === arr2.sort().toString()
}

module.exports = {
  success,
  fail,
  compareArray
}
