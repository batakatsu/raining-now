<?php namespace Okomeworld\RainChecker;

class RainChecker {
	
	# APIキーとか突っ込む
	private $_config;

	public function __construct() {
		$this->_config = array(
			"api_key" => $_['SERUVER']['YAHOO_API_APP_KEY'],
		);
	}

}
