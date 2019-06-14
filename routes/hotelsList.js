var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");

/* GET home page. */
router.get("/", function(req, res, next) {
  var db = mongoUtil.getDb();
  var query = {};
  if (req.query.state) {
    query.state = req.query.state;
    db.collection("hotels")
      .find(query)
      .sort({ title: 1 })
      .toArray(function(err, result) {
        if (err) throw Error;
        var hotels = result;
        res.render("hotelsList", {
          title: "Hotels",
          page_name: "hotels",
          hotels: hotels,
          state: query.state
        });
      });
  } else {
    db.collection("hotels")
      .find(query)
      .sort({ title: 1 })
      .toArray(function(err, result) {
        if (err) throw Error;
        var hotels = result;
        res.render("hotelsList", {
          title: "Hotels",
          page_name: "hotels",
          hotels: hotels
        });
      });
  }
});

module.exports = router;
