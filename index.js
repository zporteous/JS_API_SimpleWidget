var express = require('express')
var cors = require('cors')
var app = express()

// app.use(cors())

app.use(express.static('./'))



app.listen(3000, function () {
console.log('CORS-enabled web server listening on port 80')
})