const express = require('express')
const morgan = require('morgan')
const helmet = require('morgan')
const xss = require('xss-clean')

//initiallizing app
const app = express()

//middleware
app.use(helmet());
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(xss())
require('dotenv').config()

//declaring varialbes
const PORT = process.env.PORT || 5000

//connecting database
const connectDB = require('./db')
connectDB()

//auth route
app.use('/auth', require('./routes/auth'))

//listener
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Server Up On Port ${PORT}`)
    }
})