var MongoClient = require("mongodb").MongoClient;

var _db;

module.exports = {
  connectToServer: function(callback) {
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
      _db = db.db("mg");
      return callback(err);
    });
  },

  getDb: function() {
    return _db;
  }
};
