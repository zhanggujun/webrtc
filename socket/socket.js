const socketIO = require('socket.io')

function createSocket(server){
  const io = socketIO(server)

  io.on('connection',socket => {
    socket.on('msg',data => {
      io.emit('msg',data)
    })
  })

}

module.exports.createSocket = createSocket