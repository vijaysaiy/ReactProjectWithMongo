const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
   
    name: { type: String, require: true },
    imgSrc: { type: String, require: true, },
    price: { type: Number, require: true },
    mrp: { type: Number, require: true },
    category: { type: String }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products",ProductSchema);