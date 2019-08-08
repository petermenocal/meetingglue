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
    if (req.body) {
      var avatar = req.files.avatar;
      var id = req.body.id;
      console.log(id);
      var fileExtension = mime.extension(avatar.mimetype);
      var db = mongoUtil.getDb();
      var timestamp = Date.now();
      avatar.mv(`public/uploads/${id}--${timestamp}.${fileExtension}`, function(
        err
      ) {
        if (err) {
          return res.status(500).send(err);
        }
        db.collection("hotels").updateOne(
          { _id: ObjectID(objId) },
          {
            $addToSet: {
              covers: [`${id}--${timestamp}.${fileExtension}`]
            }
          },
          function(err, result) {
            if (err) throw err;
            res.redirect("back");
          }
        );
      });
    }
    if (req.body.payload_type && req.body.payload_type == "menu_space") {
      var menu_space = req.files.menu_space;
      var id = req.body.id;
      var fileExtension = mime.extension(menu_space.mimetype);
      var db = mongoUtil.getDb();
      menu_space.mv(
        `public/uploads/${id}/menu_space.${fileExtension}`,
        function(err) {
          if (err) {
            return res.status(500).send(err);
          }
          db.collection("hotels").findOneAndUpdate(
            { _id: ObjectID(objId) },
            {
              $set: { menu_space: `menu_space.${fileExtension}` }
            },
            function(err, result) {
              if (err) throw err;
              res.redirect("back");
            }
          );
        }
      );
    }
    if (req.body.payload_type && req.body.payload_type == "menu_banquet") {
      var menu_banquet = req.files.menu_banquet;
      var id = req.body.id;
      var fileExtension = mime.extension(menu_banquet.mimetype);
      var db = mongoUtil.getDb();
      menu_banquet.mv(
        `public/uploads/${id}/menu_banquet.${fileExtension}`,
        function(err) {
          if (err) {
            return res.status(500).send(err);
          }
          db.collection("hotels").findOneAndUpdate(
            { _id: ObjectID(objId) },
            {
              $set: { menu_banquet: `menu_banquet.${fileExtension}` }
            },
            function(err, result) {
              if (err) throw err;
              res.redirect("back");
            }
          );
        }
      );
    }
    if (req.body.payload_type && req.body.payload_type == "menu_av") {
      var menu_av = req.files.menu_av;
      var id = req.body.id;
      var fileExtension = mime.extension(menu_av.mimetype);
      var db = mongoUtil.getDb();
      menu_av.mv(`public/uploads/${id}/menu_av.${fileExtension}`, function(
        err
      ) {
        if (err) {
          return res.status(500).send(err);
        }
        db.collection("hotels").findOneAndUpdate(
          { _id: ObjectID(objId) },
          {
            $set: { menu_av: `menu_av.${fileExtension}` }
          },
          function(err, result) {
            if (err) throw err;
            res.redirect("back");
          }
        );
      });
    }
    if (req.body.payload_type && req.body.payload_type == "menu_capacity") {
      var menu_capacity = req.files.menu_capacity;
      var id = req.body.id;
      var fileExtension = mime.extension(menu_capacity.mimetype);
      var db = mongoUtil.getDb();
      menu_capacity.mv(
        `public/uploads/${id}/menu_capacity.${fileExtension}`,
        function(err) {
          if (err) {
            return res.status(500).send(err);
          }
          db.collection("hotels").findOneAndUpdate(
            { _id: ObjectID(objId) },
            {
              $set: { menu_capacity: `menu_capacity.${fileExtension}` }
            },
            function(err, result) {
              if (err) throw err;
              res.redirect("back");
            }
          );
        }
      );
    }
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
