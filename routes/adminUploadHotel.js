var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mime = require("mime-types");
var mongoUtil = require("../utils/mongoUtil");
var ObjectID = require("mongodb").ObjectID;

/* GET home page. */

router.post("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    var objId = req.body.id;
    if (!req.files) {
      res.redirect("back");
    }
    if (Object.keys(req.files).length == 0) {
      return res.status(400).send("no files were uploaded");
    }
    let avatar = req.files.avatar;
    console.log(avatar);
    let id = req.body.id;
    let fileExtension = mime.extension(avatar.mimetype);
    var db = mongoUtil.getDb();
    avatar.mv(`public/uploads/${id}.${fileExtension}`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
      db.collection("hotels").findOneAndUpdate(
        { _id: ObjectID(objId) },
        {
          $set: { avatarFilename: `${id}.${fileExtension}` }
        },
        function(err, result) {
          if (err) throw err;
          res.redirect("back");
        }
      );
    });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
