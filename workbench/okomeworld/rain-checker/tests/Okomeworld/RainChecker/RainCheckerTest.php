<?php

class RainCheckerTest extends \PHPUnit_Framework_TestCase {

	private $coordinates = array(
		135.758600,
		34.985262,
	);

	protected function getRainChecker() {
		return $this->getMockBuilder('Okomeworld\RainChecker\RainChecker')
		            ->setMethods(array('test')) // TODO なんでかsetMethodsしないと返り値全部nullになる。原因調べる。
			    ->getMock();
	}

	public function testRequest() {
		$rain_checker = $this->getRainChecker();
		var_dump($rain_checker->request($this->coordinates));
		$this->assertTrue(true);
	}

}
