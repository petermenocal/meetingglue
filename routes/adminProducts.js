var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
    var products = [];
    db.collection("products")
      .find({ active: true })
      .toArray(function(err, result) {
        if (err) throw err;
        products = result;
        res.render("adminProducts", {
          title: "Product administration",
          user: req.user,
          page_name: "admin_products",
          products: products
        });
      });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
