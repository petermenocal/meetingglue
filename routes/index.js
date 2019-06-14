var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
let Parser = require("rss-parser");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  let parser = new Parser();
  var industryNews = [];
  (async () => {
    let feed = await parser.parseURL("http://smartmeetings.com/feed");
    feed.items.forEach((item, idx) => {
      if (idx < 5) {
        industryNews.push(item);
      }
    });
    res.render("home", {
      title: "Home",
      page_name: "home",
      news: industryNews
    });
  })();
});

module.exports = router;
