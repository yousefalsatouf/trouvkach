/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */
require('dotenv').config();

import express from "express";
import path from "path";

const mongoose = require("mongoose");
mongoose.set('debug', true) // enable logging collection methods + arguments to the console

// SCHEMA and MODELS
const Schema = mongoose.Schema;
//COLLECTION : banks
const bankSchema = new Schema({
}, { collection: 'banks' });

const peopleSchema = new Schema({
    name: String,
    age: Number,
    favoriteFoods: Array,
}, { collection: 'people' });

const Bank = mongoose.model("Bank", bankSchema);
const Person = mongoose.model("People", peopleSchema);



const { APP_PORT } = process.env;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// MONGODB CONNECTION
app.get("/dbon", (req, res) => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    //res.send("db connection : OPEN");
    res.send('MONGO_URI');
});
// END-OF MONGODB CONNECTION

// MONGODB DISCONNECTION
app.get("/dboff", (req, res) => {
    mongoose.connection.close();
    res.send("db connection : CLOSED");
});
// END-OF MONGODB DISCONNECTION


app.get('/people', (req, res) => {

    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    Person.find({}, function (err, people) {
        console.log(people);
        if (err) return console.log(err);
        res.send({ data: people });
    });

});

// SHOW BANK NAME
app.get('/bank', (req, res) => {

    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    Bank.find({}, function (err, banks) {
        console.log(banks);
        if (err) return console.log(err);
        res.send({ data: banks });
    });


});// END-OF SHOW BANK NAME


app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    //res.send("Hello, World!");
    res.send(process.env.TEST);
});

app.get("/map", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    //res.send("Hello, World!");
    res.send(process.env.TEST);
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
