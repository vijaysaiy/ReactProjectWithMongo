const express = require("express");
require("dotenv").config({ path: "../config.env" });
const router = express.Router();
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");
const User = require("../models/User");

//Update
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get User
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others });
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get all  Users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query ? await User.find().sort({_id: -1}).limit(1) : await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
