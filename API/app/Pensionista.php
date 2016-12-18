<?php

namespace cmpn;

use Illuminate\Database\Eloquent\Model;

class Pensionista extends Model
{
	protected $table = 'pensionistas';
	protected $fillable =['situacao'];
	
	public function people (){
		return $this->belongsTo('cmpn\People');
	}
	public function tutors(){
		return $this->belongsTo('cmpn\Tutor');
	}

}
