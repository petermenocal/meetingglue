const request = require("request");

function findBySku(sku) {
  let options = {
    url: `https://api.greenbits.com/api/v2/products?by_sku=${sku}&limit=1`,
    headers: {
      Authorization: 'Token token="5EYTXbRtQ7LGlReA6FSUFg"',
      "X-GB-CompanyId": "1bdba944-1f28-40e8-8f6c-253d6bc6cb8f",
      "X-GB-Client": "herer-web 99a0fe5d00"
    }
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body);
      return info;
    }
  }
  return request(options, callback);
}

module.exports = findBySku;
