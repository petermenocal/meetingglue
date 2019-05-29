var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator/check");
var mongoUtil = require("../utils/mongoUtil");

/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  res.render("subscribeSuccess", {
    title: "Subscription Success",
    page_name: "subscribe_success"
  });
});
router.post(
  "/",
  [
    check("first_name")
      .isLength({ min: 3 })
      .trim()
      .escape(),
    check("last_name")
      .isLength({ min: 3 })
      .trim()
      .escape()
      .withMessage("must be at least 3 characters long."),
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("must be at least 3 characters long."),
    check("driver_license_number")
      .isLength({ min: 3 })
      .trim()
      .escape()
      .withMessage("must be at least 3 characters long.")
  ],
  function(req, res, next) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("register", { errors: errors.array() });
    }
    var db = mongoUtil.getDb();
    var {
      email,
      password1,
      password2,
      first_name,
      last_name,
      driver_license_number,
      phone
    } = req.body;
    if (password1 === password2) {
      bcrypt.hash(password1, 10, function(err, hash) {
        var query = { email: email };
        var user = {
          email: email,
          password: hash,
          first_name: first_name,
          last_name: last_name,
          phone: phone,
          driver_license_number: driver_license_number,
          createdOn: new Date()
        };
        //check if email exists in system
        db.collection("users").findOne(query, function(err, result) {
          if (err) res.send("err");
          if (result) {
            //we found a result using that email. error out
            res.render("register", {
              error: "That email address is already in use."
            });
          } else {
            //success, email address not in use. proceed with registration.
            //check if driver_license has been recorded in green bits previously
            db.collection("customers")
              .findOne({ driver_license_number: driver_license_number })
              .then(success => {
                if (success) {
                  var combined;
                  combined = { ...success, ...user };
                  var legacyPoints = combined.loyalty_points;
                  var importedRewardsFromLegacyProgram = Math.floor(
                    combined.loyalty_points / 300
                  );
                  var calculatedPoints =
                    combined.loyalty_points -
                    importedRewardsFromLegacyProgram * 300;
                  combined.legacy_loyalty_points = success.loyalty_points;
                  combined.rewards_available = importedRewardsFromLegacyProgram;
                  combined.loyalty_points = calculatedPoints;

                  db.collection("users")
                    .update(query, combined, { upsert: true })
                    .then(success => {
                      req.login(combined, err => {
                        if (req.isAuthenticated()) {
                          res.render("profile", {
                            user: req.session.passport.user
                          });
                        } else {
                          res.redirect("/login", {
                            error: "Could not create account. Try again."
                          });
                        }
                      });
                    })
                    .catch(err => res.send(err));
                } else {
                  db.collection("users")
                    .update(query, user, { upsert: true })
                    .then(success => {
                      req.login(user, err => {
                        if (req.isAuthenticated()) {
                          res.render("profile", { user: req.user });
                        } else {
                          res.redirect("/login", {
                            error: "Could not create account. Try again."
                          });
                        }
                      });
                    });
                  //   .catch(err => res.send(err));
                }
              })
              .catch(err => res.redirect("/register"));
          }
        });
      });
    } else {
      res.redirect("/register");
    }
  }
);

module.exports = router;
