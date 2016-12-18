<?php

namespace cmpn\Http\Controllers;

use Illuminate\Http\Request;

use cmpn\Http\Requests;
use cmpn\Http\Controllers\Controller;
use cmpn\People;


class personController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(){
        $this->middleware('cors');
      //  $this->beforeFilter('@find',['only'=>['show','update','destroy']]);

    }

    //armazenar na bd

    public function store(Request $request){
        People::create($request->all());
        return response()->json(["message"=>"criado com sucesso"]);


    }

//recuperar dados da bd 

    public function index(){
     //   $People  = People ::all();
        $People =People ::all();
        return $People ->toArray();
    }

    public function show ($id){
        $people = People::find($id);
        return $people->toArray();
    }

    public function residencia ($id){
        $people = People::find($id)->residencia;
        return $people->toArray();
    }


}
