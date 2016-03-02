var bodyParser = require('body-parser')
  , https = require('https')
  , helmet = require('helmet')
  , loopback = require('loopback')
  , boot = require('loopback-boot')
  , xerrorhandler = require('./middleware/xerrorhandler')
  , sslConfig = require('./ssl-config')
  ;


var app = module.exports = loopback();

app.middleware('initial', bodyParser.urlencoded({ extended: true }));
app.middleware('initial', bodyParser.json());
/*app.use(helmet.contentSecurityPolicy({
  imgSrc: ["'self'", 'data:','http://**']
}))*/

// console.log(app);
app.start = function(httpOnly) {
  // start the web server
  if(httpOnly === undefined) {
    httpOnly = process.env.HTTP;
  }
  var server = null;
  if(!httpOnly) {
    var options = {
      key: sslConfig.privateKey,
      cert: sslConfig.certificate
    };
    server = https.createServer(options, app);
  } else {
    server = http.createServer(app);
  }

  server.listen(app.get('port'),function() {
    var baseUrl = (httpOnly? 'http://' : 'https://') + app.get('host') + ':' + app.get('port');
    app.emit('started',baseUrl);

    console.log('Web server listening at: %s', app.get('url'));
    // console.log(app);
  });
  console.log('-------------------------');
  // console.log(server);
  return server;
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) {
    // app.start();
    app.io = require('socket.io')(app.start());
    var socketIO = require('./socket-io')(app); 
  }

});
