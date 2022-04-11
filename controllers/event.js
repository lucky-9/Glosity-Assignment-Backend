const asyncHandler = require("express-async-handler");
const Event = require("./../models/event");

//@desc     Get Events
//@route    GET api/events/
//@access   private
exports.getEvents = asyncHandler(async (req, res) => {
    const events = await Event.find();
    res.status(200).json(events);
});


//@desc     Get Events
//@route    GET api/events/
//@access   private
exports.createEvent = asyncHandler(async (req, res) => {
    console.log(req.body);
    if(!req.body.name || !req.body.description || !req.body.image){
        return res.status(400).json({
            error:"please add required fields: name,description,image"
        })
    }
    if(req.body.name.length < 3 || req.body.description.length < 3) {
        return res.status(400).json({
            error:"required fields should be minimum 3 characters"
        })
    }
    if(!req.body.image.length > 3) {
        return res.status(400).json({
            error:"image url should be minimum 3 characters"
        })
    }
    const event = await Event.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
    })
    res.status(200).json(event);
});