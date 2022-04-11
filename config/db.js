const mongoose = require("mongoose");

exports.connectDB = async () => {
    try {
        const con = mongoose.connect(process.env.mongo_URI);
        console.log("Mongo DB connection successful");
    } catch (error) {
        console.log("Error while connecting to DB: ", error);
        process.exit(1);
    }
}