'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config.js')

// Conecta com o DB
mongoose.connect(config.connection)

const app = express()
const router = express.Router()

const Product = require('./models/product-model.js')
const Customer = require('./models/customer-model.js')
const Order = require('./models/order-model.js')

// Carrega as rotas
const indexRoute = require('./routes/index-route.js')
const productRoute = require('./routes/produtos.js')
const customerRoute = require('./routes/customer.js')
const orderRoute = require('./routes/order.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/produtos', productRoute)
app.use('/customers', customerRoute)
app.use('/orders', orderRoute)

module.exports = app
