<?php

namespace cmpn\Http\Controllers;

use Illuminate\Http\Request;

use cmpn\Http\Requests;
use cmpn\Http\Controllers\Controller;
use cmpn\User;

class loginController extends Controller
{
   public function userAuth(Request $request){
    $credentials = $request->only('email','password');
    $token=null;
    try{
        if(!$token=JWTAuth::attempt($credentials)){
            return response()->json(['error'=>'credenciais invalidos']);
        }

    }catch(JWTException $ex){
        return response()->json(['error'=>'algo de errado'],500);

    }

    return response()->json(compact('token'));

}
}
