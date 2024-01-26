const express = require('express')

const app = express()

const path = require('path')

const logger = require('morgan')

app.use(express.json())

//using local object in its responses which can contain info from requests
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

//use lgoger to log http requests
app.use(logger('dev'))

//routes(endpoints) of app(api); req, res can be done here
app.use('/', require('./routes/routes.js'))
// app.use('/', require('./routes/table.js'))

//catchall for wrong route?

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app; 