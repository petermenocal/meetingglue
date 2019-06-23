var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
    let query = {};
    if (req.query.state) {
      query.state = req.query.state;
    }
    db.collection("hotels")
      .find(query)
      .sort({ title: 1 })
      .toArray(function(err, result) {
        if (err) throw err;
        res.render("adminHotels", {
          title: "Hotel administration",
          user: req.user,
          page_name: "admin_hotels",
          hotels: result
        });
      });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
