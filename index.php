<?php

declare(strict_types=1);

require __DIR__ . '/protected/vendor/autoload.php';

App\Bootstrap::boot()
	->createContainer()
	->getByType(Nette\Application\Application::class)
	->run();
