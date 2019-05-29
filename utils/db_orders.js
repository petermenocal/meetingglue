var _ = require("lodash");
var url = "mongodb://localhost:27017/exhalebrands";
var MongoClient = require("mongodb").MongoClient;
var $ = require("mongo-dot-notation");
var limit = require("simple-rate-limiter");
var request = limit(require("request"))
  .to(10)
  .per(3000);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loyalty");
  dbo
    .collection("users")
    .find({})
    .toArray(function(err, docs) {
      foo(docs);
      db.close();
    });
});

function foo(customers) {
  _.forEach(customers, function(c) {
    _.forEach(c.order_ids, function(order) {
      var options = {
        method: "GET",
        url: `https://api.greenbits.com/api/v2/orders/${order}`,
        // url: `https://api.greenbits.com/api/v2/orders/FB4D5001-59CF-45F5-8A79-6A5C2C28F950?_=1557180897890`,
        headers: {
          authorization: 'Token token="5EYTXbRtQ7LGlReA6FSUFg"',
          "x-gb-companyid": "1bdba944-1f28-40e8-8f6c-253d6bc6cb8f",
          "x-gb-client": "herer-web db7cbada98"
        }
      };
      unwindOrders(c._id, options);
    });
  });
}

const unwindOrders = async (customerId, options) => {
  await request(options, function(error, response, body) {
    if (error) throw new Error(error);
    let b = JSON.parse(response.body);

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("loyalty");
      dbo
        .collection("users")
        .findOneAndUpdate(
          { _id: customerId },
          { $addToSet: { orders: b.order } }
        );
    });
  });
};
