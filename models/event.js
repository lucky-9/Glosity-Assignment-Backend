const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please add Event name"]
        },
    description: {
        type: String,
        required: [true, "Please add Event description"]
        },
        image: {
            type: String,
            required: [true, "Please add Event image"]
        } 
    },
    {
    timestamps: true
    }
);

module.exports = mongoose.model("Event", eventSchema);