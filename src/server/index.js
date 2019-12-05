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
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
// END-OF MONGODB CONNECTION

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    //res.send("Hello, World!");

    res.send("db connection closed");
    // MONGODB DISCONNECTION
    mongoose.connection.close();
    // END-OF MONGODB DISCONNECTION
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
