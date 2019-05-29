var request = require("request-promise");
var _ = require("lodash");
var url = "mongodb://localhost:27017/exhalebrands";
var MongoClient = require("mongodb").MongoClient;

let products = [];

const go = async () => {
  const brandsCount = await findTotalBrands();
  syncRoutine();
};

const findTotalBrands = async () => {
  var limit = 1;
  var offset = 0;
  var total = 0;
  var requestOptions = {
    method: "GET",
    url: `https://api.greenbits.com/api/v2/brands`,
    qs: {
      limit: 1
    },
    headers: {
      "x-gb-client": "herer-web bbbb2e418b",
      "X-GB-CompanyId": "1bdba944-1f28-40e8-8f6c-253d6bc6cb8f",
      authorization: 'Token token="5EYTXbRtQ7LGlReA6FSUFg"'
    }
  };
  await request(requestOptions, function(error, response, body) {
    if (error) throw new Error(error);
    var resBody = JSON.parse(response.body);
    var total = resBody.meta.total;
    console.log(`Total brands found: ${total}`);
    return total;
  });
};

const syncRoutine = async () => {
  let records = [];
  let keepGoing = true;
  let offset = 0;
  while (keepGoing) {
    let response = await getBrands(offset);
    await records.push.apply(records, response);
    offset += 1000;
    console.log(`records length ${records.length}`);
    console.log(`offset ${offset}`);
    if (response.length < 1000) {
      keepGoing = false;
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("loyalty");
        dbo.collection("brands").insertMany(records, function(err, res) {
          if (err) throw err;
          db.close();
        });
      });
      return records;
    }
  }
};

const getBrands = async offset => {
  var limit = 1000;
  var requestOptions = {
    method: "GET",
    url: `https://api.greenbits.com/api/v2/brands`,
    qs: {
      limit: limit,
      offset: offset
    },
    headers: {
      "x-GB-Client": "herer-web bbbb2e418b",
      "x-GB-CompanyId": "1bdba944-1f28-40e8-8f6c-253d6bc6cb8f",
      authorization: 'Token token="5EYTXbRtQ7LGlReA6FSUFg"'
    }
  };
  let payload = await request(requestOptions, function(err, response) {
    let body = JSON.parse(response.body);
    return body.brands;
  });
  let parsedResponse = JSON.parse(payload);
  return parsedResponse.brands;
};

go();

// https://api.greenbits.com/api/v2/people?by_query=P708052626&limit=1
