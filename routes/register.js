var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator/check");
var mongoUtil = require("../utils/mongoUtil");
const uuidv4 = require("uuid/v4");
/* GET home page. */
router.get("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render("profile", {
      title: `${req.session.passport.user.first_name}'s profile`,
      user: req.session.passport.user,
      page_name: "profile"
    });
  } else {
    res.render("register", {
      title: "Register",
      page_name: "register"
    });
  }
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
      designation,
      org_name,
      org_address_1,
      org_address_2,
      org_city,
      org_zip,
      org_country,
      work_email,
      work_phone,
      work_ext
    } = req.body;
    if (password1 === password2) {
      bcrypt.hash(password1, 10, function(err, hash) {
        var query = { email: email };
        var user = {
          email: email,
          password: hash,
          first_name: first_name,
          last_name: last_name,
          designation: designation,
          organization: {
            name: org_name,
            address_1: org_address_1,
            address_2: org_address_2,
            city: org_city,
            zip: org_zip,
            country: org_country
          },
          work_email: work_email,
          work_phone: work_phone,
          work_extension: work_ext,
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
            query._id = uuidv4();
            query.id = query._id;
            db.collection("users")
              .update(query, user, { upsert: true })
              .then(success => {
                req.login(user, err => {
                  if (req.isAuthenticated()) {
                    res.redirect("/profile");
                  } else {
                    res.redirect("/login", {
                      error: "Could not create account. Try again."
                    });
                  }
                });
              });
          }
        });
      });
    } else {
      res.redirect("/register");
    }
  }
);

module.exports = router;
