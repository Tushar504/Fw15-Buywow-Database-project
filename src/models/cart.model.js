const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    img:{type:String,required:true},
    title:{type:String,required:true},
    info:{type:String,required:true},
    Dprice:{type:Number,required:true},
    q:{type:Number,required:false,default:1},
    user:{}

})

const Cart=mongoose.model("cart",cartSchema)

module.exports=Cart