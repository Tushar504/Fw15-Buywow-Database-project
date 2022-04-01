const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    img:{type:String,required:true},
    title:{type:String,required:true},
    info:{type:String,required:true},
    Dprice:{type:Number,required:true},
    user:{}

})

const Cart=mongoose.model("cart",cartSchema)

module.exports=Cart