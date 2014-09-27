/**
 * rain_checker設定
 */
module.exports = {
	'api' : {
		'base_url' : 'http://weather.olp.yahooapis.jp/v1/place',
		'default_query' : {
			appid: process.env.YAHOO_API_APP_KEY,
			output: 'json',
			interval: 5
		}
	}
};
