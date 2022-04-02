const express=require("express")
const app=express()
const {register,login}=require("./controllers/auth.controller")
const { body, validationResult } = require('express-validator');
const cors=require("cors")
const cartController=require("./controllers/cart.controller")

const usercontroller = require("./controllers/searchcontroller")
// sachin_controller

const bestController=require("./controllers/best.controller.js")
const bodyController=require("./controllers/body.controller.js")
const homeController=require("./controllers/home.controller.js")
const summerController=require("./controllers/summer.controller.js")

// const {login, register} = require("./controllers/auth")
app.use(cors())



app.use("/search", usercontroller)

app.use(express.json())
// Sachinuse
app.use("/summer",summerController)
app.use("/body",bodyController)
app.use("/home",homeController)
app.use("/Best",bestController)
// meeeeeeeeee
app.post("/register",body("first_name").notEmpty().withMessage("first name is required"),body("last_name").notEmpty().withMessage("last name is required"),body("email").notEmpty().withMessage("email is required").isEmail().withMessage("enter correct email id"),body("password").notEmpty().withMessage("password is required").isLength({min:5,max:8}).withMessage("password should be min 5 letters long and max 8 letters long"),register)
app.post("/login",body("email").notEmpty().withMessage("email id is required").isEmail().withMessage("incorrect email"),body("password").notEmpty().withMessage("password is required"),login)
app.use("/cart",cartController)
module.exports=app 