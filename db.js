const mongoose = require('mongoose')
const mongoUrl = process.env.mongoUrl
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}

const connectDB = () =>{
    mongoose.connect(mongoUrl, mongoOptions)
    mongoose.connection.once('open',(err)=>{
        if(err){
            console.log(ere)
        }else{
            console.log(`Database Connected Sucessfully on ${mongoUrl}`)
        }
    })
}

module.exports = connectDB;