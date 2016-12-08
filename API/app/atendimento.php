<?php

namespace cmpn;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class atendimento extends Model
{
	use SoftDeletes;
	protected $table="atendimentos";
	protected $fillable = ['name','idade','morada','assunto','sexo'];
	protected $dates = ['delete_at'];


}
