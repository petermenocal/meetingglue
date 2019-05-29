var request = require("request-promise");
var _ = require("lodash");
var url = "mongodb://localhost:27017/exhalebrands";
var MongoClient = require("mongodb").MongoClient;

let inventoryItems = [];

const go = async () => {
  const userCount = await findInventoryCount();
  syncRoutine();
};

const findInventoryCount = async () => {
  var limit = 1;
  var offset = 0;
  var total = 0;
  var requestOptions = {
    method: "GET",
    url: `https://api.greenbits.com/api/v2/inventory_items`,
    qs: {
      limit: limit,
      offset: offset
    },
    headers: {
      "x-gb-client": "herer-web bbbb2e418b",
      "x-gb-companyid": "2d7a8d6c-cded-4dd9-b9e9-dce5ae187bfb",
      authorization: 'Token token="5EYTXbRtQ7LGlReA6FSUFg"'
    }
  };
  await request(requestOptions, function(error, response, body) {
    if (error) throw new Error(error);
    var resBody = JSON.parse(response.body);
    var total = resBody.meta.total;
    console.log(`Total entities found: ${total}`);
    return total;
  });
};

const syncRoutine = async () => {
  let records = [];
  let keepGoing = true;
  let offset = 0;
  while (keepGoing) {
    let response = await getInventoryItem(offset);
    await records.push.apply(records, response);
    offset += 1000;
    console.log(`records length ${records.length}`);
    console.log(`offset ${offset}`);
    if (response.length < 1000) {
      keepGoing = false;

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("loyalty");
        dbo.collection("inventory").insertMany(records, function(err, res) {
          if (err) throw err;
          db.close();
        });
      });
      return records;
    }
  }
};

const getInventoryItem = async offset => {
  var limit = 1000;
  var requestOptions = {
    method: "GET",
    url: `https://api.greenbits.com/api/v2/inventory_items`,
    qs: {
      limit: limit,
      offset: offset
    },
    headers: {
      "x-gb-client": "herer-web bbbb2e418b",
      "x-gb-companyid": "2d7a8d6c-cded-4dd9-b9e9-dce5ae187bfb",
      authorization: 'Token token="5EYTXbRtQ7LGlReA6FSUFg"'
    }
  };
  let payload = await request(requestOptions, function(err, response) {
    let body = JSON.parse(response.body);
    return body.inventory_items;
  });
  let parsedResponse = JSON.parse(payload);
  return parsedResponse.inventory_items;
};

go();

// https://api.greenbits.com/api/v2/people?by_query=P708052626&limit=1
