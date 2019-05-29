var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  res.render("home", { title: "Home", page_name: "home" });
});

module.exports = router;
