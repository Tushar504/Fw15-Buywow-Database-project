const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb+srv://surajifastdigital1:surajsunita@cluster0.smgih.mongodb.net/unit4project")
}

module.exports=connect