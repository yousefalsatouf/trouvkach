const mongoose = require("mongoose");
mongoose.set("debug", true); // enable logging collection methods + arguments to the console
require("dotenv").config();

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;
