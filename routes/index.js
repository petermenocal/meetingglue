var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
let Parser = require("rss-parser");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  let parser = new Parser();
  var industryNews = [];
  var hotOpenings = [];
  var featuredOpenings = [];
  (async () => {
    let feed = await parser.parseURL(
      "https://www.hospitalitynet.org/news/us.xml"
    );
    feed.items.forEach((item, idx) => {
      if (idx < 5) {
        industryNews.push(item);
      }
    });
    let openings = await parser.parseURL(
      "https://www.hospitalitynet.org/news/openings.xml"
    );
    openings.items.forEach((item, idx) => {
      if (idx < 8) {
        hotOpenings.push(item);
      }
      if (idx > 7 && idx < 10) {
        featuredOpenings.push(item);
      }
    });
    console.log(hotOpenings);
    res.render("home", {
      title: "Home",
      page_name: "home",
      news: industryNews,
      openings: hotOpenings,
      featuredOpenings: featuredOpenings
    });
  })();
});

module.exports = router;
