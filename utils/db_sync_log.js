var request = require("request-promise");
var _ = require("lodash");
var url = "mongodb://localhost:27017/exhalebrands";
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loyalty");
  var entry = {
    completed_on: new Date()
  };
  dbo.collection("log").insertOne(entry, function(err, result) {
    if (err) throw err;
    db.close();
  });
});
