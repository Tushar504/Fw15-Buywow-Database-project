const express=require("express")
const router=express.Router()

const body= require("../models/body.model")


// _________________________________getting data

router.get("",async(req,res)=>{
try {
    const Body=await body.find().lean().exec()
    
    return res.status(200).send(Body)
} catch (error) {
    return res.status(500).send({error:error.message})
}
})
module.exports=router