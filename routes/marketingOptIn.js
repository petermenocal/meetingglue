var express = require("express");
var router = express.Router();
var mongoUtil = require("../utils/mongoUtil");
var ObjectID = require("mongodb").ObjectID;
const { check, validationResult } = require("express-validator/check");
const uuidv4 = require("uuid/v4");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.sendStatus(200);
});

router.post("/", function(req, res, next) {
  var db = mongoUtil.getDb();
  if (req.body.optInType === "sms") {
    db.collection("optin").insertOne(
      { number: req.body.sms, type: req.body.optInType },
      function(err, result) {
        if (err) throw err;
        res.redirect("/success");
      }
    );
  }
  if (req.body.optInType === "email") {
    db.collection("optin").insertOne(
      { email: req.body.email, type: req.body.optInType },
      function(err, result) {
        if (err) throw err;
        res.redirect("/success");
      }
    );
  }
  if (!req.body.optInType) {
    res
      .type("json")
      .status(400)
      .send({
        status: 400,
        error: `Bad Request`,
        message: `Missing optInType`
      });
  }
});

module.exports = router;
