var request = require("request-promise");
var _ = require("lodash");
var url = "mongodb://localhost:27017/exhalebrands";
var MongoClient = require("mongodb").MongoClient;
var ObjId = require("mongodb").ObjectId;
let userRecords = [];

const go = async () => {
  const userCount = await findTotalCustomersCount();
  syncRoutine();
};

const findTotalCustomersCount = async () => {
  var limit = 1;
  var offset = 0;
  var total = 0;
  var requestOptions = {
    method: "GET",
    url: `https://api.greenbits.com/api/v2/people`,
    qs: {
      limit: limit,
      offset: offset,
      "sort_by[field]": "name",
      "sort_by[direction]": "asc"
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
    var totalPeople = resBody.meta.total;
    console.log(`Total people found: ${totalPeople}`);
    return totalPeople;
  });
};

const syncRoutine = async () => {
  let records = [];
  let keepGoing = true;
  let offset = 0;
  while (keepGoing) {
    let response = await getCustomerProfiles(offset);
    await records.push.apply(records, response);
    offset += 1000;
    console.log(`records length ${records.length}`);
    console.log(`offset ${offset}`);
    if (response.length < 1000) {
      keepGoing = false;

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("loyalty");
        dbo.collection("customers").insertMany(records, function(err, res) {
          if (err) throw err;
          db.close();
        });
      });
      return records;
    }
  }
};

const getCustomerProfiles = async offset => {
  var limit = 1000;
  var requestOptions = {
    method: "GET",
    url: `https://api.greenbits.com/api/v2/people`,
    qs: {
      limit: limit,
      offset: offset,
      "sort_by[field]": "name",
      "sort_by[direction]": "asc"
    },
    headers: {
      "x-gb-client": "herer-web bbbb2e418b",
      "x-gb-companyid": "2d7a8d6c-cded-4dd9-b9e9-dce5ae187bfb",
      authorization: 'Token token="5EYTXbRtQ7LGlReA6FSUFg"'
    }
  };
  let payload = await request(requestOptions, function(err, response) {
    let body = JSON.parse(response.body);
    return body.people;
  });
  let parsedResponse = JSON.parse(payload);
  return parsedResponse.people;
};

go();

// https://api.greenbits.com/api/v2/people?by_query=P708052626&limit=1
