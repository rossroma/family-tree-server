const express = require('express')
const router = require('./server/router')

const server = express()
server.use(express.json())

server.use('/', router(express.Router()))

server.use(express.static('./'))

server.listen(3000, () => {
  console.log('http://127.0.0.1:80 启动')
})