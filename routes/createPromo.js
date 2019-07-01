var express = require("express");
var router = express.Router();
var localQuery = require("../utils/localQuery");
var mongoUtil = require("../utils/mongoUtil");
var request = require("request");
var ObjectID = require("mongodb").ObjectID;
var mime = require("mime-types");

/* GET home page. */
router.post("/", function(req, res, next) {
  var db = mongoUtil.getDb();
  var { promo_title, promo_description, promo_link } = req.body;
  if (req.files) {
    let promo_attachment = req.files.promo_attachment;
    let fileExtension = mime.extension(promo_attachment.mimetype);
    promo_attachment.mv(
      `public/image/uploads/promos_${
        req.body.entity_id
      }-${promo_title}.${fileExtension}`,
      function(err) {
        if (err) {
          return res.status(500).send(err);
        }
        db.collection("hotels").findOneAndUpdate(
          {
            _id: ObjectID(req.body.entity_id)
          },
          {
            $addToSet: {
              promos: {
                title: promo_title,
                link: promo_link,
                attachment: `promos_${
                  req.body.entity_id
                }-${promo_title}.${fileExtension}`
              }
            }
          },
          function(err, result) {
            req.flash("notify", "Promo saved.");
            res.redirect("back");
          }
        );
      }
    );
  } else {
    db.collection("hotels").findOneAndUpdate(
      {
        _id: ObjectID(req.body.entity_id)
      },
      {
        $addToSet: {
          promos: {
            title: promo_title,
            link: promo_link
          }
        }
      },
      {
        returnOriginal: true
      },
      function(err, results) {
        if (err) throw new Error(err);
        req.flash("notify", "Promo saved.");
        res.redirect("back");
      }
    );
  }
});

module.exports = router;
