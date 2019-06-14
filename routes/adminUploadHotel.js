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
    if (!req.body) {
      let avatar = req.files.avatar;
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
    }
    if (req.body.payload_type && req.body.payload_type == "menu_space") {
      let menu_space = req.files.menu_space;
      let id = req.body.id;
      let fileExtension = mime.extension(menu_space.mimetype);
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
      let menu_banquet = req.files.menu_banquet;
      let id = req.body.id;
      let fileExtension = mime.extension(menu_banquet.mimetype);
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
      let menu_av = req.files.menu_av;
      let id = req.body.id;
      let fileExtension = mime.extension(menu_av.mimetype);
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
      let menu_capacity = req.files.menu_capacity;
      let id = req.body.id;
      let fileExtension = mime.extension(menu_capacity.mimetype);
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
