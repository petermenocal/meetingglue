var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var ObjectID = require("mongodb").ObjectID;

/* POST home page. */
router.post("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
    var updateObj = { salesStaff: req.body };
    if (req.body.isDeleteStaff) {
      var foundUser = db.collection("cvbs").updateOne(
        { _id: new ObjectID(req.body.id) },
        {
          $pull: { salesStaff: { salesperson_name: req.body.name } }
        },
        function(err, result) {
          if (err) throw err;
          req.flash("notify", "Changes saved.");
          res.redirect("back");
        }
      );
      return;
    } else {
      var foundUser = db
        .collection("cvbs")
        .updateOne(
          { _id: new ObjectID(req.body.id) },
          { $addToSet: updateObj },
          { upsert: false },
          function(err, result) {
            if (err) throw err;
            req.flash("notify", "Changes saved.");
            res.redirect("back");
          }
        );
    }
  } else {
    res.redirect("/login");
  }
});

router.post("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
  }
});
module.exports = router;
