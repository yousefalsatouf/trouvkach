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
app.get("/terminals", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, (e, client) => {
    if (e === null) {
      console.log("Terminals Connected");
      const db = client.db("trouvkash");
      const Terminals = db.collection("terminals");
      const latUser = 50.633179;
      const longUser = 5.587107;
      Terminals.aggregate([{
        $match: {
          latitude: {
            $gte: Number(latUser) - 0.01,
            $lte: Number(latUser) + 0.01
          },
          longitude: {
            $gte: Number(longUser) - 0.02,
            $lte: Number(longUser) + 0.02
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
        const latitude = Number(latUser);
        const ratioLat = Math.cos(latUser * Math.PI / 180) * 111;
        const tenKmLat = 1 / ratioLat * 0.75;
        const minLat = latitude - tenKmLat;
        const maxLat = latitude + tenKmLat;
        const longitude = Number(longUser);
        const ratioLong = Math.cos(longUser * Math.PI / 180) * 85;
        const tenKmLong = 1 / ratioLong * 1.5;
        const minLong = longitude - tenKmLong;
        const maxLong = longitude + tenKmLong;
        terminals.forEach((elem, index) => {
          if (Object.getOwnPropertyNames(elem.bankDetails).length <= 1) {
            elem.bankDetails = [{}];
            elem.bankDetails[0].country = "N/A";
          }

          if (elem.latitude > minLat && elem.latitude < maxLat && elem.longitude > minLong && elem.longitude < maxLong) {
            result.push(elem);
          }

          index === terminals.length - 1 && res.json(result);
        });
      });
    }
  });
});
app.get("/:latitude/:longitude", (req, res) => {
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
            $gte: Number(req.params.latitude) - 0.01,
            $lte: Number(req.params.latitude) + 0.01
          },
          longitude: {
            $gte: Number(req.params.longitude) - 0.02,
            $lte: Number(req.params.longitude) + 0.02
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
        const latitude = Number(req.params.latitude);
        const ratioLat = Math.cos(req.params.latitude * Math.PI / 180) * 111;
        const tenKmLat = 1 / ratioLat * 0.75;
        const minLat = latitude - tenKmLat;
        const maxLat = latitude + tenKmLat;
        const longitude = Number(req.params.longitude);
        const ratioLong = Math.cos(req.params.longitude * Math.PI / 180) * 85;
        const tenKmLong = 1 / ratioLong * 1.5;
        const minLong = longitude - tenKmLong;
        const maxLong = longitude + tenKmLong;
        terminals.forEach((elem, index) => {
          if (Object.getOwnPropertyNames(elem.bankDetails).length <= 1) {
            elem.bankDetails = [{}];
            elem.bankDetails[0].country = "N/A";
          }

          if (elem.latitude > minLat && elem.latitude < maxLat && elem.longitude > minLong && elem.longitude < maxLong) {
            result.push(elem);
          }

          index === terminals.length - 1 && res.json(result);
        });
      });
    }
  });
});
app.listen(APP_PORT, () => console.log("RocketIcon Server is listening on port ${APP_PORT}."));
//# sourceMappingURL=index.js.map