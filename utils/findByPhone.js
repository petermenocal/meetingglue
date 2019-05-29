module.exports = function(phone) {
  try {
    const foundDocument = db.collection("users").find({ phone: phone });
    foundDocument.then(function(user) {
      return user;
    });
  } catch {
    return false;
  }
};
//
