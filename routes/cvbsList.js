var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");

/* GET home page. */
router.get("/", function(req, res, next) {
  var db = mongoUtil.getDb();
  db.collection("cvbs")
    .find({})
    .sort({ name: 1 })
    .toArray(function(err, result) {
      if (err) throw Error;
      var cvbs = result;
      res.render("cvbsList", {
        title: "CVBs",
        page_name: "CVBS",
        cvbs: cvbs
      });
    });
});

module.exports = router;
