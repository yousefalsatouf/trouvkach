"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();

const app = (0, _express.default)();
const {
  APP_PORT
} = process.env;

const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URI;
app.use(_express.default.static(_path.default.resolve(__dirname, "../../bin/client")));
app.get("/banks", (req, res) => {
  console.log(`ℹ️ (${req.method.toUpperCase()}) ${req.url}`);
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err === null) {
      console.log("Banks Connected");
      const db = client.db("trouvkash");
      const Banks = db.collection("banks");
      Banks.find({}).toArray((e, banks) => {
        res.send({
          banks: banks
        });
      });
    }
  });
});
app.get("/terminals", (req, res) => {
  console.log(`ℹ️ (${req.method.toUpperCase()}) ${req.url}`);
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, (e, client) => {
    if (e === null) {
      console.log("Terminals Connected");
      const db = client.db("trouvkash");
      const Terminals = db.collection("terminals");
      Terminals.find({}).toArray((e, terminals) => {
        res.send({
          terminals: terminals
        });
      });
    }
  });
});
app.listen(APP_PORT, () => console.log("RocketIcon Server is listening on port ${APP_PORT}."));
//# sourceMappingURL=index.js.map