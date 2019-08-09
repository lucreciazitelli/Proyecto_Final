const crypto = require('crypto');
//TODO: change salt and put in different file
const salt = crypto.createHash("sha1").update("some salt").digest("hex");


function sha256(plain){
  return crypto.createHash("sha256").update(plain).digest("hex");
}

function passwordHash(password){
    return sha256(password + salt);
}

module.exports = {passwordHash};
