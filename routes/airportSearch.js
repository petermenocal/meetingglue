var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var request = require("request");

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
    console.log(results);
    var db = mongoUtil.getDb();
    db.collection("hotels").update(
      {
        zip: location
      },
      { closestAirport: results },
      function(err, success) {
        if (err) throw new Error(err);
        res.back();
      }
    );
  });
});

module.exports = router;
