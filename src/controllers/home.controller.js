const express=require("express")
const router=express.Router()

const home= require("../models/home.model.js")


// _________________________________getting data

router.get("",async(req,res)=>{
try {
    const Home=await home.find().lean().exec()
    return res.status(200).send(Home)
} catch (error) {
    return res.status(500).send({error:error.message})
}
})
module.exports=router