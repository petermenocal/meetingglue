var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var ObjectID = require("mongodb").ObjectID;

/* GET home page. */
router.get("/:productId", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
    var productId = req.params.productId;
    db.collection("hotels").findOne({ _id: ObjectID(productId) }, function(
      err,
      result
    ) {
      if (err) throw err;
      res.render("adminHotel", {
        title: "Hotel admin",
        user: req.user,
        page_name: "admin_product",
        foundProduct: result
      });
    });
  } else {
    res.redirect("/login");
  }
});

/* POST home page. */
router.post("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.body);
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
    var updateObj = req.body;
    var foundUser = db
      .collection("hotels")
      .updateOne(
        { _id: ObjectID(req.body.id) },
        { $set: updateObj },
        { upsert: false },
        function(err, result) {
          if (err) throw err;
          req.flash("notify", "Changes saved.");
          res.redirect("back");
        }
      );
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
