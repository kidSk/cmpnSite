<?php

namespace cmpn;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
	protected $table ='contacts';
	protected $fillable = ['contact'];

	public function people (){
		return $this->belongsTo('cmpn\Person');
	}
}
