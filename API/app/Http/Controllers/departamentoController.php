<?php

namespace cmpn\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use cmpn\Http\Requests;
use cmpn\Http\Controllers\Controller;
use cmpn\dep;

class departamentoController extends Controller
{
    public function __construct(){
      
        $this->beforeFilter('@find',['only'=>['show','update','destroy']]);

    }
    
    public function find(Route $route){
        $this->dep = dep::find($route->getParameter('departamento'));

    }
    public function index(){
        $dep = dep::all();
        return response()->json($dep->toArray());
    }

    public function store(Request $request){
        dep::create($request->all());
        /*  return response()->json(["mensagem"=>"departamento criado com sucesso"]);*/

    }

    public function show($id){
        return response()->json($this->dep);
    }

    public function update (Request $request, $id){
        $this->dep->fill($request->all());
        $this->dep->save();
        return response()->json(["message"=>"atualizado com sucesso"]);

    }

    public function destroy($id){
        $this->dep->delete();
        return response()->json(["mensagem"=>"departamento eliminado com sucesso"]);
    }
}
