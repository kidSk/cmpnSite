<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
	return view('index');
});
Route::get('/error403', function () {
	return view('403');
});
Route::get('/admin', function () {
	return view('admin');
});
Route::get('/social', function () {
	return view('social');
});



/*
Route::get('/admin', function () {
	return view('admin');
});
Route::get('/home', function () {
	return view('home');
});
Route::get('/departamentos', function () {
	return view('dep');
});
*/

Route::group(['middleware'=>'cors'],function(){
	Route::post('login','loginController@userAuth');
	Route::resource('departamento','departamentoController');
	Route::resource('cargo','cargoController');
	Route::resource('usuariosRegistados','usuariosRegistadosController');
	Route::resource('mensagemPresidente','mensagemPresidenteController');
	Route::resource('atendimento','atendimentoController');
	//person route
	Route::resource('person','personController');
	Route::resource('person/{id}/residencia','personController@residencia');
	Route::resource('person/{id}/contact','personController@contact');
	//tutor route
	Route::resource('tutor','tutorController');
	Route::resource('tutor/{id}/people','tutorController@people');
	//pensionista route
	Route::resource('pensionista','pensionistaController');
	Route::get('users','loginController@index');
	Route::get('users/{id}','loginController@show');
	
});
