/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */
import express from "express";
import path from "path";

require("dotenv").config();

const {APP_PORT, PORT} = process.env;
const port = APP_PORT || PORT;

const app = express();
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// OPENING MONGODB CONNECTION
const db = require("./db");
db.on("error", () => false);
db.once("open", () => true);
// END-OF MONGODB CONNECTION

// ROUTING
const terminalsRouter = require("./routes/terminals");
const banksRouter = require("./routes/banks");

app.use("/terminals", terminalsRouter);
app.use("/banks", banksRouter);
// END-OF ROUTING

// CLOSING MONGODB CONNECTION
// mongoose.connection.close();

app.get("/hello", (req, res) => {
    res.send("Hello, World!");
    return `ℹ️  (${req.method.toUpperCase()}) ${req.url}`;
});

// //Heroku
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("../../bin/client/"));
//
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "../../bin/client"));
//     });
// }

app.listen(port, () => `\u2665 Server is listening on port ${port}.`);
