const express = require('express')
const cors = require('cors')
const cookiePerser = require('cookie-parser')
const userRouter = require('./routes/user.js')
const carRouter = require('./routes/cars.js')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../docs/swagger.json')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookiePerser())
app.use(express.static('public'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/auth', userRouter)
app.use('/cars', carRouter)

module.exports = app
