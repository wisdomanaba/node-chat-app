const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const app = express()
const PORT = process.env.PORT || 4300
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
      console.log('New user connected')
      socket.on('disconnect', () => {
      console.log('User was disconnected')
      })
})


server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
})