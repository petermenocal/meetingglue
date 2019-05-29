var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var ObjectID = require("mongodb").ObjectID;

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
    var users = [];
    var products = [];

    db.collection("users")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        users = result;
        res.render("adminUsers", {
          title: "User administration",
          user: req.user,
          page_name: "admin_users",
          users: users
        });
      });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
