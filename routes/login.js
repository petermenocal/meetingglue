var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var passport = require("passport");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  var error;
  if (req.query.error) {
    error = req.query.error;
  }
  if (req.isAuthenticated()) {
    res.render("profile", {
      title: `${req.session.passport.user.first_name}'s profile`,
      user: req.session.passport.user,
      page_name: "profile"
    });
  } else {
    res.render("login", { title: "Login", error: error, page_name: "login" });
  }
});

router.post("/", localQuery, (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login?error=Login failed. Try again.",
    failureFlash: false
  })(req, res, next);
});

module.exports = router;
