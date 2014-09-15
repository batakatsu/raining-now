<?php namespace Okomeworld\RainChecker;

use Illuminate\Support\ServiceProvider;

class RainCheckerServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

	public function boot() {
		$this->package('okomeworld/rain_checker');
	}

	/**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		$this->app->bind('rain_checker', function($app){
			return new RainChecker();
		});
	}

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return array('rain_checker');
	}

}
