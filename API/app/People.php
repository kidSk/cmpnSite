<?php

namespace cmpn;

use Illuminate\Database\Eloquent\Model;

class People extends Model
{
	protected $table = 'people';
	protected $guarded =['id'];
	
	public function tutor (){
		return $this->hasOne('cmpn\Tutor');
	}
	public function pensionista (){
		return $this->hasOne('cmpn\Pensionista');
	}
	public function residencia (){
		return $this->hasOne('cmpn\Residencia');
	}
	public function contact (){
		return $this->hasOne('cmpn\Contact');
	}


	
}
