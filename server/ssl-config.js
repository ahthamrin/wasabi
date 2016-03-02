var path = require('path'),
      fs = require("fs");

exports.privateKey = fs.readFileSync(path.join(__dirname, './https-key/domain.key')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, './https-key/domain.crt')).toString();
