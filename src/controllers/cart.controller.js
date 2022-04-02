const express=require("express")

const router=express.Router()
const authenticate=require("../middlewares/authenticate")
const Cart=require("../models/cart.model")

router.post("/addtocart",authenticate,async(req,res)=>{
    try {
        const cart=await Cart.create({
            img:req.body.img,
            title:req.body.title,
            info:req.body.info,
            Dprice:req.body.Dprice,
            user:req.user
        })
        console.log(req.user)
        return res.send(cart)
    } 
    catch (error) {
        return res.send(error.message)
    }
})



module.exports=router