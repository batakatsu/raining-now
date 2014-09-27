var express      = require('express');
var validator    = require('validator');
var router       = express.Router();

var RainChecker = require('rain_checker');

router.get('/', function(req, res, next) {
	var lat = validator.toFloat(req.query.lat);
	var lng = validator.toFloat(req.query.lng);

	if (!lat || !lng) {
		var error = new Error('Undefined lat or lng param');
		error.status = 500;
		next(error);
	}

	var rain_checker = new RainChecker(lat, lng);

	if (!rain_checker.is_request_success()) {
		var error = new Error('Failed rquest to API');
		error.status = 500;
		next(error);
	}

	res.send(rain_checker.get_recent_weather());
});

module.exports = router;
