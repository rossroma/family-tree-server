
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
