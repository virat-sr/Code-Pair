const express = require('express')
const app = express()
const http = require('http')
const {Server} = require('socket.io')
const server  = http.createServer(app)
const io = new Server(server)


const PORT = process.env.PORT