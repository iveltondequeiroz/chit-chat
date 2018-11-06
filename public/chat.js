//make connection
const socket = io.connect('http://localhost:4000')


// get handlers
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback')

// emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
})

// listen for events
socket.on('chat', data => {
	output.innerHTML += '<p><strong>'+data.handle+':'+'</strong>'+data.message+'</p>'
})
      