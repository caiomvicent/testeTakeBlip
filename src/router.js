const routes = require('express').Router()

const controller = require('./app/controller/controller')

routes.get('/', controller.findAll)

module.exports = routes