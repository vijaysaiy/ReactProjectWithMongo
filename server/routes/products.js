const express = require("express");
require("dotenv").config({ path: "../config.env" });
const router = express.Router();
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");
const Products = require("../models/Products");

// Create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Products(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Update
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json("Product Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get Product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get all  Products
router.get("/", async (req, res) => {
  const queryCategory = req.query.category;
  try {
    let products;
    if (queryCategory) {
      products = await Products.find({ category: { $in: queryCategory } });
    } else {
      products = await Products.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
