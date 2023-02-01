const express = require('express')
const router = require('./server/router')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())

server.use('/', router(express.Router()))

server.use(express.static('./dist'))

server.listen(8000, () => {
  console.log('http://127.0.0.1:80 启动')
})
