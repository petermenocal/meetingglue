var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var ObjectId = require("mongodb").ObjectID;
var eventful = require("eventful-node");
var client = new eventful.Client("MqT92mHZj8rk5xwx");
var _ = require("lodash");

router.get("/:id", localQuery, function(req, res, next) {
  var db = mongoUtil.getDb();
  var hotelId = req.params.id;
  if (!hotelId) {
    throw Error;
  }
  if (!ObjectId.isValid(hotelId)) {
    return Promise.reject(new TypeError(`Invalid id: ${id}`));
  }
  db.collection("hotels").findOne({ _id: ObjectId(hotelId) }, function(
    err,
    result
  ) {
    if (err) throw Error;
    client.searchEvents(
      { location: `${result.city}, ${result.state}` },
      function(err, data) {
        if (err) {
          return console.error(err);
        }
        var events = [];
        _.forEach(data.search.events, function(e) {
          events.push(e);
        });
        var eventsFlat = _.flatten(events);
        result.events = eventsFlat.slice(0, 3);

        res.render("profileHotel", {
          title: "Hotel Profile",
          page_name: "profile_hotel",
          hotel: result
        });
      }
    );
  });
});

module.exports = router;
