<?php

class RainCheckerTest extends \PHPUnit_Framework_TestCase {

	protected function getRainChecker() {
		return $this->getMockBuilder('Okomeworld\RainChecker\RainChecker')
		            ->setMethods(array('test')) // TODO なんでかsetMethodsしないと返り値全部nullになる。原因調べる。
			    ->getMock();
	}

	public function testRequest() {
		$rain_checker = $this->getRainChecker();
		$coordinate = array(
			135.758600,
			34.985262,
		);
		var_dump($rain_checker->request($coordinate));
		$this->assertTrue(true);
	}
}
