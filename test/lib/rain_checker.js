var RainChecker = require('rain_checker');

var lat = 35.011636;
var lng = 135.768029;
var opt = {};

var rain_checker = new RainChecker(lat, lng, opt);

console.log(opt);
console.log(rain_checker.is_request_success());
console.log(rain_checker.get_weathers());

var recent_weather = rain_checker.get_recent_weather();
console.log(recent_weather);

console.log(rain_checker.get_past_weathers());
