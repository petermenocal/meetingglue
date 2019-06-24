var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var request = require("request");
var ObjectID = require("mongodb").ObjectID;

/* GET home page. */
router.post("/", function(req, res, next) {
  let location = req.body.location;
  var postData = {
    location: location,
    minimumLength: 1000
  };
  var url = "https://flightwise.com/ws/fl3.asmx/AirportsNear";
  var options = {
    method: "post",
    body: postData,
    json: true,
    url: url
  };
  request(options, function(err, response, body) {
    if (err) {
      console.error("error posting json: ", err);
      throw err;
    }
    var headers = response.headers;
    var statusCode = response.statusCode;
    var results = [];
    results.push(body.d[0], body.d[1]);
    var db = mongoUtil.getDb();
    db.collection("hotels").findOneAndUpdate(
      {
        _id: ObjectID(req.body.entity_id)
      },
      {
        $set: {
          closestAirport: `${results[0].Code} ${Math.round(
            results[0].Distance * 100
          ) / 100}mi. | ${results[1].Code} ${Math.round(
            results[1].Distance * 100
          ) / 100}mi.`
        }
      },
      {
        returnOriginal: true
      },
      function(err, results) {
        if (err) throw new Error(err);
        console.log(err, results);
        res.redirect("back");
      }
    );
  });
});

module.exports = router;
