var bodyParser = require('body-parser');
var loopback = require('loopback');
var boot = require('loopback-boot');
var xerrorhandler = require('./middleware/xerrorhandler');

var app = module.exports = loopback();

app.middleware('initial', bodyParser.urlencoded({ extended: true }));
app.middleware('initial', bodyParser.json());

app.start = function() {
  // start the web server
  var server = app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
    // console.log(app);
  });
  console.log(server);
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
