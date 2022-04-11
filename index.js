const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { connectDB } = require("./config/db");
const eventRoutes = require("./routes/event");



connectDB();

const port = process.env.port ||  5000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));


app.use("/api/events", eventRoutes);


app.listen(port, () => console.log(`server is listening on port ${port}`));
