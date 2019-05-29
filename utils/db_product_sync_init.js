var request = require("request-promise");
var _ = require("lodash");
var url = "mongodb://localhost:27017/exhalebrands";
var MongoClient = require("mongodb").MongoClient;
var $ = require("mongo-dot-notation");

let products = [];

const go = async () => {
  const productsCount = await findTotalProducts();
  syncRoutine();
};

const findTotalProducts = async () => {
  var limit = 1;
  var offset = 0;
  var total = 0;
  var requestOptions = {
    method: "GET",
    url: `https://api.greenbits.com/api/v2/products`,
    qs: {
      "by_sell_price[comparator]": ">=",
      "by_sell_price[sell_price]": "300",
      offset: offset,
      limit: limit
    },
    headers: {
      "x-GB-Client": "herer-web bbbb2e418b",
      "X-GB-CompanyId": "1bdba944-1f28-40e8-8f6c-253d6bc6cb8f",
      authorization: 'Token token="5EYTXbRtQ7LGlReA6FSUFg"'
    }
  };
  await request(requestOptions, function(error, response, body) {
    if (error) throw new Error(error);
    var resBody = JSON.parse(response.body);
    var totalProducts = resBody.meta.total;
    console.log(`Total products found: ${totalProducts}`);
    return totalProducts;
  });
};

const syncRoutine = async () => {
  let records = [];
  let keepGoing = true;
  let offset = 0;
  while (keepGoing) {
    let response = await getProducts(offset);
    await records.push.apply(records, response);
    offset += 1000;
    console.log(`records length ${records.length}`);
    console.log(`offset ${offset}`);
    if (response.length < 1000) {
      keepGoing = false;
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("loyalty");
        var definedIds = _.forEach(records, r => (r._id = r.id));
        _.forEach(definedIds, function(product) {
          var pp = _.pickBy(product, _.identity);
          var pp2 = _.pickBy(product, _.identity);
          delete pp2.sell_price;
          delete pp2.active;
          var updateIns = $.flatten(pp);
          if (!pp.active) {
            pp.active = false;
          }
          dbo.collection("products").update(
            { _id: pp._id },
            {
              $set: {
                sell_price: pp.sell_price,
                active: pp.active
              },
              $setOnInsert: pp2
            },
            { upsert: true },
            function(err, res) {
              if (err) throw err;
              return;
            }
          );
        });
        db.close();
      });
      return records;
    }
  }
};

const getProducts = async offset => {
  var limit = 1000;
  var requestOptions = {
    method: "GET",
    url: `https://api.greenbits.com/api/v2/products`,
    qs: {
      "by_sell_price[comparator]": ">=",
      "by_sell_price[sell_price]": "300",
      offset: offset,
      limit: limit
    },
    headers: {
      "x-gb-client": "herer-web bbbb2e418b",
      "X-GB-CompanyId": "1bdba944-1f28-40e8-8f6c-253d6bc6cb8f",
      authorization: 'Token token="5EYTXbRtQ7LGlReA6FSUFg"'
    }
  };
  let payload = await request(requestOptions, function(err, response) {
    let body = JSON.parse(response.body);
    return body.products;
  });
  let parsedResponse = JSON.parse(payload);
  return parsedResponse.products;
};

go();

// https://api.greenbits.com/api/v2/people?by_query=P708052626&limit=1
