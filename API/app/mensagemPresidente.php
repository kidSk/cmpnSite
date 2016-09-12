<?php

namespace cmpn;

use Illuminate\Database\Eloquent\Model;

class mensagemPresidente extends Model
{
	protected $table = "mensagem_presidentes";
	protected $fillable =['msg','img'];

}
