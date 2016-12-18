<?php

namespace cmpn;

use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
	protected $table = 'tutors';
	protected $fillable = [];
	public function people (){
		return $this->belongsTo('cmpn\People');
	}


/**
 * Relaçao de 1 para muitos
 * @return Um tutor e todos os pensionistas que el tutela */
public function pensionistas () {
	return $this->hasMany('cmpn\Pensionista');
}
}
