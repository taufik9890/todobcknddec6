const express = require('express')
const route = express.Router()
const todo = require('./todo')

route.use('/', todo)


module.exports = route