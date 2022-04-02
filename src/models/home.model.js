
const mongoose=require("mongoose")



const homeScehma= new mongoose.Schema(
    {
     title:{type:String},
     Dprice:{type:Number},
     img:{type:String},
     rate:{type:String},
     role:{ type:String}

})

module.exports=mongoose.model("Home_pages",homeScehma)
