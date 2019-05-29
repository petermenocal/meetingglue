var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var ObjectID = require("mongodb").ObjectID;
var _ = require("lodash");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    if (!req.user.admin) res.redirect("/login");
    var db = mongoUtil.getDb();
    var users = [];
    var products = [];
    var inactive;
    var productsWithImages = 0;
    var productsWithoutImages = 0;
    db.collection("users")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        users = result;
        db.collection("products")
          .find({ active: false })
          .toArray(function(err, inactiveResults) {
            inactive = inactiveResults;
            db.collection("products")
              .find({ avatarFilename: { $exists: true } })
              .toArray(function(err, result) {
                productsWithImages = result.length;
                db.collection("products")
                  .find({
                    avatarFilename: { $exists: false },
                    active: true
                  })
                  .toArray(function(err, result) {
                    productsWithoutImages = result.length;
                    console.log(productsWithImages, productsWithoutImages);
                  });
                db.collection("products")
                  .find({ active: true })
                  .toArray(function(err, result) {
                    if (err) throw err;
                    products = result;
                    productsInactive = inactive;
                    res.render("admin", {
                      title: "Admin",
                      user: req.user,
                      page_name: "admin",
                      users: users,
                      products: products,
                      productsWithImages: productsWithImages,
                      productsWithoutImages: productsWithoutImages,
                      productsInactive: productsInactive
                    });
                  });
              });
          });
      });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
