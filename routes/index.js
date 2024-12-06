const express = require('express')
const route = express.Router()
const apiRoute = require('./api/index')


route.use(process.env.API_URL, apiRoute)




module.exports = route