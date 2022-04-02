const mongoose = require("mongoose");

const wellnessSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  Dprice: { type: Number, required: true },
  price: { type: String },
  info: { type: String, required: true },
});

module.exports = mongoose.model("wellness", wellnessSchema);