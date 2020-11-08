const express = require('express')
const router = express.Router();
const User = require('../models/User')

router.get('/',(req,res)=>{
    res.send('Boiler Plate')
})

router.post('/register',(req,res)=>{    
    const newUser= new User(req.body)
    newUser.save((err)=>{
        if(err){
            res.json({
                message: 'User Registration Failed',
                msgErr: true
            })
        }else{
            res.status(200).json({
                message: "Registration Sucessfull",
                msgErr: false
            })
        }
    })
})

module.exports = router