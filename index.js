const express = require('express')
const router = require('./server/router')
const cors = require('cors')
const { verResult } = require('./server/token')

const server = express()
server.use(express.json())
server.use(cors())
server.use(verResult)

server.use('/', router(express.Router()))

server.use(express.static('./dist'))

server.listen(8000, () => {
  console.log('http://127.0.0.1:8000 启动')
})
