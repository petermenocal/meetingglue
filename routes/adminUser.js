var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var ObjectID = require("mongodb").ObjectID;

/* GET home page. */
router.get("/:userId", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
    var userId = ObjectID(req.params.userId);
    db.collection("users").findOne({ _id: userId }, function(err, result) {
      if (err) throw err;
      res.render("adminUser", {
        title: "User admin",
        user: req.user,
        page_name: "admin_user",
        foundUser: result
      });
    });
  } else {
    res.redirect("/login");
  }
});

/* POST home page. */
router.post("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
    var userIdString = req.body.id;
    var userId = ObjectID(userIdString);
    var { first_name, last_name, removeUser, id, admin } = req.body;
    var updateObj = {};
    if (removeUser) {
      db.collection("users").deleteOne({ _id: userId }, function(err, obj) {
        if (err) throw err;
        res.redirect("/admin/users");
        return;
      });
      return;
    }
    if (first_name) {
      updateObj.first_name = first_name;
    }
    if (admin) {
      updateObj.admin = admin;
    }
    if (last_name) {
      updateObj.last_name = last_name;
    }
    var foundUser = db
      .collection("users")
      .updateOne(
        { _id: new ObjectID(req.body.id) },
        { $set: updateObj },
        { upsert: false },
        function(err, result) {
          console.log(result);
          if (err) throw err;
          res.redirect("back");
        }
      );
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
