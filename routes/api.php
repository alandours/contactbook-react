<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('contacts/setup', 'ContactController@getAppData');

Route::get('contacts/list', 'ContactController@list');

Route::get('contacts/search/{text}', 'ContactController@search');

Route::post('contacts/add', 'ContactController@add');

Route::post('contacts/{id}/update', 'ContactController@update');

Route::delete('contacts/{id}/delete', 'ContactController@delete');

Route::get('contacts/{id}', 'ContactController@get');