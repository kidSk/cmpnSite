<?php

namespace cmpn;

use Illuminate\Database\Eloquent\Model;

class Residencia extends Model
{
	protected $table = 'residencias';
	protected $fillable =  ['zona','freguesia','concelho','ilha' ,'ponto_referencia'];

	public function people (){
		return $this->belongsTo('cmpn\Person');
	}
}
