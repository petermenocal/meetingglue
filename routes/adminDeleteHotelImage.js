var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mime = require("mime-types");
var mongoUtil = require("../utils/mongoUtil");
var ObjectID = require("mongodb").ObjectID;

/* GET home page. */
router.post("/", localQuery, function(req, res, next) {
  if (req.isAuthenticated()) {
    var db = mongoUtil.getDb();
    var id = req.body.id;
    if (Array.isArray(id)) {
      id = id[0];
    }
    console.log(req.body);
    db.collection("hotels").updateOne(
      { _id: ObjectID(id) },
      {
        $pull: {
          covers: { $in: [`${req.body.image_id}`] }
        }
      },
      function(err, result) {
        if (err) throw err;
        res.redirect("back");
      }
    );
  }
});

module.exports = router;
