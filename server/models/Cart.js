const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    _id: { type: String },    
    name: { type: String, require: true },
    imgSrc: { type: String, require: true },
    price: { type: Number, require: true },
    mrp: { type: Number, require: true },
    category: { type: String },
    quantity: { type: Number, default: 1 },
    subTotalPrice: { type: Number, default:0}
  },

  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
