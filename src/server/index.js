/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */
import express from "express";
import path from "path";

let {APP_PORT} = process.env;
if (APP_PORT === null || APP_PORT === "") {
    APP_PORT = process.env.PORT;
}
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

app.listen(APP_PORT, () => `\u2665 Server is listening on port ${APP_PORT}.`);
