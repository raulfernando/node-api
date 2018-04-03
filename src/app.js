'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Conecta com o DB
mongoose.connect('mongodb://raul:raul@ds023664.mlab.com:23664/node-api')

const app = express()
const router = express.Router()

const Product = require('./models/product-model.js')
const Customer = require('./models/customer-model.js')
const Order = require('./models/order-model.js')

// Carrega as rotas
const indexRoute = require('./routes/index-route.js')
const productRoute = require('./routes/produtos.js')
const customerRoute = require('./routes/customer.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/produtos', productRoute)
app.use('/customers', customerRoute)

module.exports = app
