<?php namespace Okomeworld\RainChecker;

/**
 * 今雨降ってるか調べるクラス
 */
class RainChecker {
	
	# APIキーとか突っ込む
	private $_config;

	public function __construct() {
		$this->_config = array(
			"appid" => $_SERVER['YAHOO_API_APP_KEY'],
		);
	}

}
