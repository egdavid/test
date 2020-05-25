<?php

namespace App\Repositories;

use Illuminate\Support\ServiceProvider;

class FormServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->bind(
            'App\Repositories\FormRepositoryInterface',
            'App\Repositories\FormRepository'
        );
    }
}
