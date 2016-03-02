module.exports = function(server) {
	var User = server.models.User;
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  // router.get('/', server.loopback.status());

  server.wasabi = server.wasabi || {};
  server.wasabi.loggedIn = server.wasabi.loggedIn || {};

  router.post('/login', function(req, res) {
  	var email = req.body.email;
  	var password = req.body.password;

    User.login({
      email: email,
      password: password
    }, 'user', function(err, token) {
      console.log('err',err);
      if (err)
        return res.status(401).json({
          email: email,
          loginFailed: true
        });

      console.log('token login',token);
      token = token.toJSON();

      server.wasabi.loggedIn[token.id] = token;
      
      return res.json(token);
    });
  });

  server.use(router);
};
