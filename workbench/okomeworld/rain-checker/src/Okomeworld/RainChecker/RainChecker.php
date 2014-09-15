<?php namespace Okomeworld\RainChecker;

/**
 * 今雨降ってるか調べるクラス
 */
class RainChecker {

	const REQUEST_URL = 'http://weather.olp.yahooapis.jp/v1/place';
	
	# APIキーとか突っ込む
	private $_config;

	/**
	 * リクエストパラメータのデフォルト値
	 *
	 * @output	(json|xml)	出力形式
	 * @callback	null		呼び出し時のコールバック関数（今回は使用しない）
	 * @date	YYYYDDMMHHMI	指定した日時のデータを取得
	 * @past	(0|1|2)		過去の降水量を取得するか（0: 取得しない, 1: 1時間前までのデータを取得, 2: 2時間前までのデータを取得）
	 * @interval	(5|10)		指定した分刻みでデータを取得
	 */
	private $_default_options = array(
		'output'   => 'json',
		'callback' => '',
		'date'     => '',
		'past'     => 0,
		'interval' => 5,
	);

	public function __construct() {
		$this->_config = array(
			"appid" => $_SERVER['YAHOO_API_APP_KEY'],
		);
	}

	public function request($coordinates=array(), $opt=array()) {
		$query_params = array_merge($opt, $this->_default_options);

		$query_params['appid']       = $this->_config['appid'];
		$query_params['coordinates'] = join(',', $coordinates);

		$query = http_build_query($query_params);
		$url   = self::REQUEST_URL .'?'. $query;

		return file_get_contents($url);
	}

}
