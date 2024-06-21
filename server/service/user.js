const bcrypt = require('bcryptjs')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { formatOrder } = require('./utils')

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  // 用户注册
  async register({ username, password, ...args }) {
    const existingUser = await this.userModel.findOne({ 
      where: { username }
     });
    if (existingUser) {
      throw new Error('用户已存在');
    }
    const hashedPassword = this.hashPassword(password);
    const user = new this.userModel({ username, password: hashedPassword, ...args });
    await user.save();
  }

  // 用户登录
  async authenticate(username, password) {
    const user = await this.userModel.findOne({ 
      where: { username }
     });
    if (!user || !this.comparePassword(password, user.password)) {
      return null;
    }
    // 密码正确，生成token
    const token = jwt.sign({ username }, 'secret', { expiresIn: '1d' });
    return { username, token };
  }

  // 更新用户信息
  async updateUser({ id, nickName, password, role, memo }) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new Error('用户不存在');
    }
    if(username) {
      user.username = username
    }
    if (nickName) {
      user.nickName = nickName;
    }
    if (password && password !== user.password) {
      user.password = this.hashPassword(password);
    }
    if (memo) {
      user.memo = memo;
    }
    await user.save();
    return user;
  }

  // 获取用户列表
  userLists(options) {
    const { order } = options
    return this.userModel.findAndCountAll({
      order: [
        formatOrder(order)
      ]
    });
  }

  // 删除用户
  async deleteUser({ id }) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new Error('用户不存在');
    } else if (user.role === 'admin') {
      throw new Error('不能删除管理员');
    }
    await user.destroy();
  }

  // 获取用户信息
  async getUserInfo({ id }) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new Error('用户不存在');
    }
    return user;
  }

  // 密码哈希
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync());
  }

  // 密码比较
  comparePassword(plainText, hashed) {
    return bcrypt.compareSync(plainText, hashed);
  }
}

module.exports = new UserService(User)