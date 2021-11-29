require("dotenv").config({path:"../config.env"});
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Mongodb connection Sucessful")
    }catch(error) {
        console.log("Mongodb connection failed")
        process.exit(1);

    }
}
module.exports = connectDB;