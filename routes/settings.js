var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var ObjectID = require("mongodb").ObjectID;

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render("settings", {
      title: "Settings",
      user: req.session.passport.user,
      page_name: "settings"
    });
  } else {
    res.redirect("/login");
  }
});

router.post("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated) {
    var objId = ObjectID(req.user._id);
    var db = mongoUtil.getDb();
    // TODO -> add a check to make sure we can only write to our own profile

    if (req.body.first_name) {
      db.collection("users").findOneAndUpdate(
        { _id: objId, first_name: { $exists: true } },
        { $set: { first_name: req.body.first_name } }
      );
      req.session.passport.user.first_name = req.body.first_name;
    }
    if (req.body.last_name) {
      db.collection("users").findOneAndUpdate(
        { _id: objId, last_name: { $exists: true } },
        { $set: { last_name: req.body.last_name } }
      );
      req.session.passport.user.last_name = req.body.last_name;
    }
    if (req.body.email) {
      db.collection("users").findOneAndUpdate(
        { _id: objId, email: { $exists: true } },
        { $set: { email: req.body.email } }
      );
      req.session.passport.user.email = req.body.email;
    }
    if (req.body.phone) {
      db.collection("users").findOneAndUpdate(
        { _id: objId, phone: { $exists: true } },
        { $set: { phone: req.body.phone } }
      );
      req.session.passport.user.phone = req.body.phone;
    }
    res.redirect("/settings");
  }
});
module.exports = router;
