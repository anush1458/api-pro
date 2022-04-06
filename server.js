const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const {erroHandler} = require("./Middlewares/errMiddleware")
const connectDB = require('./config/dbconnection')
connectDB()

app.use(express.json())
app.use('/api/users',require('./Routes/userRoutes'))

app.listen(5000, () => console.log('connected'))
