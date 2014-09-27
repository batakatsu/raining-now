var querystring = require('querystring');
var merge       = require('merge');
var httpsync    = require('httpsync');

// モジュール設定
var config = require('./config');

// APIにリクエスト送信して返り値をjsonで取得
function _requestAPI(lat, lng, query_opt) {

	// リクエスト先のURLを生成
	query_opt = query_opt || {};
	var query_object = merge(config.api.default_query, query_opt, {
		coordinates: lng+','+lat
	});
	var url = config.api.base_url + '?' + querystring.stringify(query_object);

	// リクエスト実行
	var request  = httpsync.get({ url: url });
	var responce = request.end();

	// エラー時
	if (responce.statusCode !== 200) {
		console.log('Error request | status: '+responce.statusCode);
	}

	return JSON.parse(responce.data);
}

//------------------------------------------
// RainCheckerクラス
//
var RainChecker = function(lat, lng, opt) {
	this.data = _requestAPI(lat, lng, opt);
}

merge(RainChecker.prototype, {

	is_request_success : function() {
		if (!this.data)
			return false;
		if (this.data.ResultInfo.Status !== 200)
			return false;

		return true;
	},

	is_raining_now : function() {
		return true;
	},

	get_weathers : function() {
		return this.data.Feature[0].Property.WeatherList.Weather;
	},
});

module.exports = RainChecker;
