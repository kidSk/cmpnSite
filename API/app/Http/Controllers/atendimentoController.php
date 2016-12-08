<?php

namespace cmpn\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use cmpn\Http\Requests;
use cmpn\Http\Controllers\Controller;
use cmpn\atendimento;

class atendimentoController extends Controller
{
	/*public function __construct(){

		$this->beforeFilter('@find',['only'=>['show','update','destroy']]);

	}*/
	public function store(Request $request)
	{
		atendimento::create($request->all());
		return response()->json(["mensagem"=>"Ficha de Atendimento criado com SUCESSO"]);
	}


	public function index(){

		//return atendimento::all();
		$dep = atendimento::all();
		return response()->json($dep->toArray());
	}

}
