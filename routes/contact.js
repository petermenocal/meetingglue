var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  res.render("contact", {
    title: "Contact",
    page_name: "contact"
  });
});

module.exports = router;
