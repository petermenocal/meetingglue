var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var eventful = require("eventful-node");
var client = new eventful.Client("MqT92mHZj8rk5xwx");

/* GET home page. */
router.post("/", function(req, res, next) {
  let location = req.body.location;
  client.searchEvents({ location: location }, function(err, data) {
    if (err) {
      return console.error(err);
    }
    res.json(data.search.events);
  });
});

module.exports = router;
