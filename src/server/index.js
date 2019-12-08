/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */
require("dotenv").config();

import express from "express";
import path from "path";

const mongoose = require("mongoose");
mongoose.set("debug", true); // enable logging collection methods + arguments to the console

// Schema = Mongoose SCHEMA
const Schema = mongoose.Schema;
// DATABASE: trouvkash
// COLLECTION: banks
// bankSchema = new Mongoose SCHEMA
const bankSchema = new Schema(
    {
        country: {type: String, default: "BE"},
        color: {type: String, required: true},
        name: {type: String, required: true},
        icon: {type: String, required: true},
        url: {type: String, required: true},
        created_at: {type: String, required: true},
        updated_at: {type: String, required: true},
        deleted_at: String,
    },
    {collection: "banks"},
);
// Bank = new Mongoose MODEL
const Bank = mongoose.model("Bank", bankSchema);

// preparing FIND ALL in 'banks' COLLECTION
const findBanks = function(done) {
    Bank.find({})
        .sort("name")
        .select("name")
        .exec((err, banksFound) => {
            if (err) {
                return err;
            }
            done(null, banksFound);
            return true;
        });
};

// preparing FIND the ONE in 'banks' COLLECTION from /bank?name=bankName
const getBankByName = function(bankName, done) {
    Bank.findOne({name: bankName}, (err, bankFound) => {
        if (err) {
            return err;
        }
        done(null, bankFound);
        return true;
    });
};

const {APP_PORT} = process.env;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// FETCH BANKS COLLECTION
app.get("/bank", (req, res) => {
    // OPENING MONGODB CONNECTION
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", error => error);
    // END-OF MONGODB CONNECTION

    if (req.query.name) {
        const bankName = req.query.name;
        getBankByName(bankName, (errBank, bank) => {
            if (errBank) {
                return errBank;
            }
            if (bank === null) {
                findBanks((errBanks, banks) => {
                    if (errBanks) {
                        return errBanks;
                    }
                    res.send({banks});
                    return true;
                });
            } else {
                res.send({bank});
            }
            return true;
        });
    } else {
        findBanks((err, banks) => {
            if (err) {
                return err;
            }
            res.send({banks});
            return true;
        });
    }
});
// END-OF FETCH BANKS COLLECTION

// CLOSING MONGODB CONNECTION
// mongoose.connection.close();

app.get("/hello", (req, res) => {
    res.send("Hello, World!");
    return `ℹ️  (${req.method.toUpperCase()}) ${req.url}`;
});

app.listen(APP_PORT, () => `\u2665 Server is listening on port ${APP_PORT}.`);
