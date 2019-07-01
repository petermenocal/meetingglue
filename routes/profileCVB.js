var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var ObjectId = require("mongodb").ObjectID;
var Twit = require("twit");

router.get("/:id", localQuery, function(req, res, next) {
  var T = new Twit({
    consumer_key: "lE3xRhMnu2vu1hrnRwP0CZgRN",
    consumer_secret: "LQt4QH66okjWahikdDn2PPA0hREjdN2RcsuuvAk5WizBfNj2ph",
    access_token: "265805403-6cPMdiOttt4hfFQlFEeliFbyQMObCWkY67QGv7lk",
    access_token_secret: "f0itACktYeSakP9K3yhwv5fFyrWhQZo1rhLrh9sNTbAwY"
  });

  var db = mongoUtil.getDb();
  var hotelId = req.params.id;
  if (!hotelId) {
    throw Error;
  }
  if (!ObjectId.isValid(hotelId)) {
    return Promise.reject(new TypeError(`Invalid id: ${id}`));
  }
  var hotelsInArea = [];
  db.collection("cvbs").findOne({ _id: ObjectId(hotelId) }, function(
    err,
    result
  ) {
    if (err) throw Error;
    db.collection("hotels")
      .find({ city: result.city })
      .toArray(function(err, result2) {
        var promosInArea = [];
        for (let index = 0; index < result2.length; index++) {
          const element = result2[index];
          if (element.promos && element.promos.length) {
            element.promos.forEach(e => {
              e.hotel = element.title;
              promosInArea.push(e);
            });
          }
        }
        console.log(promosInArea);
        var options = { screen_name: result.twitter, count: 2 };
        var userTweets;
        T.get("statuses/user_timeline", options, function(err, data) {
          userTweets = data;
          res.render("profileCVB", {
            title: "CVB Profile",
            page_name: "profile_cvb",
            cvb: result,
            hotelsInArea: result2,
            promosInArea: promosInArea,
            tweets: userTweets
          });
        });
      });
  });
});

module.exports = router;
