const express = require('express')

// app setup
const app = express()
const server = app.listen(4000, () => {
		console.log('chit-chat listening on port 4000...')
})

// static files dir
app.use(express.static('public'))