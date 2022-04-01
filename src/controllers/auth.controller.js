const User=require("../models/user.model")
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken=(user)=>{
    return  jwt.sign({ user }, process.env.SECRET_KEY)
}




const register=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        let user=await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).send({message:"email id already registered"})
        }
        user=await User.create(req.body)
        return res.status(200).send(user)
        
    } 
    catch (error) {
        return res.status(400).send(error.message)
    }
}

const login=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        let user=await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send({message:"email id not registered"})

        }
        const match=user.checkpassword(req.body.password)
 
        if(match){
           let token=generateToken(user)

           return res.status(200).send({user,token})
        }

  return res.status(400).send({message:"incorrect password"})
        
    
} 
    catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports={register,login}