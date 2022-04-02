const express=require("express")
const router=express.Router()

const best= require("../models/product.model")


// _________________________________getting data

router.get("",async(req,res)=>{
try {
    const Best=await best.find().lean().exec()
    return res.status(200).send(Best)
} catch (error) {
    return res.status(500).send({error:error.message})
}
})
module.exports=router