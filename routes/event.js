const express = require("express");
const router = express.Router();

const { createEvent, getEvents } = require("../controllers/event");

router.get("/", getEvents);
router.post("/", createEvent);




module.exports = router;