
/*
require("dotenv").config();

import express from "express";
import path from "path";

const app = express();
const { APP_PORT } = process.env;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URI;

/*
const mongoose = require("mongoose");
mongoose.set("debug", true); // enable logging collection methods + arguments to the console
// SCHEMA and MODELS
const Schema = mongoose.Schema;
//COLLECTION : banks
const bankSchema = new Schema({}, { collection: "banks" });
const terminalSchema = new Schema({}, { collection: "terminals" });

const Bank = mongoose.model("Bank", bankSchema);
const Terminal = mongoose.model("Terminal", terminalSchema);


app.get("/banksMongoose", (req, res) => {
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
        res.json(banks);
    });
});

app.get("/terminalsMongoose", (req, res) => {
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
        res.json({ data: terminals });
    });
});

*/
/*
app.get("/banks", (req, res) => {
    console.log(`ℹ️ (${req.method.toUpperCase()}) ${req.url}`);

    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err === null) {
            console.log("Banks Connected");

            const db = client.db("trouvkash");
            const Banks = db.collection("banks");

            Banks.find({}).toArray((e, banks) => {
                res.json(
                    banks
                );
            });
        }
    });
});

app.get("/terminals", (req, res) => {
    console.log(`ℹ️ (${req.method.toUpperCase()}) ${req.url}`);
    MongoClient.connect(url, { useUnifiedTopology: true }, (e, client) => {
        if (e === null) {
            console.log("Terminals Connected");

            const db = client.db("trouvkash");
            const Terminals = db.collection("terminals");

            Terminals.find({}).toArray((e, terminals) => {
                res.json(
                    terminals
                );
            });
        }
    });
});

app.get("/imbecile/:latitude/:longitude", (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, (e, client) => {
        if (e === null) {
            console.log("Terminals Connected");

            const db = client.db("trouvkash");
            const Terminals = db.collection("terminals");

            Terminals.aggregate([

                {
                    $match: {
                        latitude: {
                            $gte: Number(req.params.latitude) - 0.1,
                            $lte: Number(req.params.latitude) + 0.1,
                        },

                        longitude: {
                            $gte: Number(req.params.longitude) - 0.2,
                            $lte: Number(req.params.longitude) + 0.2,
                        },
                    }

                },

                {
                    $lookup: {
                        from: "banks",
                        localField: "bank",
                        foreignField: "_id",
                        as: "bankDetails"
                    }
                }
            ])
                .toArray((e, terminals) => {
                    const result = [];
                    terminals.forEach((elem, index) => {
                        if (Object.getOwnPropertyNames(elem.bankDetails).length <= 1) {
                            elem.bankDetails = [{}];
                            elem.bankDetails[0].country = "N/A";
                        }
                        result.push(elem);
                        index === terminals.length - 1 && res.json(result);
                    })
                })
        }
    })
})

app.listen(APP_PORT, () =>
    console.log("RocketIcon Server is listening on port ${APP_PORT}."),
);
*/
