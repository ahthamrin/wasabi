module.exports = function() {
	return function err(err, req, res, next) {
		console.log(err);
		next();
	}
}