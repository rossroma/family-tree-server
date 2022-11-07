/*
 * @Author: kai.yang
 * @Date: 2021-06-08 10:54:00
 * @LastEditors: kai.yang
 * @LastEditTime: 2021-10-27 09:53:35
 * @Description: 请求校验
 */

/**
 * rules Example
 * ['id', 'name'] // 必填属性的简写模式
 *
 * 完整模式
 * [
 *  {
 *    attr: 'message',
 *    required: true,
 *    type: 'string',
 *    custom: (val) => {
 *      // 字符长度大于5，小于20
 *      if (val <= 5 || val >= 20) {
 *        return 'message的长度应该在5-20之间'
 *      }
 *    }
 *  },
 *  ...
 * ]
 */

function isFalseExceptZero (val) {
  if (val === 0) return false
  return !val
}

/**
 * 必填校验
 * @param {String} item 必填属性
 * @param {Object} query 参数对象
 * @param {Object} res response响应体
 * @returns {Boolean} 校验结果
 */
function requireValid (item, query) {
  const result = isFalseExceptZero(query[item])
  if (result) {
    return { msg: `参数${item}的值不能为空` }
  }
  return result
}

/**
 * 执行校验
 * @param {Object} item 校验规则
 * @param {Function} fun 校验方法
 * @returns 执行校验方法
 */
function dataTypeValid (item, fun) {
  return fun && fun(item)
}

/**
 * 类型校验器
 * @param {Object} item 校验规则
 * @param {Object} query 参数对象
 * @param {Object} res response响应体
 * @returns {Boolean} 校验结果
 */
function dataTypeValidtor (item, query) {
  const { attr, type, required } = item
  const types = {
    string: val => typeof val === 'string',
    number: val => typeof val === 'number',
    boolean: val => typeof val === 'boolean',
    null: val => val === 'null',
    array: val => Array.isArray(val),
    object: val => Object.prototype.toString.call(val) === '[object Object]',
    function: val => typeof val === 'function'
  }

  // 类型校验失败
  if (!dataTypeValid(query[attr], types[type])) {
    return { msg: `参数${attr}的类型不正确，预期类型为${type}` }
  }

  // 是否需要进行必填校验
  if (required) {
    return requireValid(attr, query)
  }
}

// TODO: 自定义方法校验
function customValid () {

}

/**
 * 校验器
 * @param {Object} rules 校验规则
 * @param {Object} query 参数对象
 * @param {Object} res response响应体
 * @returns {Boolean} 校验结果
 */
 exports.validator = (rules, query) => {
  let temp = null
  rules.some(item => {
    if (typeof item === 'string') {
      temp = requireValid(item, query)
    } else if (typeof item.type === 'string') {
      temp = dataTypeValidtor(item, query)
    } else if (typeof item.custom === 'function') {
      temp = customValid(item, query)
    }
    return temp
  })
  return new Promise((resolve, reject) => {
    temp ? reject(temp) : resolve(query)
  })
}
