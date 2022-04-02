const mongoose = require("mongoose")


const searchSchema = new mongoose.Schema(
    {
        img: { type: String, required: true },
        title: { type: String, required: false },
        Dprice: { type: Number, required: false },
        price: { type: Number, required: false },
        info: { type: String, required: false },

    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // Step 2 : creating the model
  const  Search = mongoose.model("search result", searchSchema); // user => users
  
  module.exports = Search
