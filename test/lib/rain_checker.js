require('date-utils');
var RainChecker = require('rain_checker');

date = new Date();

var lat = 35.011636;
var lng = 135.768029;
var opt = {};

var rain_checker = new RainChecker(lat, lng, opt);

console.log(opt);
console.log(rain_checker.is_request_success());
console.log(rain_checker.get_weathres());
