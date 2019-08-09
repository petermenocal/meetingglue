var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var ObjectId = require("mongodb").ObjectID;
var eventful = require("eventful-node");
var client = new eventful.Client("MqT92mHZj8rk5xwx");
var _ = require("lodash");
var Twit = require("twit");

router.get("/:id", localQuery, function(req, res, next) {
  var db = mongoUtil.getDb();
  var hotelId = req.params.id;
  var T = new Twit({
    consumer_key: "lE3xRhMnu2vu1hrnRwP0CZgRN",
    consumer_secret: "LQt4QH66okjWahikdDn2PPA0hREjdN2RcsuuvAk5WizBfNj2ph",
    access_token: "265805403-6cPMdiOttt4hfFQlFEeliFbyQMObCWkY67QGv7lk",
    access_token_secret: "f0itACktYeSakP9K3yhwv5fFyrWhQZo1rhLrh9sNTbAwY"
  });
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
    var tweets;
    var options = { screen_name: result.twitter, count: 2 };
    T.get("statuses/user_timeline", options, function(err, data) {
      tweets = data;
    });
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
          hotel: result,
          tweets: tweets
        });
      }
    );
  });
});

module.exports = router;
