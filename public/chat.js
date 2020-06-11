(function(){

  let socket = io()

  const oTextarea = document.querySelector('textarea')

  document.querySelector('form').onsubmit = function(e){
    e.preventDefault()
    socket.emit('msg',this['input'].value)
  }

  socket.on('msg',data => {
    oTextarea.value += data + '\n'
  })

})()