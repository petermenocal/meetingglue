module.exports = function(address) {
  try {
    validator.validate(address);
    const foundDocument = db.collection("users").findOne({ email: address });
    foundDocument.then(function(user) {
      return user;
    });
  } catch {
    return false;
  }
};
//
