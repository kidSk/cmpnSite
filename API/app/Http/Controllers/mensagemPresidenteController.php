<?php

namespace cmpn\Http\Controllers;

use Illuminate\Http\Request;

use cmpn\Http\Requests;
use cmpn\Http\Controllers\Controller;
use cmpn\mensagemPresidente;

class mensagemPresidenteController extends Controller
{

    public function __construct(){
        $this->middleware('cors');
        $this->beforeFilter('@find',['only'=>['show','update','destroy']]);
    }
    public function find(Route $route){
        $this->mensagemPresidente = mensagemPresidente::find($route->getParameter('mensagem_presidentes'));

    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mensagemPresidente = mensagemPresidente::all();
        return response()->json($mensagemPresidente->toArray());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        mensagemPresidente::create($request->all());
        return response()->json(["mensagem"=>"mensagem criada com sucesso"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json($this->mensagemPresidente);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
