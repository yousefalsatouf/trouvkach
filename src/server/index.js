/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";

const mongoose = require("mongoose");

const {APP_PORT} = process.env;
const {MONGO_URI} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// MONGODB CONNECTION
app.get("/dbon", (req, res) => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    res.send("db connection : OPEN");
});
// END-OF MONGODB CONNECTION

// MONGODB DISCONNECTION
app.get("/dboff", (req, res) => {
    mongoose.connection.close();
    res.send("db connection : CLOSED");
});
// END-OF MONGODB DISCONNECTION

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
