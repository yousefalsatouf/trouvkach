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
        res.json(banks);
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
        res.json(terminals);
      });
    }
  });
});
app.get("/imbecile/:latitude/:longitude", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, (e, client) => {
    if (e === null) {
      console.log("Terminals Connected");
      const db = client.db("trouvkash");
      const Terminals = db.collection("terminals");
      Terminals.aggregate([{
        $match: {
          latitude: {
            $gte: Number(req.params.latitude) - 0.1,
            $lte: Number(req.params.latitude) + 0.1
          },
          longitude: {
            $gte: Number(req.params.longitude) - 0.2,
            $lte: Number(req.params.longitude) + 0.2
          }
        }
      }, {
        $lookup: {
          from: "banks",
          localField: "bank",
          foreignField: "_id",
          as: "bankDetails"
        }
      }]).toArray((e, terminals) => {
        const result = [];
        terminals.forEach((elem, index) => {
          if (Object.getOwnPropertyNames(elem.bankDetails).length <= 1) {
            elem.bankDetails = [{}];
            elem.bankDetails[0].country = "N/A";
          }

          result.push(elem);
          index === terminals.length - 1 && res.json(result);
        });
      });
    }
  });
});
app.listen(APP_PORT, () => console.log("RocketIcon Server is listening on port ${APP_PORT}."));
//# sourceMappingURL=index.js.map