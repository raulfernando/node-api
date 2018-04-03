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

// Carrega as rotas
const indexRoute = require('./routes/index-route.js')
const productRoute = require('./routes/produtos.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/produtos', productRoute)

module.exports = app
