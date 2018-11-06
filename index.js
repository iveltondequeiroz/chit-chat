const express = require('express')
const socket = require('socket.io')

// app setup
const app = express()
const server = app.listen(4000, () => {
		console.log('chit-chat listening on port 4000...')
})

// static files dir
app.use(express.static('public'))

// socket setup
const io = socket(server)
io.on('connection', (socket) => {
	console.log('made socket connetion', socket.id)
})

