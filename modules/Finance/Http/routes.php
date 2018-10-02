<?php

Route::group([
	'middleware' => ['web', 'auth'],
	'prefix' => 'finance',
	'namespace' => 'Modules\Finance\Http\Controllers'
], function() {
    Route::get('/', 'FinanceController@index')->name('finance.index');

    Route::group(['middleware' => 'permission:finance.setting.create'], function() {
    	/** Ruta de acceso a parámetros de configuración del módulo */
    	Route::get('settings', 'FinanceController@setting')->name('finance.setting.index');
	    /** Rutas para la gestión de entidades bancarias */
	    Route::resource('banks', 'FinanceBankController', ['as' => 'finance']);
	    /** Rutas para la gestión de agencias bancarias */
	    Route::resource('banking-agencies', 'FinanceBankingAgencyController', ['as' => 'finance']);
	});

	Route::get('get-banks', 'FinanceBankController@getBanks');
});