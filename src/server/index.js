/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by yousef
 * started at 03/12/2019
 */

require("dotenv").config();

import express from "express";
import path from "path";

const app = express();
const mongoose = require("mongoose");
const {APP_PORT, PORT} = process.env;
const port = APP_PORT || PORT;

mongoose.set("debug", true); // enable logging collection methods + arguments to the console

// SCHEMA and MODELS
const Schema = mongoose.Schema;
//COLLECTION : banks
const bankSchema = new Schema({}, {collection: "banks"});
const terminalSchema = new Schema({}, {collection: "terminals"});

const Bank = mongoose.model("Bank", bankSchema);
const Terminal = mongoose.model("Terminal", terminalSchema);

const url = process.env.MONGO_URI;

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/banks", (req, res) => {
    console.log(`ℹ️ (${req.method.toUpperCase()}) ${req.url}`);

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    Bank.find({}, (err, banks) => {
        console.log(banks);
        if (err) {
            return console.log(err);
        }
        res.json({data: banks});
    });
});

app.get("/terminals", (req, res) => {
    console.log(`ℹ️ (${req.method.toUpperCase()}) ${req.url}`);

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    Terminal.find({}, (err, terminals) => {
        console.log(terminals);
        if (err) {
            return console.log(err);
        }
        res.json({data: terminals});
    });
});

app.get("/hello", (req, res) => {
    console.log(`ℹ️ (${req.method.toUpperCase()}) ${req.url}`);

    res.send("Hello world !");
});

app.listen(port, () =>
    console.log(`RocketIcon Server is listening on port ${port}.`),
);
