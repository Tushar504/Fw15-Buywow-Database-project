
const mongoose=require("mongoose")



const summerScehma= new mongoose.Schema(
    {
     title:{type:String},
     Dprice:{type:Number},
     img:{type:String},
     rate:{type:String},
     role:{ type:String}

})

module.exports=mongoose.model("summer_essentials",summerScehma)
