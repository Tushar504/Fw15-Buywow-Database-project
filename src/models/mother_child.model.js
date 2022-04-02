const mongoose = require("mongoose");

const mother_childSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  Dprice: { type: Number, required: true },
  price: { type: String },
  info: { type: String, required: true },
});

module.exports = mongoose.model("mother_child", mother_childSchema);