var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
    db.collection("cvbs")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.render("adminCvbs", {
          title: "Product administration",
          user: req.user,
          page_name: "admin_cvbs",
          cvbs: result
        });
      });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
