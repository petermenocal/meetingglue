var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var ObjectID = require("mongodb").ObjectID;

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render("profile", {
      title: `${req.session.passport.user.first_name}'s Profile`,
      user: req.session.passport.user,
      page_name: "profile"
    });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
