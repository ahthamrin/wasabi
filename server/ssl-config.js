var path = require('path'),
      fs = require("fs");

// exports.privateKey = fs.readFileSync(path.join(__dirname, './private/aht-mba.local-key.pem')).toString();
// exports.certificate = fs.readFileSync(path.join(__dirname, './private/aht-mba.local-cert.pem')).toString();

//exports.privateKey = fs.readFileSync(path.join(__dirname, './private/domain.key')).toString();
//exports.certificate = fs.readFileSync(path.join(__dirname, './private/domain.crt')).toString();

exports.privateKey = fs.readFileSync(path.join(__dirname, './private/privkey1.pem')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, './private/cert1.pem')).toString();
