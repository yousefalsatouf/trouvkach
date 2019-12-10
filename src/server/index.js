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
const {APP_PORT} = process.env;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URI;

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/banks", (req, res) => {
    console.log(`ℹ️ (${req.method.toUpperCase()}) ${req.url}`);

    MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
        if (err === null) {
            console.log("Banks Connected");

            const db = client.db("trouvkash");
            const Banks = db.collection("banks");

            Banks.find({}).toArray((e, banks) => {
                res.send({
                    banks: banks,
                });
            });
        }
    });
});

app.get("/terminals", (req, res) => {
    console.log(`ℹ️ (${req.method.toUpperCase()}) ${req.url}`);
    MongoClient.connect(url, {useUnifiedTopology: true}, (e, client) => {
        if (e === null) {
            console.log("Terminals Connected");

            const db = client.db("trouvkash");
            const Terminals = db.collection("terminals");

            Terminals.find({}).toArray((e, terminals) => {
                res.send({
                    terminals: terminals,
                });
            });
        }
    });
});

app.listen(APP_PORT, () =>
    console.log("RocketIcon Server is listening on port ${APP_PORT}."),
);