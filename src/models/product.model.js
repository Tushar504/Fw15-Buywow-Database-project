
const mongoose=require("mongoose")



const bestScehma= new mongoose.Schema(
    {
     title:{type:String},
     Dprice:{type:Number},
     img:{type:String},
     rate:{type:String},
     role:{ type:String}

})

module.exports=mongoose.model("best_selling",bestScehma)
