const express=require("express")

const router=express.Router()
const authenticate=require("../middlewares/authenticate")
const Cart=require("../models/cart.model")

router.get("/",authenticate,async(req,res) => {

    try {
        const cart = await Cart.find({user:req.user}).lean().exec();
       
        res.status(201).send(cart);
    } catch (error) {
        res.status(501).send({error:error.message});
    }
})

router.patch("/:id",async (req,res) => {
    try {
        let cart = await Cart.findByIdAndUpdate(req.params.id,req.body)
        res.send(cart)
    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id",async (req,res) => {

   try{

      let cart = await Cart.findByIdAndDelete(req.params.id);
    return  res.send(cart)
   }catch(err){
     res.send(err)
   }

})

router.post("/addtocart",authenticate,async(req,res)=>{
    try {
        const cart=await Cart.create({
            img:req.body.img,
            title:req.body.title,
            info:req.body.info,
            Dprice:req.body.Dprice,
            user:req.user
        })
      
        return res.send(cart)
    } 
    catch (error) {
        return res.send(error.message)
    }
})



module.exports=router