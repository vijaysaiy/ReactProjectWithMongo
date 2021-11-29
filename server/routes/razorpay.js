const express = require("express");
require("dotenv").config({ path: "../config.env" });
const router = express.Router();

const Razorpay = require("razorpay");
const request = require('request')
const razorpayinstance = new Razorpay({
    key_id:process.env.RAZORPAY_ID,
    key_secret:process.env.RAZORPAY_KEY
})

router.get('/orders')
let options = {
    amount:req.body.amount,
    currency:"INR",
    receipt:"rcp1"
};
instance.orders.create(options,function(err,order){
    console.log(order);res.send({orderId:order.id})
})

module.exports = router;