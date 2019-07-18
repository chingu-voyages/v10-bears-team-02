const express = require('express')
const bodyParser = require('body-parser')

// load env variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

// set port
const port = process.env.PORT

// instantiate express
const app = express()

// use body parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// build test route
app.get('/api/test', (req, res) => {
    console.log(req.body)
    res.send({message: 'success'})
})

// start server
app.listen(port, () => {
    console.log('server started on: ' + port)
})

