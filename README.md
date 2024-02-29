# family-tree-server
家谱的后端服务



### 启动

```
npm run dev
```



### mysql 配置

```javascript
// ./server/config/config.default.js

module.exports = {
  DB_CONFIG: {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '123456789',
    database: 'family_tree',
    dialectOptions: {
      useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: true
    },
    timezone: '+08:00' //for writing to database
  }
}

```



### 自动创建数据表

```
npm run model
```



### 修改登录密码

```javascript
//server/controller/user.js

// 请自行替换登录密码，获奖密码存入数据库
if (query.password === '123456') {
  const token = sign({ user: query.password })
  return { token }
}
```



