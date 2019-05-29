var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
