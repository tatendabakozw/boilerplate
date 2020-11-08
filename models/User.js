const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

userSchema.pre('save',function(next){
    if(!this.isModified("password")){
        return next()
    }else{
        bcrypt.hash(this.password, 10, (err, hash)=>{
            if(err){
                return next()
            }else{
                this.password = hash
                next()
            }
        })
    }
})


module.exports = mongoose.model('user', userSchema)