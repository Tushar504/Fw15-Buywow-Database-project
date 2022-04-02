
const mongoose=require("mongoose")



const bodyScehma= new mongoose.Schema(
    {
     title:{type:String},
     Dprice:{type:Number},
     img:{type:String},
     rate:{type:String},
     role:{ type:String}

})

module.exports=mongoose.model("body_cupids",bodyScehma)
